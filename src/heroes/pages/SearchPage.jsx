// import { HeroCard } from '../components'

import { useLocation, useNavigate } from "react-router"
import queryString from 'query-string'
import { useForm } from "../../hooks"

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { searchText, onInputChange, onResetForm } = useForm({ searchText: '' })
  const { q = '' } = queryString.parse(location.search)

  const onSearch = (e) => {
    e.preventDefault()
    const trimmedText = searchText.toLowerCase().trim()

    if (trimmedText.length <= 1) return

    navigate(`?q=${trimmedText}`)
    onResetForm()
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
          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            Not hero with <b>{q}</b>
          </div>
          {/* <HeroCard {...hero} /> */}
        </div>
      </div>
    </>
  )
}
