import { TestBed, inject } from '@angular/core/testing';

import { ServicioService } from './servicio.service';

describe('ServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioService]
    });
  });

  it('should ...', inject([ServicioService], (service: ServicioService) => {
    expect(service).toBeTruthy();
  }));
});
