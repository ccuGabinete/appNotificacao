import { TestBed } from '@angular/core/testing';

import { AvisosalvarService } from './avisosalvar.service';

describe('AvisosalvarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvisosalvarService = TestBed.get(AvisosalvarService);
    expect(service).toBeTruthy();
  });
});
