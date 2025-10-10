// src/data/localAreas.js
// Local areas within 100 miles of Charlotte, NC
export const localAreas = [
  // North Carolina
  { name: 'Charlotte', state: 'NC', distance: 0, population: '900,000+', key: 'charlotte' },
  { name: 'Concord', state: 'NC', distance: 20, population: '95,000+', key: 'concord' },
  { name: 'Gastonia', state: 'NC', distance: 25, population: '80,000+', key: 'gastonia' },
  { name: 'Matthews', state: 'NC', distance: 15, population: '30,000+', key: 'matthews' },
  { name: 'Huntersville', state: 'NC', distance: 18, population: '60,000+', key: 'huntersville' },
  { name: 'Cornelius', state: 'NC', distance: 22, population: '30,000+', key: 'cornelius' },
  { name: 'Davidson', state: 'NC', distance: 25, population: '15,000+', key: 'davidson' },
  { name: 'Mint Hill', state: 'NC', distance: 12, population: '28,000+', key: 'minthill' },
  { name: 'Indian Trail', state: 'NC', distance: 20, population: '40,000+', key: 'indiantrail' },
  { name: 'Mount Holly', state: 'NC', distance: 15, population: '15,000+', key: 'mountholly' },
  { name: 'Belmont', state: 'NC', distance: 12, population: '15,000+', key: 'belmont' },
  { name: 'Cramerton', state: 'NC', distance: 18, population: '5,000+', key: 'cramerton' },
  { name: 'Kannapolis', state: 'NC', distance: 25, population: '50,000+', key: 'kannapolis' },
  { name: 'Salisbury', state: 'NC', distance: 40, population: '35,000+', key: 'salisbury' },
  { name: 'Statesville', state: 'NC', distance: 45, population: '28,000+', key: 'statesville' },
  { name: 'Mooresville', state: 'NC', distance: 30, population: '40,000+', key: 'mooresville' },
  { name: 'Hickory', state: 'NC', distance: 60, population: '42,000+', key: 'hickory' },
  { name: 'Lenoir', state: 'NC', distance: 70, population: '18,000+', key: 'lenoir' },
  { name: 'Morganton', state: 'NC', distance: 75, population: '17,000+', key: 'morganton' },
  { name: 'Shelby', state: 'NC', distance: 50, population: '22,000+', key: 'shelby' },
  { name: 'Lincolnton', state: 'NC', distance: 35, population: '12,000+', key: 'lincolnton' },
  { name: 'Monroe', state: 'NC', distance: 25, population: '35,000+', key: 'monroe' },
  { name: 'Waxhaw', state: 'NC', distance: 20, population: '20,000+', key: 'waxhaw' },
  { name: 'Pineville', state: 'NC', distance: 8, population: '10,000+', key: 'pineville' },
  { name: 'Fort Mill', state: 'SC', distance: 15, population: '25,000+', key: 'fortmill' },
  { name: 'Rock Hill', state: 'SC', distance: 25, population: '75,000+', key: 'rockhill' },
  { name: 'York', state: 'SC', distance: 30, population: '8,000+', key: 'york' },
  { name: 'Clover', state: 'SC', distance: 35, population: '6,000+', key: 'clover' },
  { name: 'Lancaster', state: 'SC', distance: 45, population: '10,000+', key: 'lancaster' },
  { name: 'Chester', state: 'SC', distance: 50, population: '5,000+', key: 'chester' },
  { name: 'Winnsboro', state: 'SC', distance: 60, population: '3,000+', key: 'winnsboro' },
  { name: 'Camden', state: 'SC', distance: 70, population: '7,000+', key: 'camden' },
  { name: 'Kershaw', state: 'SC', distance: 80, population: '2,000+', key: 'kershaw' },
  { name: 'Pageland', state: 'SC', distance: 90, population: '3,000+', key: 'pageland' }
]

export const getLocalAreaByKey = (key) => {
  return localAreas.find(area => area.key === key)
}

export const getLocalAreasByState = (state) => {
  return localAreas.filter(area => area.state === state)
}

export const getNearbyAreas = (maxDistance = 30) => {
  return localAreas.filter(area => area.distance <= maxDistance)
}