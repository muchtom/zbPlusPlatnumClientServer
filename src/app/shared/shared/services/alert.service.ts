import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root' // It will inject this provider at the root level of the application so it can be accessed anywhere.
})
export class AlertService {
  constructor(private toastrService: NbToastrService) {}

  showSuccess(message: string) {
    this.toastrService.show(message, 'Success', { status: 'success' });
  }

  showError(message: string) {
    this.toastrService.show(message, 'Error', { status: 'danger' });
  }

  showWarning(message: string) {
    this.toastrService.show(message, 'Warning', { status: 'warning' });
  }
}
