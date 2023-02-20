import { IInit, initialState } from '@/context/state';
import { ActionsType, AuthName } from '@/context/actions';

export const userReducer = (
  state = initialState,
  action: ActionsType
): IInit => {
  switch (action.type) {
    case AuthName.LOGIN: {
      return {
        ...state,
        currentUser: action.payload,
        hasLoginError: false,
      };
    }

    case AuthName.REGISTER: {
      return {
        ...state,
        hasLoginError: false,
        users: state.users,
        ...action.payload,
      };
    }

    case AuthName.LOGOUT:
      return {
        ...state,
        currentUser: null,
        hasLoginError: true,
      };

    case AuthName.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
