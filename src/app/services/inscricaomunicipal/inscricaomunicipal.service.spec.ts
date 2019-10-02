import { TestBed } from '@angular/core/testing';

import { InscricaomunicipalService } from './inscricaomunicipal.service';

describe('InscricaomunicipalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InscricaomunicipalService = TestBed.get(InscricaomunicipalService);
    expect(service).toBeTruthy();
  });
});

//https://viacep.com.br/ws/01001000/json/
