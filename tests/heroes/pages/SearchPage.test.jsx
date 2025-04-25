import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";
import { useForm } from "../../../src/hooks";

const mockedNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockedNavigate
}));

describe('Testing SearchPage', () => {

  beforeEach(() => jest.clearAllMocks())

  test('Must display with default values', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
  });

  test('Must display batman and the input value must be batman', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')

    const img = screen.getByRole('img')
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

  });

  test('Must display error if a hero (montoto) wasnt found', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=montoto']}>
        <SearchPage />
      </MemoryRouter>
    )

    expect(screen.getByText('Not hero with')).toBeTruthy()

    const alert = screen.getByLabelText('alert-danger')
    expect(alert.innerHTML).toContain('montoto')
    expect(alert).toBeTruthy()
  });

  test('Must call navigate to the new screen', () => {
    const inputValue = 'batman'

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.change(input, { target: { name: 'searchText', value: inputValue } })
    fireEvent.submit(form)

    expect(mockedNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)

  });

})