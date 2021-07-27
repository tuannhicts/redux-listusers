export interface Information {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export enum InformationActionTypes {
  REQUEST_API_DATA = '@@information/REQUEST_API_DATA',
  RECEIVE_API_DATA = '@@information/RECEIVE_API_DATA',
}

export interface InformationState {
  readonly data: Information[];
}
