import { TestBed } from '@angular/core/testing';

import { ArabicRepresentationService } from './arabic-representation.service';

describe('ArabicRepresentationService', () => {
  let service: ArabicRepresentationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArabicRepresentationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
