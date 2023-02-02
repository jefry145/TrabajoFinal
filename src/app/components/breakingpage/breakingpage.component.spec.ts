import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingpageComponent } from './breakingpage.component';

describe('BreakingpageComponent', () => {
  let component: BreakingpageComponent;
  let fixture: ComponentFixture<BreakingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
