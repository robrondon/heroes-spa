export const HeroCard = ({
  id,
  superhero,
  publisher,
  alterEgo,
  firstAppearance,
  characters
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alterEgo}</p>
              <p>{characters}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
