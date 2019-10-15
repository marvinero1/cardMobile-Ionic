import { TestBed } from '@angular/core/testing';

import { ServerExternalService } from './server-external.service';

describe('ServerExternalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerExternalService = TestBed.get(ServerExternalService);
    expect(service).toBeTruthy();
  });
});
