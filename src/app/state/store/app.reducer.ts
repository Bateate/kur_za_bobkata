import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { LocalStorageAuth } from 'src/app/shared/utils/auth';

export interface AppState {
    x_access_token: string,
}

export const initialState: AppState = {
    x_access_token: '',
}

const appReducer = createReducer(
    initialState,
    on(AppActions.login, state => ({ ...state })),
    on(AppActions.loginSuccess, (state, action) => { 
        const newState = { 
            ...state, 
            game: {
                x_access_token: action.res.data.accessToken.token
            }
        };
        console.log('Reducer set token ', action.res.data.accessToken.token);
        
        LocalStorageAuth.setAuth(newState);        
        return newState;
    }),
    on(AppActions.loginFailure, state => ({ ...state })),

    on(AppActions.register, state => ({ ...state })),
    on(AppActions.registerSuccess, state => ({ ...state })),
    on(AppActions.registerFailure, state => ({ ...state })),

    on(AppActions.getOneGame, state => ({ ...state })),
    on(AppActions.getOneGameSuccess, state => ({ ...state })),
    on(AppActions.getOneGameFailure, state => ({ ...state })),

    on(AppActions.getListOfGames, state => ({ ...state })),
    on(AppActions.getListOfGamesSuccess, state => ({ ...state })),
    on(AppActions.getListOfGamesFailure, state => ({ ...state })),

    on(AppActions.startGame, state => ({ ...state })),
    on(AppActions.startGameSuccess, state => ({ ...state })),
    on(AppActions.startGameFailure, state => ({ ...state })),

    on(AppActions.gameInProgress, state => ({ ...state })),
    on(AppActions.gameInProgressSuccess, state => ({ ...state })),
    on(AppActions.gameInProgressFailure, state => ({ ...state })),

    on(AppActions.checkLaterGame, state => ({ ...state })),
    on(AppActions.checkLaterGameSuccess, state => ({ ...state })),
    on(AppActions.checkLaterGameFailure, state => ({ ...state })),
);

export function reducer(state: AppState | undefined, action: Action): AppState {
    return appReducer(state, action);
}
