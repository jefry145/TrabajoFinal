import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductstheadminComponent } from './productstheadmin.component';

describe('ProductstheadminComponent', () => {
  let component: ProductstheadminComponent;
  let fixture: ComponentFixture<ProductstheadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductstheadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductstheadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
