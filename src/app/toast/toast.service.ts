import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Injectable, OnDestroy } from '@angular/core';
import { map, Subject, takeUntil, timer } from 'rxjs';
import { Toast, ToastType } from './model';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ToastService implements OnDestroy{

  private _toasts: Toast[] = [];
  private _toasts$ = new Subject<Toast[]>();
  private _destroy$ = new Subject<void>(); 

  public toasts$ = this._toasts$.asObservable();
  public empty$ = this._toasts$.pipe(map(messages => messages.length  == 0));

  constructor() { }

  showToast(message: string, type: ToastType = 'INFO') {
    const toast = { 
      id: uuid(),
      message, 
      type: type
    } as Toast;

    console.log('showToast', message, this._toasts);
    this._toasts.push(toast);
    this._toasts$.next(this._toasts);
    
    timer(10_000)
    .pipe(takeUntil(this._destroy$))
    .subscribe(() => {
      this._toasts = this._toasts.filter(each => each.id !== toast.id);
      this._toasts$.next(this._toasts);
    });
  }

  get empty(): boolean { 
    return this._toasts.length == 0;
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete;
  }
}
