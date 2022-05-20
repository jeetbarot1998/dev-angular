import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TityaBdayComponent } from './titya-bday.component';

describe('TityaBdayComponent', () => {
  let component: TityaBdayComponent;
  let fixture: ComponentFixture<TityaBdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TityaBdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TityaBdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
