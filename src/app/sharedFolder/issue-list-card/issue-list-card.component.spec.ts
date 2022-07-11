import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListCardComponent } from './issue-list-card.component';

describe('IssueListCardComponent', () => {
  let component: IssueListCardComponent;
  let fixture: ComponentFixture<IssueListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
