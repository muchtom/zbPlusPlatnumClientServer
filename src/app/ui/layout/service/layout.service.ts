import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shareReplay, delay, debounceTime } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  protected layoutSize$ = new Subject();
  protected layoutSizeChange$ = this.layoutSize$.pipe(
    shareReplay({ refCount: true })
  );

  changeLayoutSize() {
    this.layoutSize$.next(void 0);
  }

  onChangeLayoutSize(): Observable<any> {
    return this.layoutSizeChange$.pipe(delay(1));
  }

  onSafeChangeLayoutSize(): Observable<any> {
    return this.layoutSizeChange$.pipe(debounceTime(350));
  }
}
