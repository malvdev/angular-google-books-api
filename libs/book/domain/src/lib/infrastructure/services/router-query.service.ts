import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QueryParams } from '@libs/google-books-api/book/domain';

@Injectable()
export class RouterQueryService {
  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  setQuery(params: QueryParams): void {
    if (params?.q) {
      this._router.navigate([], {
        relativeTo: this._activatedRoute,
        queryParams: this.removeEmpty(params),
        queryParamsHandling: '',
      });
    }
  }

  removeEmpty(obj: QueryParams) {
    return Object.entries(obj)
      .filter(([_, v]) => v !== '')
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
  }
}
