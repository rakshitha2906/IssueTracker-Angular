import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-issuetype',
  templateUrl: './issuetype.component.html',
  styleUrls: ['./issuetype.component.scss']
})
export class IssuetypeComponent implements OnInit {

  @Input() id:string=''
  @Input() title:string=''
  @Input() description:string=''
  @Input() status:string=''
  @Input() assignee:number
  @Input() date:Date

  constructor() { }

  ngOnInit(): void {
  }

}
