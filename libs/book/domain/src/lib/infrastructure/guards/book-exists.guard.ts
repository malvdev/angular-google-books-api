import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, map, switchMap, take } from 'rxjs/operators';

import { BookFacade } from '../../application';
import { VolumeId } from '../../entities';

@Injectable()
export class BookExistsGuard implements CanActivate {
  constructor(
    private readonly _bookFacade: BookFacade,
    private readonly _router: Router
  ) {}

  waitForBookToLoad(): Observable<boolean> {
    return this._bookFacade.bookLoaded$.pipe(
      filter((loaded) => loaded),
      take(1)
    );
  }

  hasBookInStore(id: VolumeId): Observable<boolean> {
    return this._bookFacade.getBookByID(id).pipe(
      map((book) => {
        if (!book) {
          throw throwError;
        }

        return !!book;
      }),
      take(1),
      catchError(() => {
        this._router.navigate(['search']);
        return of(false);
      })
    );
  }

  hasBook(id: VolumeId): Observable<boolean> {
    return this.hasBookInStore(id);
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params['id'];
    this._bookFacade.loadBook(id);

    return this.waitForBookToLoad().pipe(switchMap(() => this.hasBook(id)));
  }
}
