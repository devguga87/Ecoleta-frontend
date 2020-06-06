import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home'
import CreatePoint from '../pages/CreatePoint'

const Routes :React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cadastro' component={CreatePoint}/>
    </Switch>
  )
}

export default Routes