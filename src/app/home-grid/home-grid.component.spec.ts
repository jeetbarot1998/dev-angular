import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGridComponent } from './home-grid.component';

describe('HomeGridComponent', () => {
  let component: HomeGridComponent;
  let fixture: ComponentFixture<HomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
