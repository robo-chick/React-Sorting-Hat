import React, {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Questions from './components/Questions';
import Gryffindor from './components/Gryffindor';
import Hufflepuff from './components/HufflePuff';
import Ravenclaw from './components/RavenClaw';
import Slytherin from './components/Slytherin';
import * as yup from 'yup';

import './App.css';

const initialValues = {
  traits: '',
  moreTraits: '',
  animals: '',
  colors: '',
  elements: '',
  ghosts: ''
}

const initialDisabled = true

function App() {

  const [formValues, setFormValues] = useState(initialValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  const formSchema = yup.object().shape({
    traits: yup
      .string()
      .required('Please make a selection'),
    moreTraits: yup
      .string()
      .required('Please make a selection'),
    animals: yup
    .string()
    .required('Please make a selection'),
    colors: yup
    .string()
    .required('Please make a selection'),
    elements: yup
    .string()
    .required('Please make a selection'),
    ghosts: yup
    .string()
    .required('Please make a selection')
  });

  const onInputChange = e => {
    const {name} = e.target
    const {value} = e.target

    yup
      .reach(formSchema, name)
      .validate(value)

      setFormValues({...formValues, [name]: value});
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues]);


  return (
    <div className="App">
      <h1>Hello</h1>
      <Link to='/questions'>
        <button>Begin</button>
      </Link>

      <Switch>
        <Route path='/questions'>
          <Questions values={formValues} onInputChange={onInputChange} disabled={disabled} />
        </Route>

        <Route path='/gryffindor'>Gryffindor</Route>

        <Route path='/hufflepuff'>Hufflepuff</Route>

        <Route path='ravenclaw'>Ravenclaw</Route>

        <Route path='/slytherin'>Slytherin</Route>
      </Switch>

    </div>
  );
}

export default App;
