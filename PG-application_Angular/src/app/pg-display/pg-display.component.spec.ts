import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgDisplayComponent } from './pg-display.component';

describe('PgDisplayComponent', () => {
  let component: PgDisplayComponent;
  let fixture: ComponentFixture<PgDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
