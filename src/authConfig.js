import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "5923d08a-e4c6-4566-9da5-3ffebbae4c3e",  // Your B2C application Client ID

    redirectUri: "https://bbos-fs-f3h9czh4dpduchck.a03.azurefd.net/", // Your app's redirect URI
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  scopes: ["user.read"],

  authority: "https://bbosfsb2c.b2clogin.com/bbosfsb2c.onmicrosoft.com/B2C_1_signUpsignIn",  // Updated Authority URL with your user flow
};

export const msalInstance = new PublicClientApplication(msalConfig);
