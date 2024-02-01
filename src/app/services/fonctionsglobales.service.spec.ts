import { TestBed } from '@angular/core/testing';

import { FonctionsglobalesService } from './fonctionsglobales.service';

describe('FonctionsglobalesService', () => {
  let service: FonctionsglobalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionsglobalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
