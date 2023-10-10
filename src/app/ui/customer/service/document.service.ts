import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http:HttpClient) { }

  // uploadDocument(file:File):Observable<HttpEvent<any>>{
  //   const formData:FormData  = new FormData();
  //   formData.append('file',file)
  //   const req = new HttpRequest('POST','http://localhost:8099/sangano/files/upload?meetingId=1',formData,{
  //     responseType:'json'
  //   });
  //   return this.http.request(req);
   
    
  // }

  uploadDocument(file: File, meetingId: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('image', file);
  
    const req = new HttpRequest(
      'POST',
      `http://localhost:8004/zbLoyalty/addNewCustomerActivity`,
      formData,
      {
        responseType: 'json'
      }
    );
    return this.http.request(req);
  }
}
