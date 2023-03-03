import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtourComponent } from './showtour.component';

describe('ShowtourComponent', () => {
  let component: ShowtourComponent;
  let fixture: ComponentFixture<ShowtourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowtourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
