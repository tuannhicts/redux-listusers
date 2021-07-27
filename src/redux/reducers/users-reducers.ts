import { InformationActionTypes, InformationState } from '../type-redux';

export const initialState: InformationState = {
  data: [],
};

const rootReducers = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case InformationActionTypes.RECEIVE_API_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducers;
