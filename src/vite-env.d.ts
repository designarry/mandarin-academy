/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKENDLESS_BASE_URL: string
  readonly VITE_BACKENDLESS_APP_ID: string
  readonly VITE_BACKENDLESS_REST_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
