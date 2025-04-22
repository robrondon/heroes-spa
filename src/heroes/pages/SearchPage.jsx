import { HeroCard } from '../components'
import { useLocation, useNavigate } from "react-router"
import queryString from 'query-string'
import { useForm } from "../../hooks"
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(q)
  const showSearch = q.length === 0
  const showError = q.length > 0 && heroes.length === 0

  const { searchText, onInputChange } = useForm({ searchText: q })

  const onSearch = (e) => {
    e.preventDefault()
    const trimmedText = searchText.toLowerCase().trim()
    navigate(`?q=${trimmedText}`)
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearch}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {showSearch && (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a hero
            </div>
          )}
          {showError && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              Not hero with <b>{q}</b>
            </div>
          )}

          {heroes.map(hero =>
          (<div className='mt-1' key={hero.id}>
            <HeroCard {...hero} />
          </div>))
          }
        </div>
      </div>
    </>
  )
}
