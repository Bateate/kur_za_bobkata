import { AppState } from "./app.reducer";
import { createSelector } from '@ngrx/store';

export const selectAppState = ( state: AppState) => state;

export const selectXAccessToken = createSelector(
    selectAppState,
    (state: AppState) => {
        console.log('selectXAccessToken 1', state);
        
        console.log('selectXAccessToken 2', state.x_access_token);
        
        return state.x_access_token
    },
);