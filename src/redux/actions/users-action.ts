import { InformationActionTypes, Information } from '../type-redux';
export const requestApiData = () => ({
  type: InformationActionTypes.REQUEST_API_DATA,
});
export const receiveApiData = (data: Information) => ({
  type: InformationActionTypes.RECEIVE_API_DATA,
  data,
});
