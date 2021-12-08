import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';
import {About} from '../about/About'
@Injectable()
export class AboutService {

  constructor(private http:HttpClient) { }
  path:string="http://localhost:5000/api/v1/about/";
  getAbout():Observable<About[]> {
    return this.http.get<About[]>(this.path+"get").pipe(
      tap(data=>console.log(JSON.stringify(data))),// pipenin tipe ile log alıcağmızı catchError ile hata alıcağmızı söyledik
      catchError(this.handleError)//bu iki metodla henüz alınmamış yoldaki dataya hata ayıklama ve loglama yapabiliriz subscribe olmadan.
    );
   };
   handleError(err: HttpErrorResponse) {
     let errorMessage='';
     if(err.error instanceof ErrorEvent){
         errorMessage='Bir hata oluştu'+err.error.message
     }else{
       errorMessage='sistemsel bir hata'
     }
     return throwError (errorMessage);
   }

   addAbout(about:About):Observable<About>{
      const httOptions={
        headers:new HttpHeaders({
          'Conent-Type':'application/json',
          'Authorization':'Token'
        })
      }
      return this.http.post<About>(this.path+"create",about,httOptions).pipe(
        tap(data=>console.log(JSON.stringify(data))),// pipenin tipe ile log alıcağmızı catchError ile hata alıcağmızı söyledik
        catchError(this.handleError)//bu iki metodla henüz alınmamış yoldaki dataya hata ayıklama ve loglama yapabiliriz subscribe olmadan.
      );
   }
}
