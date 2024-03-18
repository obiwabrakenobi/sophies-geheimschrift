import { TestBed } from '@angular/core/testing';

import { GeheimschriftService } from './geheimschrift.service';

describe('GeheimschriftService', () => {
  let service: GeheimschriftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeheimschriftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
