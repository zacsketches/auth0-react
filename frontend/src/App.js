import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar';
import Question from './Question';
import Questions from './Questions';

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path='/' component={Questions} />
      <Route exact path='/question/:questionId' component={Question} />
    </div>
  );
}

export default App;
