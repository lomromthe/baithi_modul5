import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../model/tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) { }
  findById(id : number):Observable<Tour>{
    return this.http.get<Tour>("http://localhost:3000/tours/" +id);
  }
  findAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>("http://localhost:3000/tours");
  }

  create(tour : Tour):Observable<any>{
    return this.http.post("http://localhost:3000/tours",tour);
  }

  delete(id : number):Observable<any>{
    return this.http.delete<any>("http://localhost:3000/tours/" + id );
  }

  showDetail(id : number):Observable<Tour>{
    return this.http.get<Tour>("http://localhost:3000/tours/" + id );
  }

  edit(id: number,tour: Tour):Observable<Tour>{
    return this.http.put<Tour>("http://localhost:3000/tours/" + id,tour);
  }
}
