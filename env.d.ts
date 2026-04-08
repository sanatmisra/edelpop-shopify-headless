/// <reference types="vite/client" />
/// <reference types="react-router" />
/// <reference types="@shopify/hydrogen/react-router-types" />

declare module '*.css';

declare global {
  interface ExecutionContext {
    waitUntil(promise: Promise<unknown>): void;
  }
}
