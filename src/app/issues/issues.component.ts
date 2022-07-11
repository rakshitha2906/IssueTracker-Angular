import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../services/api-data.service';
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  TodoResponse:any;
  InprogressResponse:any;
  DoneResponse:any;
  

  constructor(private apiData:ApiDataService) { 
    apiData.TodoResponse().subscribe((data)=>{
      console.log("Todo",data)
      this.TodoResponse = data 
    })

    apiData.InprogressResponse().subscribe((data)=>{
      console.log("In Progress",data)
      this.InprogressResponse = data
    })

    apiData.DoneResponse().subscribe((data)=>{
      console.log("Done",data)
      this.DoneResponse = data
    })

  }

  ngOnInit(): void {
  }

}
