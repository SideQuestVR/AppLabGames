import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLabGameComponent } from './app-lab-game.component';

describe('AppLabGameComponent', () => {
  let component: AppLabGameComponent;
  let fixture: ComponentFixture<AppLabGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLabGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLabGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
