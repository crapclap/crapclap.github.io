import './App.css'

import smoothscroll from 'smoothscroll-polyfill';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AutoScrollToTop from './common/function/autoScrollToTop.jsx'
import Footer from './common/footer/footer'
import Header from './common/header/header'

import Top from './top/top'
import Discography from './discography/discography'

import GoodLookingMan from './discography/good-looking-man/glm'
import Merry from './discography/merry/merry'
import Nostalgia from './discography/nostalgia/nostalgia'
import SundayComesAgain from './discography/sunday-comes-again/sca'
import Sugar from './discography/sugar/sugar'

smoothscroll.polyfill();

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <AutoScrollToTop />
          <Header />
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/crapclap" component={Top} />
            <Route exact path="/discography" component={Discography} />
            <Route exact path="/discography/good-looking-man" component={GoodLookingMan} />
            <Route exact path="/discography/merry" component={Merry} />
            <Route exact path="/discography/nostalgia" component={Nostalgia} />
            <Route exact path="/discography/sugar" component={Sugar} />
            <Route exact path="/discography/sunday-comes-again" component={SundayComesAgain} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App