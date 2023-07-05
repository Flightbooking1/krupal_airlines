import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirm(message: string, acceptCallback: () => void, rejectCallback: () => void) {
    this.confirmationService.confirm({
      message: message,
      icon: 'pi pi-exclamation-triangle',
      accept: acceptCallback,
      reject: rejectCallback
    });
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: detail });
  }
}

