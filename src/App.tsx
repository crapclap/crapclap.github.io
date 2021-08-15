import React from 'react'
import { 
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import Header from './common/header/header'
import Footer from './common/footer/footer'
import Top from './top/top'
import Discography from './discography/discography'
import Sugar from './discography/sugar/sugar'

function App() {
  return (
    <div className="App">
      <Router  basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          {/* <Switch> */}
            <Route exact path="/" component={Top} />
            <Route exact path="/crapclap" component={Top} />
            <Route exact path="/discography" component={Discography} />
            <Route exact path="/discography/sugar" component={Sugar} />
          {/* </Switch> */}
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App