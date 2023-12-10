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
              title: 'Customers',
              icon: 'list',
              link: 'kyc/customer-detail'
          },
          {
             title: 'Invitation to Join',
             icon: 'settings',
             link: 'kyc/customer-invitation'
          },
          {
            title: 'Onboarding',
            icon: 'book',
            link: 'kyc/onboard-customer'
          },
          {
            title: 'Service Activation',
            icon: 'radio',
            link: 'kyc/service-activation'
          },
          {
            title: 'Queries',
            icon: 'calendar',
            link: 'kyc/query-info'
          },
          {
            title: 'Subscriptions',
            icon: 'bar-chart',
            link: 'customers/customer-transaction'
          },
          {
            title: 'Approvals',
            icon: 'pie-chart',
            link: 'kyc/approval'
          },
          {
            title: 'Create Customer Profile',
            icon: 'person',
            link: 'member/member-detail'
          },
          {
            title: 'Call Preparation & Reports',
            icon: 'phone',
            link: 'call-preparation/set-call'
          },
          {
            title: 'Prepared Calls',
            icon: 'star',
            link: 'call-preparation/prepared-calls'
          },
       
        
          // {
          //   title: 'Redeem',
          //   icon: 'book',
          //   expanded: false,
          //   children: [
          //     {
          //       title: 'Qualified Customers',
          //       link: 'redeem/qualify'
          //     },
          //     {
          //       title: 'Cashback Reedem',
          //       link: 'redeem/cashback'
          //     },
          //     {
          //       title: 'Transaction',
          //       link: 'redeem/redeem-transactions'
          //     }
          //   ],
          // },
         
       

         
        ];
      }
      // eslint-disable-next-line no-dupe-else-if
      else if(adminAuthority.authority.includes('customer:update') || 
      adminAuthority.authority.includes('customer:delete') || 
      adminAuthority.authority.includes('customer:create') || 
      adminAuthority.authority.includes('customer:read')) {
        this.items = [
          {
            title: 'Onboarding',
            icon: 'book',
            link: 'kyc/onboard-customer-info'
          },
          {
            title: 'Service Activation',
            icon: 'radio',
            link: 'kyc/service-user-activation'
          },
          {
            title: 'Queries',
            icon: 'bar-chart',
            link: 'kyc/query-user-info'
          },
          {
            title: 'Subscriptions',
            icon: 'calendar',
            link: 'customers/user-transaction'
          },
          {
            title: 'Profile',
            icon: 'person',
            link: 'kyc/kyc-user'
          },
       
        
          // {
          //   title: 'Reedem',
          //   icon: 'book',
          //   link: 'redeem/redeem-detail'
          // },    
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
