import { TestBed } from '@angular/core/testing';

import { ServicesComputervisionService } from './services-computervision.service';

describe('ServicesComputervisionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesComputervisionService = TestBed.get(ServicesComputervisionService);
    expect(service).toBeTruthy();
  });
});
