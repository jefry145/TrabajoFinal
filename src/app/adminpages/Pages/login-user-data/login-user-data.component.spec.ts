import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserDataComponent } from './login-user-data.component';

describe('LoginUserDataComponent', () => {
  let component: LoginUserDataComponent;
  let fixture: ComponentFixture<LoginUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
