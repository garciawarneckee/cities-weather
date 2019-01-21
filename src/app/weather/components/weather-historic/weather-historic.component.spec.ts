import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherHistoricComponent } from './weather-historic.component';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';
import { Observable } from 'rxjs';

describe('WeatherHistoricComponent', () => {
  let component: WeatherHistoricComponent;
  let fixture: ComponentFixture<WeatherHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ 
        { provide: ActivatedRoute, 
          useValue: { snapshot: { params: { name: 'aName' } } }
        }, 
        WeatherStorageService ],
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
