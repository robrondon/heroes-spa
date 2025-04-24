import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Testing PrivateRoute', () => {
  test('Should show children component if user is authenticated', () => {

    Storage.prototype.setItem = jest.fn()

    const contextValue = {
      logged: true,
      user: {
        name: 'Jose',
        id: '234'
      }
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter >
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Private Route')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/")
  });
})