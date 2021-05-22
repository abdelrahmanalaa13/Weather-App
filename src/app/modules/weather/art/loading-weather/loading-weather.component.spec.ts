import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingWeatherComponent } from './loading-weather.component';

describe('LoadingWeatherComponent', () => {
  let component: LoadingWeatherComponent;
  let fixture: ComponentFixture<LoadingWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
