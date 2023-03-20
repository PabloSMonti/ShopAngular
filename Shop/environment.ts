export const environment = {
    production: false,
    baseUrl: 'https://localhost:7215/api/'  
  };


export enum ApiPaths {
    getToken = "token/",
    getPurchases = "purchases/"
 }


export enum MenuPaths{
  login='',
  home='/home',
  purchase='/purchases'
}