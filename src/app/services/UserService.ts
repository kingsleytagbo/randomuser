import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService{

    private REST_API_SERVER = "https://randomuser.me/api/";

    constructor(private http: HttpClient) { }

    public getRandomUser(){
        return this.http.get(this.REST_API_SERVER);
      }

}