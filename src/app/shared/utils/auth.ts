import { AppState } from "src/app/state/store/app.reducer";

export class LocalStorageAuth {
  public static getAuth() {
    console.log('getAuth');
    
    const x_access_token = localStorage.getItem('auth');    
    if(x_access_token){
        return JSON.parse(x_access_token);
    }
    return {};
  }

  public static setAuth(state: AppState): void {
    console.log('setAuth', state.x_access_token);
    
    localStorage.setItem('auth', JSON.stringify(state));
    // unity token
    localStorage.setItem('x_access_token', state.x_access_token);
  }

  public static clearAuth(): void {
    console.log('clearAuth');
    
    localStorage.removeItem('auth');
    // unity token
    localStorage.removeItem('x_access_token');
  }

  public static hasValidAuth(): boolean {
    const auth = LocalStorageAuth.getAuth();
    console.log('hasValidAuth', auth.value);
    
    if (auth.value) {
      return true;
    }
    return false;
  }
}
