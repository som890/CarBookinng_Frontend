import { TestBed } from '@angular/core/testing';

import { CarResolveService } from './car-resolve.service';

describe('CarResolveService', () => {
  let service: CarResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
