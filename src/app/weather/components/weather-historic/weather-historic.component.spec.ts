import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHistoricComponent } from './weather-historic.component';

describe('WeatherHistoricComponent', () => {
  let component: WeatherHistoricComponent;
  let fixture: ComponentFixture<WeatherHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
