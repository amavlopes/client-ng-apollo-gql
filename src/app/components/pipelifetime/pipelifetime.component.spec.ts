import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeLifetimeComponent } from './pipelifetime.component';

describe('PipeLifetimeComponent', () => {
  let component: PipeLifetimeComponent;
  let fixture: ComponentFixture<PipeLifetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeLifetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeLifetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
