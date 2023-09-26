import { Injectable, Injector } from "@angular/core";
import { CanActivate, Router, GuardsCheckEnd, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { filter, Observable } from "rxjs";
import { AuthService } from "../services";
import { AlertService } from "../services/alert.service";

@Injectable()
export class AuthGuard implements CanActivate {
  menus: any[] = [];

  constructor(public router: Router, public service: AuthService, private injector: Injector,
              private nzNotification: AlertService) {
    router.events.pipe(filter(event => event instanceof GuardsCheckEnd))
      .subscribe((event) => {
        if (this.isAuthorized(event as GuardsCheckEnd)) return;
        this.router.navigateByUrl('/unauthorized');
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = state.url;
    if (!this.service.isAuthenticated() || !this.validateRoles(route.data['roles']))
      return this.router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: url } });
    return true;
  }

  validateRoles(roles: unknown[]): boolean {
    if (!roles) return true;
    const valid = roles.some(role => this.service.permissions.includes(role));
    if (!valid)
      this.nzNotification.showError('Unauthorized Role', );
    return valid;
  }


  isAuthorized(event: GuardsCheckEnd): boolean {
    const menu = this.findMenu(event.url);
    if (!menu || !menu.permissions) return true;
    return this.validateRoles(menu.permissions);
  }

  findMenu(url: string): any {
    if (!this.menus) return null;
    return this.menus.find(m => url.includes(m.routerLink));
  }

}
