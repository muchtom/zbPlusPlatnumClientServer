import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Reports',
      icon: 'person-outline',
      expanded: false,
      children: [
        {
          title: 'All',
          link: 'reports/home'
        },

      ],
    },
    {
      title: 'System Parameters',
      icon: 'settings',
      expanded: false,
      children: [
        {
          title: 'Department',
          link: 'system-parameters/departments'
        }, {
          title: 'Companies',
          link: 'system-parameters/companies'
        }, {
          title: 'Banks',
          link: 'system-parameters/banks'
        }, {
          title: 'Assets',
          link: 'system-parameters/assets'
        },

      ],
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',

    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
