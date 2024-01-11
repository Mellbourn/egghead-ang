import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabitDetailComponent } from './gabit-detail.component';

describe('GabitDetailComponent', () => {
  let component: GabitDetailComponent;
  let fixture: ComponentFixture<GabitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GabitDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GabitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
