import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import HomePage from '../home/HomePage'
import AboutPage from '../about/AboutPage'
import Aside from './Aside'
import Header from './Header'
import PageNotFound from '../PageNotFound'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid item xs={3} sm={2} lg={1}>
          <Aside />
        </Grid>
        <Grid item xs={9} sm={10} lg={11}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default MainLayout
