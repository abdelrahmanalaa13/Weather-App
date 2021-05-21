import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSliderComponent } from './weather-slider.component';

describe('WeatherSliderComponent', () => {
  let component: WeatherSliderComponent;
  let fixture: ComponentFixture<WeatherSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
