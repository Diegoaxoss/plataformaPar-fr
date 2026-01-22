import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteVotacionComponent } from './cliente-votacion.component';

describe('ClienteVotacionComponent', () => {
  let component: ClienteVotacionComponent;
  let fixture: ComponentFixture<ClienteVotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteVotacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
