import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientegymComponent } from './clientegym.component';

describe('ClientegymComponent', () => {
  let component: ClientegymComponent;
  let fixture: ComponentFixture<ClientegymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientegymComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientegymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
