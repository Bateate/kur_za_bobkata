import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GetListOfGamesParams, GetOneGameParams } from '../models/game.models';
import { LoginParams, RegisterParams } from '../models/user.models';
import { AppState } from '../store/app.reducer';
import { selectXAccessToken } from '../store/app.selectors';
import { filter } from 'rxjs/operators';
@Injectable()
export class AppWebService {
  private authWebServiceUri: string = 'http://3.253.2.17';
  private subscription = new Subscription();
  private x_access_token: string = '';
  constructor(protected http: HttpClient, private store: Store<AppState>) {

  }

  public loginRequest(params: LoginParams) {
    const url = this.authWebServiceUri + '/user/login';
    return this.http.post<LoginParams>(url, params);
  }

  public registerRequest(params: RegisterParams) {
    const url = this.authWebServiceUri + '/user';
    const body = params;
    return this.http.post(url, body);
  }

  public getOneGameRequest(params: GetOneGameParams) {
    const url = this.authWebServiceUri + `/game/${params.gameId}`;
    return this.http.get<GetOneGameParams>(url);
  }

  public getListOfGamesRequest(params: GetListOfGamesParams) {
    const url =
      this.authWebServiceUri +
      `/game/list?page=${params.page}&limit=${params.limit}`;
    return this.http.get<GetListOfGamesParams>(url);
  }

  public startGameRequest() {
    const url = this.authWebServiceUri + '/game';
    return this.http.post(url, null);
  }

  public gameInProgressRequest() {
    const url = this.authWebServiceUri + '/game/inProgress';
    return this.http.get(url);
  }

  public checkLaterGameRequest() {
    const url = this.authWebServiceUri + '/game/checkLetter';
    return this.http.post(url, null);
  }
}
