import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  TodoUrl="http://localhost:8000/api/v1/issues/?short_id=&priority=&priority__in=&status=TODO&status__in=&assignee=&created_date_after=&created_date_before=&updated_date_after=&updated_date_before=";

  InprogressUrl="http://localhost:8000/api/v1/issues/?short_id=&priority=&priority__in=&status=DOING&status__in=&assignee=&created_date_after=&created_date_before=&updated_date_after=&updated_date_before=";

  DoneUrl="http://localhost:8000/api/v1/issues/?short_id=&priority=&priority__in=&status=DONE&status__in=&assignee=&created_date_after=&created_date_before=&updated_date_after=&updated_date_before="

  UserUrl="http://localhost:8000/api/v1/users"

  constructor(private http: HttpClient) { }
  TodoResponse()
  {
    return this.http.get(this.TodoUrl)
  }
  InprogressResponse()
  {
    return this.http.get(this.InprogressUrl)
  }
  DoneResponse()
  {
    return this.http.get(this.DoneUrl)
  }
  UserResponse()
  {
    return this.http.get(this.UserUrl)
  }

}
