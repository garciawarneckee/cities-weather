import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHictoricRowComponent } from './weather-hictoric-row.component';

describe('WeatherHictoricRowComponent', () => {
  let component: WeatherHictoricRowComponent;
  let fixture: ComponentFixture<WeatherHictoricRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHictoricRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHictoricRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
