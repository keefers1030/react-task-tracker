/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect} from 'react';
import './App.css';
import Heroes from './components/heroes';
import {pulledData, filtered} from './utils/heroes'

export default () => {
  const [heroesData, setHeroesData] = useState([])
  const [filteredHeroes, setFilteredHeroes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    async function pullData() {
      const data = await pulledData()
      setHeroesData(data)
      setFilteredHeroes(data)
    }
    pullData()
    console.log(heroesData)
  }, [])
  useEffect(() => {
    const heroes = filtered(heroesData, searchTerm)
    setFilteredHeroes(heroes)
  }, [searchTerm])
  return (
    <>
      <Heroes 
        heroesDataAsProps={filteredHeroes}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
}