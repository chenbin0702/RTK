import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profles from './pages/Profles'
import Text from './pages/Text'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Home></Home>
        <Profles></Profles>
        <Text></Text>
      </div>
    )
  }
}
