import { TestBed } from '@angular/core/testing';

import { AvisocamposService } from './avisocampos.service';

describe('AvisocamposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvisocamposService = TestBed.get(AvisocamposService);
    expect(service).toBeTruthy();
  });
});
