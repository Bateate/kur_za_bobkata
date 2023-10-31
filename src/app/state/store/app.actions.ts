import { createAction, props, union } from "@ngrx/store";
import { LoginParams, LoginResponse, RegisterParams } from "../models/user.models";
import { GetListOfGamesParams, GetOneGameParams } from "../models/game.models";

export enum AppActions {
    LOGIN = '[User] Login',
    LOGIN_SUCCESS = '[User] Login Success',
    LOGIN_FAILURE = '[User] Login Failure',

    REGISTER = '[User] Register',
    REGISTER_SUCCESS = '[User] Register Success',
    REGISTER_FAILURE = '[User] Register Failure',

    GET_ONE_GAME = '[Game] Get One Game',
    GET_ONE_GAME_SUCCESS = '[Game] Get One Game Success',
    GET_ONE_GAME_FAILURE = '[Game] Get One Game Failure',

    GET_LIST_OF_GAMES = '[Game] Get List Of Games',
    GET_LIST_OF_GAMES_SUCCESS = '[Game] Get List Of Games Success',
    GET_LIST_OF_GAMES_FAILURE = '[Game] Get List Of Games Failure',

    START_GAME = '[Game] Start Game',
    START_GAME_SUCCESS = '[Game] Start Game Success',
    START_GAME_FAILURE = '[Game] Start Game Failure',

    GAME_IN_PROGRESS = '[Game] Game In Progress',
    GAME_IN_PROGRESS_SUCCESS = '[Game] Game In Progress Success',
    GAME_IN_PROGRESS_FAILURE = '[Game] Game In Progress Failure',

    CHECK_LATTER_GAME = '[Game] Check Latter Game',
    CHECK_LATTER_GAME_SUCCESS = '[Game] Check Latter Game Success',
    CHECK_LATTER_GAME_FAILURE = '[Game] Check Latter Game Failure',

    CLEAR_AUTH_TOKEN = '[User] Clear Auth Token'
}


export const login = createAction(
    AppActions.LOGIN,
    props<{params: LoginParams}>()
);
export const loginSuccess = createAction(
    AppActions.LOGIN_SUCCESS,
    props<{res: LoginResponse}>()
);
export const loginFailure = createAction(
    AppActions.LOGIN_FAILURE
);


export const register = createAction(
    AppActions.REGISTER,
    props<{params: RegisterParams}>()
);
export const registerSuccess = createAction(
    AppActions.REGISTER_SUCCESS,
    props<{res: string}>()
);
export const registerFailure = createAction(
    AppActions.REGISTER_FAILURE,
    props<{ err: any }>()
);


export const getOneGame = createAction(
    AppActions.GET_ONE_GAME,
    props<{params: GetOneGameParams}>()
);
export const getOneGameSuccess = createAction(
    AppActions.GET_ONE_GAME_SUCCESS,
    props<{res: string}>()
);
export const getOneGameFailure = createAction(
    AppActions.GET_ONE_GAME_FAILURE
);


export const getListOfGames = createAction(
    AppActions.GET_LIST_OF_GAMES,
    props<{params: GetListOfGamesParams}>()
);
export const getListOfGamesSuccess = createAction(
    AppActions.GET_LIST_OF_GAMES_SUCCESS,
    props<{res: string}>()
);
export const getListOfGamesFailure = createAction(
    AppActions.GET_LIST_OF_GAMES_FAILURE
);


export const startGame = createAction(
    AppActions.START_GAME
);
export const startGameSuccess = createAction(
    AppActions.START_GAME_SUCCESS,
    props<{res: string}>()
);
export const startGameFailure = createAction(
    AppActions.START_GAME_FAILURE
);


export const gameInProgress = createAction(
    AppActions.GAME_IN_PROGRESS
);
export const gameInProgressSuccess = createAction(
    AppActions.GAME_IN_PROGRESS_SUCCESS,
    props<{res: string}>()
);
export const gameInProgressFailure = createAction(
    AppActions.GAME_IN_PROGRESS_FAILURE
);


export const checkLaterGame = createAction(
    AppActions.CHECK_LATTER_GAME
);
export const checkLaterGameSuccess = createAction(
    AppActions.CHECK_LATTER_GAME_SUCCESS,
    props<{res: string}>()
);
export const checkLaterGameFailure = createAction(
    AppActions.CHECK_LATTER_GAME_FAILURE
);

export const clearAuthToken = createAction(
    AppActions.CLEAR_AUTH_TOKEN
);


const all = union({
    login,
    loginSuccess,
    loginFailure,

    register,
    registerSuccess,
    registerFailure,

    getOneGame,
    getOneGameSuccess,
    getOneGameFailure,

    getListOfGames,
    getListOfGamesSuccess,
    getListOfGamesFailure,

    startGame,
    startGameSuccess,
    startGameFailure,

    gameInProgress,
    gameInProgressSuccess,
    gameInProgressFailure,

    checkLaterGame,
    checkLaterGameSuccess,
    checkLaterGameFailure,

    clearAuthToken,
})

export type AppUnion = typeof all;