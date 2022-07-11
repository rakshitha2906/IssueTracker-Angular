import { Component, OnInit,Input } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';

@Component({
  selector: 'app-issuelist',
  templateUrl: './issuelist.component.html',
  styleUrls: ['./issuelist.component.scss']
})
export class IssuelistComponent implements OnInit {

  @Input() id:string=''
  @Input() title:string=''
  @Input() description:string=''
  @Input() status:string=''
  @Input() assignee:number
  @Input() date:Date

  UserResponse:any;

  constructor(private apiData:ApiDataService) { 
    apiData.UserResponse().subscribe((data)=>{
      this.UserResponse = data
      
    })
  }

  ngOnInit(): void {
  }

  

}
