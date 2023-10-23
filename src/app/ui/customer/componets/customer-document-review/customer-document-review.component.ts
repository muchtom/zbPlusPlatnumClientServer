import { Component, Injector, Input, OnInit, Optional, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { NgxExtendedPdfViewerComponent } from 'ngx-extended-pdf-viewer';
import { EnvironmentInterface, _environment } from 'src/app/shared/shared';
import { ApiService, ReportService } from 'src/app/shared/shared/services';

@Component({
  selector: 'app-customer-document-review',
  templateUrl: './customer-document-review.component.html',
  styleUrls: ['./customer-document-review.component.scss']
})
export class CustomerDocumentReviewComponent implements OnInit {

  @Input() data:any;
  url!: string;
  visible!: boolean;
  pdfLoaded!: boolean;
  baseUrl!: string;
  reportName!:string;

  BalanceSheetReportForm!: FormGroup;
  constructor(
    @Optional() private dialogRef: NbDialogRef<any>,
    private reportService: ReportService,
    private fb: FormBuilder,
    private dialogService: NbDialogService,
    private injector: Injector,
    private service: ApiService
  ) {
    this.baseUrl =
      this.injector.get<EnvironmentInterface>(_environment).environment;
  }
  @ViewChild('pdfViewer', { static: false }) pdfViewer:
  | NgxExtendedPdfViewerComponent
  | any;

zoomIn(): void {
  if (this.pdfViewer) {
    this.pdfViewer.zoomIn();
  }
}

zoomOut(): void {
  if (this.pdfViewer) {
    this.pdfViewer.zoomOut();
  }
}
  ngOnInit(): void {
    this.pdfLoaded = true;
    // this.loadReport();
    this.reportForm();
    console.log(this.data)
  }

  reportForm() {
    this.BalanceSheetReportForm = this.fb.group({
 
    });
  }
  loadReport() {

  const REPORTSLINK = `http://localhost:8005/files/${this.data.fileName}`;
    // const REPORTSLINK = `http://192.168.10.60:7304/report/balance_sheet?fromDate=${newDate}&toDate=${newtoDate}`;
    this.reportService.getReport(REPORTSLINK).subscribe((r) => {
      this.url = `${REPORTSLINK}`;
      this.reportName = "Customer Report  "
    });
  }
  sendMail(): void {
    const subject = 'Hello';
    const body = 'This is the body of the email';
console.log(this.url);

    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&attachment=${encodeURIComponent(this.url)}`;
    window.location.href = mailtoUrl;
  }

}
