/* eslint-disable no-console */
const models = require('../models')

const getAllLeaders = async (req, res) => {
  const leaders = await models.leaders.findAll()

  return res.send(leaders)
}

const getLeaderSlug = async (req, res) => {
  try {
    const { slug } = req.params

    const leaders = await models.leaders.findOne({ where: { slug } })

    return leaders
      ? res.send(leaders)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve leader, please try again')
  }
}

const getLeaderSlugRender = async (req, res) => {
  try {
    const { slug } = req.params

    const leaders = await models.leaders.findOne({ where: { slug } })

    return leaders
      ? res.render(leaders)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve leader, please try again')
  }
}

const getLeaderCommunity = async (req, res) => {
  try {
    const { community } = req.params

    const leaders = await models.leaders.findAll({ where: { community } })
    return leaders
      ? res.send(leaders)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve leader, please try again')
  }
}

const getLeaderCategory = async (req, res) => {
  try {
    const { category } = req.params

    const leaders = await models.leaders.findAll({ where: { category } })

    return leaders
      ? res.send(leaders)
      : res.sendStatus(404)
  } catch (error) {
    return res.status(500).send('Unable to retrieve leader, please try again')
  }
}

const addNewLeader = async (req, res) => {
  const {
    name, movie, slug
  } = req.body

  if (!name || !movie || !slug) {
    res.status(400).send('Must contain name, movie, and slug')
  }

  const newLeader = { name, movie, slug }

  const leader = await models.leaders.create(newLeader)

  return res.status(201).send(leader)
}

// let sgm = document.getElementById("sgm")
// let sgmOption = sgm.option[e.selectedIndex].text

// let steam = document.getElementById("steam")
// let steamOption = steam.option[e.selectedIndex].text

const populateLeadersbyGender = () => {
let gender = document.getElementById("gender")
let genderOption = gender.option[gender.selectedIndex].text
    console.log(genderOption)

  switch (genderOption) {
    case 'female':
    if (leaders.category == 'female' || leaders.category2 == 'female')
      return `${leaders.name}`

    case 'transgender':
    if (leaders.category == 'lgbtqia' || leaders.category2 == 'lgbtqia')
      return `${leaders.name}`

    case 'gender non-binary':
    if (leaders.category == 'lgbtqia' || leaders.category2 == 'lgbtqia')
      return `${leaders.name}`

    default:
      break;

}}

module.exports = { getAllLeaders, getLeaderSlug, getLeaderCommunity, getLeaderCategory, addNewLeader, populateLeadersbyGender, getLeaderSlugRender }
