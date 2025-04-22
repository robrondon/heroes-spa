import { types } from "../../../src/auth";

describe('Testing "types.js"', () => {
  test('Should return this types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    })
  });

})