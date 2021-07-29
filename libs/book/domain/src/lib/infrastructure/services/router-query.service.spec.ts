import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { filter } from 'rxjs/operators';

import { QueryParams } from './book.service';
import { RouterQueryService } from './router-query.service';

describe('RouterQueryService', () => {
  let service: RouterQueryService;
  let activatedRoute: ActivatedRoute;

  const queryParamsDefault: QueryParams = {
    q: 'Test',
    pageIndex: 1,
    startIndex: 10,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [RouterQueryService],
    });

    service = TestBed.inject(RouterQueryService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set query URL', (done) => {
    const queryParamsKeys = Object.keys(queryParamsDefault);
    service.setQuery(queryParamsDefault);

    activatedRoute.queryParamMap
      .pipe(filter((params) => !!params.keys.length))
      .subscribe((params) => {
        expect(params.keys).toEqual(queryParamsKeys);
        done();
      });
  });

  it('should remove empty properties from the object', () => {
    const queryParamsBefore: QueryParams = {
      ...queryParamsDefault,
      orderBy: '',
      langRestrict: '',
    };

    const queryParamsAfter: QueryParams = {
      ...queryParamsDefault,
    };

    expect(service.removeEmpty({} as QueryParams)).toEqual({});
    expect(service.removeEmpty(queryParamsBefore)).toEqual(queryParamsAfter);
  });
});
