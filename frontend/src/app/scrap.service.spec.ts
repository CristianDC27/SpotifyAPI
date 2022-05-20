import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ScrapService } from './scrap.service';

describe('ScrapService', () => {
  let service: ScrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ScrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
