import { TestBed } from '@angular/core/testing';

import { UserPermiseGuard } from './user-permise.guard';

describe('UserPermiseGuard', () => {
  let guard: UserPermiseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserPermiseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
