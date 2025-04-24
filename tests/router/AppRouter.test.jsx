import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Testing AppRouter', () => {
  test('Should show login if user is not authenticated', () => {
    const contextValue = { logged: false }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>

    )

    expect(screen.getAllByText('Login').length).toBe(2)
  });

  test('Should show marvel page if user is authenticated', () => {

    const contextValue = {
      logged: true,
      user: {
        name: 'Jose',
        id: '234'
      }
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>

    )

    expect(screen.getByText('Marvel Comics')).toBeTruthy()
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
  });

})