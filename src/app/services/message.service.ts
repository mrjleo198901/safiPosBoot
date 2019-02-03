import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from 'primeng/primeng';

type Severities = 'success' | 'info' | 'warn' | 'error';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  notificationChange: Subject<object> = new Subject<object>();

  notify(severity: Severities, summary: string, detail: string) {
    this.notificationChange.next({ severity, summary, detail });
  }


}
