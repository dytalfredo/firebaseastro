/// <reference path="../.astro/actions.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly BAYFER_PRIVATE_KEY_ID: string;
    readonly BAYFER_PRIVATE_KEY: string;
    readonly BAYFER_PROJECT_ID: string;
    readonly BAYFER_CLIENT_EMAIL: string;
    readonly BAYFER_CLIENT_ID: string;
    readonly BAYFER_AUTH_URI: string;
    readonly BAYFER_TOKEN_URI: string;
    readonly BAYFER_AUTH_CERT_URL: string
    readonly BAYFER_CLIENT_CERT_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }