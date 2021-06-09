import fetchData from '../actions/heroes'

export async function pulledData() {
  const data  = await fetchData()
    
  return data
}

export const filtered = (heroesData, searchTerm) => heroesData.filter(hero => {
    return hero.name.toLowerCase().includes(searchTerm.toLowerCase())
})


