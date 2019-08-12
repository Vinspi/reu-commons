import { TestBed } from '@angular/core/testing';

import { ReuCommonsPipesService } from './reu-commons-pipes.service';

describe('ReuCommonsPipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReuCommonsPipesService = TestBed.get(ReuCommonsPipesService);
    expect(service).toBeTruthy();
  });
});
