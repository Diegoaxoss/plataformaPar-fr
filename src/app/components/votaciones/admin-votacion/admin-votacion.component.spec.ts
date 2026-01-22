import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVotacionComponent } from './admin-votacion.component';

describe('AdminVotacionComponent', () => {
  let component: AdminVotacionComponent;
  let fixture: ComponentFixture<AdminVotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminVotacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
