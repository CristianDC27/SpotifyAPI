import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroungLogoComponent } from './background-logo.component';

describe('BackgroungLogoComponent', () => {
  let component: BackgroungLogoComponent;
  let fixture: ComponentFixture<BackgroungLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroungLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroungLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
