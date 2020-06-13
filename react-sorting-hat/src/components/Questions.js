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
        <form onSubmit={e => e.preventDefault()}
>
    <h2>Which trait do you think best describes you?</h2>
    <div className='questionCard'>
        {traits.map(trait => {
            return (
                <label key={trait}>
                    <div>{trait}</div>
                    <input
                        type='radio'
                        name='traits'
                        value={trait}
                        onChange={onInputChange}
                        requiredcontrol={<radio required={true} />}
                        />
                </label>
            )
        })}
    </div>

    <h2>Pick another trait that you think describes you:</h2>
    <div className='questionCard'>
        {moreTraits.map(moreTrait => {
            return (
                <label key ={moreTrait}>
                    <div>{moreTrait}</div>
                    <input
                        type='radio'
                        name='moreTraits'
                        value={moreTrait}
                        onChange={onInputChange}
                        />
                </label>
            )
        })}
    </div>

    <h2>Which animal would you keep as a pet?</h2>
    <div className='questionCard'>
        {animals.map(animal => {
            return (
                <label key={animal}>
                    <div>{animal}</div>
                    <input
                        type='radio'
                        name='animals'
                        value={animal}
                        onChange={onInputChange}
                        />
                </label>
            )
        })}
    </div>

    <h2>Which color do you prefer?</h2>
    <div className='questionCard'>
        {colors.map(color => {
            return (
                <label key={color}>
                    <div>{color}</div>
                    <input
                        type='radio'
                        name='colors'
                        value={color}
                        onChange={onInputChange}
                        />
                </label>
            )
        })}
    </div>
    <h2>Which element are you drawn to?</h2>
    <div className='questionCard'>
        {elements.map(element => {
            return (
                <label key={element}>
                    <div>{element}</div>
                    <input
                        type='radio'
                        name='elements'
                        value={element}
                        onChange={onInputChange}
                        />
                </label>
            )
        })}
    </div>
    
    <h2>Which ghost would you most like to meet?</h2>
    <div className='questionCard'>
        {ghosts.map(ghost => {
            return (
                <label key={ghost}>
                    <div>{ghost}</div>
                    <input
                        type='radio'
                        name='ghosts'
                        value={ghost}
                        onChange={onInputChange}
                        />
                </label>
            )
        })}
    </div>
</form>    )
}

export default Questions;