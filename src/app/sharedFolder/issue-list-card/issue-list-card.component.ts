import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'issue-list-card',
  templateUrl: './issue-list-card.component.html',
  styleUrls: ['./issue-list-card.component.scss']
})
export class IssueListCardComponent implements OnInit {
  @Input() status:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
