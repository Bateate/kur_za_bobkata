export interface LoginParams {
    email: string,
    password: string,
};

export interface LoginResponse {
    data: {
        accessToken: {
            expirationDate: Date
            token: string
        },
        user: {
            email: string,
            id: number,
            name: string,
        }
    }
};

export interface RegisterParams {
    email?: string,
    password?: string,
    passwordConfirmation?: string,
    firstName?: string,
    lastName?: string,
};