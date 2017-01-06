/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WhiteCardService } from './white-card.service';

describe('WhiteCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhiteCardService]
    });
  });

  it('should ...', inject([WhiteCardService], (service: WhiteCardService) => {
    expect(service).toBeTruthy();
  }));
});
