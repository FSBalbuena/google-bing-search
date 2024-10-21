export interface SearchItemType {
  title: string;
  link: string;
  snippet: string;
}

export interface SearchStateType {
  isLoading: boolean;
  error: string;
  data: SearchItemType[];
}

export interface GlobalStateType {
  search: SearchStateType;
}
