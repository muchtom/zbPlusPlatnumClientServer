import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userRoles: any = {};
  authoritiesArray: string[] = []; // Array to store authorities

  constructor(private permissionsService: NgxPermissionsService) {}

  ngOnInit() {
    this.userRoles = JSON.parse(sessionStorage.getItem('user') ?? '{}');

    if (this.userRoles.authorities) {
      // Convert authorities to an array
      this.authoritiesArray = this.userRoles.authorities.map((auth: any) => auth.authority);

      console.log(this.authoritiesArray);

      // Load permissions using the authorities array
      this.permissionsService.loadPermissions(this.authoritiesArray);
    }
  }

}
