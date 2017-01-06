/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlackCardService } from './black-card.service';

describe('BlackCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlackCardService]
    });
  });

  it('should ...', inject([BlackCardService], (service: BlackCardService) => {
    expect(service).toBeTruthy();
  }));
});
