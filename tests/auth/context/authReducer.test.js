import { authReducer } from "../../../src/auth/context";
import { types } from "../../../src/auth";

describe('Testing authReducer', () => {
  test('Should return the default state', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  });

  test('Login should authenticate and stablish user', () => {
    const action = {
      type: types.login,
      payload: {
        id: '123',
        name: 'Juan'
      }
    }

    const state = authReducer({ logged: false }, action)

    expect(state).toEqual({
      logged: true,
      user: action.payload
    })
  });

  test('Logout should remove user and set logged in false', () => {
    const state = {
      logged: true,
      user: { id: '123', name: 'Juan' }
    }
    const action = {
      type: types.logout,
    }
    const newState = authReducer(state, action)

    expect(newState).toEqual({
      logged: false,
      user: null
    })
  });


})