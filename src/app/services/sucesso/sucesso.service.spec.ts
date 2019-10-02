import { TestBed } from '@angular/core/testing';

import { SucessoService } from './sucesso.service';

describe('SucessoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SucessoService = TestBed.get(SucessoService);
    expect(service).toBeTruthy();
  });
});
