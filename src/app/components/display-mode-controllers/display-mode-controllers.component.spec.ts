import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayModeControllersComponent } from './display-mode-controllers.component';

describe('DisplayModeControllersComponent', () => {
  let component: DisplayModeControllersComponent;
  let fixture: ComponentFixture<DisplayModeControllersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayModeControllersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayModeControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
