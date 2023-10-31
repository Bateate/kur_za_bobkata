import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectXAccessToken } from '../store/app.selectors';
import { filter } from 'rxjs/operators';
import { AppState } from '../store/app.reducer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private subscription = new Subscription();
    private auth_token: string = ''
    constructor(private store: Store<AppState>) {
        this.subscription.add(this.store.pipe(select(selectXAccessToken), filter(res => !!res)).subscribe(auth_token => {
            this.auth_token = auth_token;
        }));
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'x-access-token': `${this.auth_token}`,
            },
        });
        return next.handle(req);
    }
}