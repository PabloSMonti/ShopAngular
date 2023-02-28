import { ITokenResponse } from "./ITokenResponse";

export class TokenResponse implements ITokenResponse {
    token?: string | undefined;
    statusCode?: number | undefined;
}