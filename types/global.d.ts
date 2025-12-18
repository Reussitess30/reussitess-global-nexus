declare global {
  interface Boutique {
    pays?: string;
    flag?: string;
    type?: string;
    lien?: string;
    langue?: string;
    description?: string;
    [key: string]: any;
  }
}
export {};
