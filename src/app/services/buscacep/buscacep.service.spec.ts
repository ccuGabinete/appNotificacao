import { TestBed } from '@angular/core/testing';

import { BuscacepService } from './buscacep.service';

describe('BuscacepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscacepService = TestBed.get(BuscacepService);
    expect(service).toBeTruthy();
  });
});
