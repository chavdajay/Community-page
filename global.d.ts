declare module "*.png" {
  const value: string;
  export default value;
}

declare module "web-vitals" {
  export function getCLS(callback: (metric: any) => void): void;
  export function getFID(callback: (metric: any) => void): void;
  export function getLCP(callback: (metric: any) => void): void;
  export function getTTFB(callback: (metric: any) => void): void;
}
declare module "react-dom/client" {
  import * as ReactDOM from "react-dom";
  export = ReactDOM;
}
