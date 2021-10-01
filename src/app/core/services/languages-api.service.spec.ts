import { TestBed } from '@angular/core/testing';

import { LanguagesApiService } from './languages-api.service';

describe('ServicesService', () => {
  let service: LanguagesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
