import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppActions, AppUnion, checkLaterGameSuccess, gameInProgressSuccess, loginSuccess, registerSuccess, startGameSuccess } from './app.actions';
import { exhaustMap, map } from 'rxjs/operators';
import { AppWebService } from '../services/app-web.services';

@Injectable()
export class AppEffects {

    public login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.LOGIN),
            exhaustMap((action) => {
                return this.appWebService.loginRequest(action.params).pipe(
                    map((res: any) => {
                        console.log('Login res: ', res);
                        
                        return loginSuccess({ res })
                    })
                );
            })
        )
    });

    public register$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.REGISTER),
            exhaustMap((action) => {
                return this.appWebService.registerRequest(action.params).pipe(
                    map((res: any) => {
                        return registerSuccess({ res })
                    })
                );
            })
        )
    });

    public getOneGame$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.GET_ONE_GAME),
            exhaustMap((action) => {
                return this.appWebService.getOneGameRequest(action.params).pipe(
                    map((res: any) => {
                        return registerSuccess({ res })
                    })
                );
            })
        )
    });

    public getListOfGames$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.GET_LIST_OF_GAMES),
            exhaustMap((action) => {
                return this.appWebService.getListOfGamesRequest(action.params).pipe(
                    map((res: any) => {
                        return registerSuccess({ res })
                    })
                );
            })
        )
    });

    public startGame$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.START_GAME),
            exhaustMap(() => {
                return this.appWebService.startGameRequest().pipe(
                    map((res: any) => {
                        return startGameSuccess({ res })
                    })
                );
            })
        )
    });

    public gameInProgress$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.GAME_IN_PROGRESS),
            exhaustMap(() => {
                return this.appWebService.gameInProgressRequest().pipe(
                    map((res: any) => {
                        return gameInProgressSuccess({ res })
                    })
                );
            })
        )
    });

    public checkLaterGame$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.CHECK_LATTER_GAME),
            exhaustMap(() => {
                return this.appWebService.checkLaterGameRequest().pipe(
                    map((res: any) => {
                        return checkLaterGameSuccess({ res })
                    })
                );
            })
        )
    });

    constructor(
        private actions$: Actions<AppUnion>,
        private appWebService: AppWebService
    ){

    }
}
