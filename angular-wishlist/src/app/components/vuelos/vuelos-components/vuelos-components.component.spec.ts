import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosComponentsComponent } from './vuelos-components.component';

describe('VuelosComponentsComponent', () => {
  let component: VuelosComponentsComponent;
  let fixture: ComponentFixture<VuelosComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelosComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelosComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
