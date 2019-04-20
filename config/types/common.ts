export interface Dictionary<V = any> {
  [key: string]: V;

  [key: number]: V;
}