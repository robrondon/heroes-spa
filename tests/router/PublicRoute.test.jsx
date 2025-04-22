import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router";

describe('Testing PublicRoute', () => {
  test('Should show children component if user not authenticated', () => {
    const contextValue = {
      logged: false
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Public Route')).toBeTruthy()
  });

  test('Should navigate if authenticated', () => {
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
          <Routes>
            <Route path="login" element={
              <PublicRoute>
                <h1>Public Route</h1>
              </PublicRoute>
            } />
            <Route path="" element={<h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Pagina Marvel')).toBeTruthy()
  });


})