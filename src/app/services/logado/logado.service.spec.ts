import { TestBed } from '@angular/core/testing';

import { LogadoService } from './logado.service';

describe('LogadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogadoService = TestBed.get(LogadoService);
    expect(service).toBeTruthy();
  });
});
