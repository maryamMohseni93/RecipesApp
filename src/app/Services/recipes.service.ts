import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  baseUrl : string;

  constructor(private http: HttpClient) { }
  public getJSON(): Observable<any> {
    return this.http.get("../assets/data.Json");
}
}
