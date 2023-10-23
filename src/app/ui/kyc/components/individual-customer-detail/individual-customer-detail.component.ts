import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';

@Component({
  selector: 'app-individual-customer-detail',
  templateUrl: './individual-customer-detail.component.html',
  styleUrls: ['./individual-customer-detail.component.scss']
})
export class IndividualCustomerDetailComponent implements OnInit {

  @Input() data: any;
  allMeeting!: any[];
  allMeetingDetails!: any;
  meetingId!: number;

  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      custom: [

     

      ],
      position: 'right',
    },
    columns: {
      strategy: {
        title: 'Strategy',
        filter: false,
        valuePrepareFunction: (cell: any, row: { strategy: string }) =>
          row.strategy.split(',').map((strat) => strat.trim()).join('<br/>'),
        type: 'html',
      },
      assets:{
        title: 'Assets',
        filter: false,
        valuePrepareFunction: (cell: any, row: { assets: string }) =>
          row.assets.split(',').map((strat) => strat.trim()).join('<br/>'),
        type: 'html',
     
      },
      spaces: {
        title: 'Spaces',
        filter: false,
        valuePrepareFunction: (cell: any, row: { spaces: string }) =>
          row.spaces.split(',').map((strat) => strat.trim()).join('<br/>'),
        type: 'html',
    
       
      },
      socialIntrests: {
        title: 'Social Intrests',
        filter: false,
        valuePrepareFunction: (cell: any, row: { socialIntrests: string }) =>
          row.socialIntrests.split(',').map((strat) => strat.trim()).join('<br/>'),
        type: 'html',
       
       
      },
      businessIntrests: {
        title: 'Business Intrests',
        filter: false,
        valuePrepareFunction: (cell: any, row: {  businessIntrests: string }) =>
          row.businessIntrests.split(',').map((strat) => strat.trim()).join('<br/>'),
        type: 'html',
      
       
      },
      banking: {
        title: 'Banking',
        filter: false,
        valuePrepareFunction: (cell: any, row: {  banking: string }) =>
          row.banking.split(',').map((strat) => strat.trim()).join('<br/>'),
        type: 'html',
      
       
      },
      insurance: {
        title: 'Insurance',
        filter: false,
        valuePrepareFunction: (cell: any, row: {   insurance: string }) =>
          row.insurance.split(',').map((strat) => strat.trim()).join('<br/>'),
        type: 'html',
      
       
       
      },
      investments: {
        title: 'Investments',
        filter: false,
        valuePrepareFunction: (cell: any, row: {   investments: string }) =>
          row.investments.split(',').map((strat) => strat.trim()).join('<br/>'),
        type: 'html',
      
      },
      oneZbs: {
        title: 'One ZB',
        filter: false,
        valuePrepareFunction: (cell: any, row: {   oneZbs: string }) =>
          row.oneZbs.split(',').map((strat) => strat.trim()).join('<br/>'),
        type: 'html',
       
       
      },
      recommendations: {
        title: 'Recommendations', 
        filter: false,
        valuePrepareFunction: (cell: any, row: {   recommendations: string }) =>
          row.recommendations.split(',').map((strat) => strat.trim()).join('<br/>'),
        type: 'html',
       
      },
    },
  };

  constructor(private service: ApiService, private route: ActivatedRoute,protected dialogRef: NbDialogRef<IndividualCustomerDetailComponent>) {}

  ngOnInit() {
    
    this.getMeetingDetails();
  }

  

  getMeetingDetails() {
    this.service.getFromUrl(`http://localhost:8005/zbPlusPlatnum/getKYCById/${this.data.id}`).subscribe((response) => {
      this.allMeeting = [response.data];
      this.allMeetingDetails = response.data
      console.log(this.allMeetingDetails);
    });
  }

  dismiss(){
    this.dialogRef.close();
  }

}
