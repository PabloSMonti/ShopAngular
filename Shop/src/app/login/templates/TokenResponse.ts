import { ITokenResponse } from "./ITokenResponse";

export class TokenResponse implements ITokenResponse {
    token: string = "";
    statusCode: number = -1;
}