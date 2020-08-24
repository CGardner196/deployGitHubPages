import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFrmComponent } from './user-frm.component';

describe('UserFrmComponent', () => {
  let component: UserFrmComponent;
  let fixture: ComponentFixture<UserFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
