import React from 'react'

const traits = [
    'brave',
    'dedicated',
    'intelligent',
    'cunning'
]

const moreTraits = [
    'chivalrous',
    'patient',
    'witty',
    'resourceful'
]

const animals = [
    'lion',
    'badger',
    'eagle',
    'snake'
]

const colors = [
    'gold',
    'black',
    'bronze',
    'silver'
]

const elements = [
    'fire',
    'earth',
    'air',
    'water'
]

const ghosts = [
    'Nearly Headless Nick',
    'Fat Friar',
    'Grey Lady',
    'Bloody Baron'
]

const Questions = (props) => {
    const { values, onInputChange, disabled } = props

    const count = () => {
        const valuesArr = [values.traits, values.moreTraits, values.animals, values.colors, values.elements, values.ghosts]
        const gryff = ['brave', 'chivalrous', 'lion', 'gold', 'fire', 'Nearly Headless Nick']
        const huffle = ['dedicated', 'patient', 'badger', 'black', 'earth', 'Fat Friar']
        const raven = ['intelligent', 'witty', 'eagle', 'bronze', 'air', 'Grey Lady']
        const slyth = ['cunning', 'resourceful', 'snake', 'silver', 'water', 'Bloody Baron']

        const gryffPoints = valuesArr.filter(value => {
            return gryff.includes(value)
        }).length

        const hufflePoints = valuesArr.fileter(value => {
            return huffle.includes(value)
        }).length

        const ravenPoints = valuesArr.fileter(value => {
            return raven.includes(value)
        }).length

        const slythPoints = valuesArr.fileter(value => {
            return slyth.includes(value)
        }).length

        const pointsArr = [gryffPoints, hufflePoints, ravenPoints, slythPoints]
        const path = ['/gryffindor', '/hufflepuff', '/ravenclaw', '/slytherin']

        const whichHouse = path[pointsArr.indexOf(Math.max(...pointsArr))]

        return whichHouse;

    }

    return (
        
    )
}