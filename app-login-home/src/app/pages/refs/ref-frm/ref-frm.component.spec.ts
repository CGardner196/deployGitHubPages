import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefFrmComponent } from './ref-frm.component';

describe('RefFrmComponent', () => {
  let component: RefFrmComponent;
  let fixture: ComponentFixture<RefFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
