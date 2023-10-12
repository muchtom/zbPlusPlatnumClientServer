import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {


  constructor(private http:HttpClient) { }

  uploadDocument(file: File, meetingId: number, activityId: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
  
    const req = new HttpRequest(
      'POST',
      // `http://localhost:8099/upload?meetingId=${meetingId}`
      `http://localhost:8004/upload?memberId=${meetingId}&adminActivityId=${activityId}`,
      formData,
      {
        responseType: 'json'
      }
    );
    return this.http.request(req);
  }
}
