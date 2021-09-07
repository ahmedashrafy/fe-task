import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFactsComponent } from './total-facts.component';

describe('TotalFactsComponent', () => {
  let component: TotalFactsComponent;
  let fixture: ComponentFixture<TotalFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
