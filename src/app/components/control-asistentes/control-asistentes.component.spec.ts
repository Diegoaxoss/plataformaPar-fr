import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAsistentesComponent } from './control-asistentes.component';

describe('ControlAsistentesComponent', () => {
  let component: ControlAsistentesComponent;
  let fixture: ComponentFixture<ControlAsistentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlAsistentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlAsistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
