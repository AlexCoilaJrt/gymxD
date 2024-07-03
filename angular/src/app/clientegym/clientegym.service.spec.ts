import { TestBed } from '@angular/core/testing';

import { ClientegymService } from './clientegym.service';

describe('ClientegymService', () => {
  let service: ClientegymService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientegymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
