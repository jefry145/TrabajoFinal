import { TestBed } from '@angular/core/testing';

import { DatabaseConectService } from './database-conect.service';

describe('DatabaseConectService', () => {
  let service: DatabaseConectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseConectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
