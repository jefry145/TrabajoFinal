import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutproductComponent } from './aboutproduct.component';

describe('AboutproductComponent', () => {
  let component: AboutproductComponent;
  let fixture: ComponentFixture<AboutproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
