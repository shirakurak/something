import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRegisterComponent } from './owner-register.component';

describe('OwnerRegisterComponent', () => {
  let component: OwnerRegisterComponent;
  let fixture: ComponentFixture<OwnerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
