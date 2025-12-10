export enum Mode {
  DEV = "development",
  PROD = "production",
}

export const mode = process.env.NODE_ENV === Mode.PROD ? Mode.PROD : Mode.DEV;

const env = (key: string, fallback = "") => process.env[key] ?? fallback;

export const APP_ID = env("NEXT_PUBLIC_APP_ID");
export const API_PATH = env("NEXT_PUBLIC_API_PATH");
export const API_URL = env("NEXT_PUBLIC_API_URL");
export const API_HOST = env("NEXT_PUBLIC_API_HOST");
export const API_PREFIX_PATH = env("NEXT_PUBLIC_API_PREFIX_PATH");
export const WS_API_URL = env("NEXT_PUBLIC_WS_API_URL");
export const APP_BASE_PATH = env("NEXT_PUBLIC_APP_BASE_PATH");
export const APP_TITLE = env("NEXT_PUBLIC_APP_TITLE");
export const APP_FAVICON_LIGHT = env("NEXT_PUBLIC_APP_FAVICON_LIGHT");
export const APP_FAVICON_DARK = env("NEXT_PUBLIC_APP_FAVICON_DARK");
export const APP_DEPLOY_USERNAME = env("NEXT_PUBLIC_APP_DEPLOY_USERNAME");
export const APP_DEPLOY_APPNAME = env("NEXT_PUBLIC_APP_DEPLOY_APPNAME");
export const APP_DEPLOY_CUSTOM_DOMAIN = env("NEXT_PUBLIC_APP_DEPLOY_CUSTOM_DOMAIN");
