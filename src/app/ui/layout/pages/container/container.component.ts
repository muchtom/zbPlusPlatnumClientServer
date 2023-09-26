import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { AuthService } from 'src/app/shared/shared/services';
import { LoginService } from 'src/app/shared/shared/services/login.service';
import { LayoutService } from '../../service/layout.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
 items: NbMenuItem[] = [

  {
    title: 'Stock Status',
    icon: 'book',
    link: 'system-parameters/home'
  },
  // {
  //   title: 'Daily Sale',
  //   icon: 'book',
  //   link: 'system-parameters/line-chart'
  // },
  {
    title: 'Products',
    icon: 'book',
    expanded: false,
    children: [
      {
      title: 'Product Delivery',
      link: 'product/product-delivery'
      },
      {
        title: 'Product Sale',
        link: 'product/product-sale'
      },
      {
        title: 'Pricing',
        link: 'product/product-pricing'
      }

    ]
  },  
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService,
    private loginService: LoginService,
    private menuService: NbMenuService,
    private auth: AuthService,
    private http: HttpClient
  ) { }

  userDetails:any
 


  ngOnInit(): void {
    this.initialiseMenu()
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    console.log(user);
    
    this.userDetails = user.sub

  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, ' ');
    this.layoutService.changeLayoutSize();

    return false;
  }
  logout() {
    this.loginService.logout();
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  private initialiseMenu(){
    try{
      console.log('initialiseMenu');
     
      const currentUser  = JSON.parse(sessionStorage.getItem('user') ?? '{}');
      const authUser = currentUser.authorities.authority;
      const adminAuthority = currentUser.authorities.find((authority: { authority: string; }) => authority.authority);
      console.log(adminAuthority.authority);
      
  
  
      if(adminAuthority.authority.includes('admin:update') || 
      adminAuthority.authority.includes('admin:create') || 
      adminAuthority.authority.includes('admin:delete') || 
      adminAuthority.authority.includes('admin:read')){
        this.items = [
            {
            title: 'Activities',
            icon: 'book',
            link: 'customers/customer-detail'
          },
          
          {
            title: 'Monthly Subscription',
            icon: 'book',
            link: 'customers/customer-payment'
          },
          {
            title: 'Subscriptions',
            icon: 'person',
            link: 'subscription/details'
          },

         
        ];
      }
      // eslint-disable-next-line no-dupe-else-if
      else if(adminAuthority.authority.includes('customer:update') || 
      adminAuthority.authority.includes('customer:delete') || 
      adminAuthority.authority.includes('customer:create') || 
      adminAuthority.authority.includes('customer:read')) {
        this.items = [
          
        ];
      }

      else if(adminAuthority.authority.includes('ROLE_USER')){
        this.items = [
          {
            title: 'Stock Status',
            icon: 'book',
            link: 'system-parameters/home'
          },
          // {
          //   title: 'Daily Sale',
          //   icon: 'book',
          //   link: 'system-parameters/line-chart'
          // },
         
        ];
      }
    }
    catch (e) {
      // setTimeout(() => this.initialiseMenu(), 1000);
    }
  }
  
    currentTheme = 'default';
}
