import { TestBed } from '@angular/core/testing';

import { SalvarcadastroService } from './salvarcadastro.service';

describe('SalvarcadastroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalvarcadastroService = TestBed.get(SalvarcadastroService);
    expect(service).toBeTruthy();
  });
});
