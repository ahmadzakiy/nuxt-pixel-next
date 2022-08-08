import "@nuxt/types";
import "@nuxt/types/app";

declare module "@nuxt/types" {
  interface Context {
    $toast: {
      success: Function;
      warning: Function;
      error: Function;
      info: Function;
    };
  }
}

declare module "@nuxt/types/app" {
  interface NuxtApp {
    $toast: Function;
  }
}
