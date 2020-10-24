import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCitiesComponent } from './list-of-cities.component';

describe('ListOfCitiesComponent', () => {
  let component: ListOfCitiesComponent;
  let fixture: ComponentFixture<ListOfCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
