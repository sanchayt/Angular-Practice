import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseReversalComponent } from './case-reversal.component';

describe('CaseReversalComponent', () => {
  let component: CaseReversalComponent;
  let fixture: ComponentFixture<CaseReversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseReversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseReversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
