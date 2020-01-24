import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgInputComponent } from './pg-input.component';

describe('PgInputComponent', () => {
  let component: PgInputComponent;
  let fixture: ComponentFixture<PgInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
