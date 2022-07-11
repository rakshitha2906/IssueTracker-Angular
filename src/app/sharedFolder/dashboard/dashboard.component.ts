import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  TodoResponse:any;
  InprogressResponse:any;
  DoneResponse:any;
  

  constructor(private apiData:ApiDataService) { 
    apiData.TodoResponse().subscribe((data)=>{
      this.TodoResponse = data
      this.TodoResponse = this.TodoResponse.slice(0,4)  
    })

    apiData.InprogressResponse().subscribe((data)=>{
      this.InprogressResponse = data
      this.InprogressResponse = this.InprogressResponse.slice(0,4)
    })

    apiData.DoneResponse().subscribe((data)=>{
      this.DoneResponse = data
      this.DoneResponse = this.DoneResponse.slice(0,4)
    })

  }

  ngOnInit(): void {
  }

}
