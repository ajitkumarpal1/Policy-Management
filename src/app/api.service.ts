import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from './policy';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /* PHP_API_SERVER = "http://ajit12.epizy.com/"; */
  PHP_API_SERVER = "https://9099104.000webhostapp.com";
  constructor(private httpClient: HttpClient) { }

  readPolicies(): Observable<Policy[]>{
    console.log (this.PHP_API_SERVER+`angular-php-app/backend/api/read.php`);
    return this.httpClient.get<Policy[]>(this.PHP_API_SERVER+`/php/read.php`);

    //return this.http.get<Button[]>("http://"+this.path+"/angular/alluser.php")
  }
  
  createPolicy(policy:any): Observable<Policy>{
/*     return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/angular-php-app/backend/api/create.php`,policy);
 */    /*     return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/angular-php-app/backend/api/create.php`,objfinal);
 */    return  this.httpClient.post<any>(this.PHP_API_SERVER+"/php/create.php",policy);
  }
  updatePolicy(policy:any){
    return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/php/update.php`, policy);
  }
  deletePolicy(id: number){
    
    return this.httpClient.get<Policy>(`${this.PHP_API_SERVER}/php/delete.php/?id=${id}`);
  }  
    
}


