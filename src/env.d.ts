/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_COPYRIGHT: string;
  readonly VITE_LOADING_ANIMATION_ID: string;
  readonly VITE_LOADING_PROGRESS_BAR_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
