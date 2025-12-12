// Make sure to import the helper functions from the `ssr` entry point.
import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';


// In dev, mc-scripts will set process.env variables; in production,
// the MC runtime injects window.app.* values.
export const entryPointUriPath: string =
  typeof window === 'undefined'
    ? (process.env.ENTRY_POINT_URI_PATH as string)
    : (window as any).app.entryPointUriPath;


export const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);
