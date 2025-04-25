import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";
import { MemoryRouter } from "react-router";

const mockedNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockedNavigate
}));

describe('Testing Navbar', () => {
  const contextValue = {
    logged: true,
    user: {
      name: 'Jose',
      id: '234'
    },
    logout: jest.fn()
  }

  beforeEach(() => jest.clearAllMocks())

  test('Should show logged username', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Jose')).toBeTruthy()
  });

  test('Should call logout and navigate on logout button', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const logoutButton = screen.getByRole('button')

    fireEvent.click(logoutButton)
    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockedNavigate).toHaveBeenCalledWith("/login", { "replace": true })
  });

})