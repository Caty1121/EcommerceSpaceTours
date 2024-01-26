import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceSuitesComponent } from './space-suites.component';

describe('SpaceSuitesComponent', () => {
  let component: SpaceSuitesComponent;
  let fixture: ComponentFixture<SpaceSuitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceSuitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpaceSuitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
