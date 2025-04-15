import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPusblishers = ['DC Comics', 'Marvel Comics']

  if (!validPusblishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`)
  }

  return heroes.filter(hero => hero.publisher === publisher)

}