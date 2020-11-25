import React from 'react'
import ReactRouter, {Router, Route, IndexRoute} from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import AccountSettingsContainer from '../containers/AccountSettingsContainer'
import GiftCheckoutContainer from '../containers/GiftCheckoutContainer'
import GiftsContainer from '../containers/GiftsContainer'
import ProfileContainer from '../containers/ProfileContainer'
import Profile2Container from '../containers/Profile2Container'
import SearchContainer from '../containers/SearchContainer'
import SignUpContainer from '../containers/SignUpContainer'
import SpeedDateContainer from '../containers/SpeedDateContainer'
import SubscriptionContainer from '../containers/SubscriptionContainer'
import WhySignUpContainer from '../containers/WhySignUpContainer'

const routes = (

    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path='/account' component={AccountSettingsContainer} />
      <Route path='/gift-checkout' component={GiftCheckoutContainer} />
      <Route path='/gifts' component={GiftsContainer} />
      <Route path='/profile' component={ProfileContainer} />
      <Route path='/profile2' component={Profile2Container} />
      <Route path='/search' component={SearchContainer} />
      <Route path='/signup' component={SignUpContainer} />
      <Route path='/speeddate' component={SpeedDateContainer} />
      <Route path='/subscription' component={SubscriptionContainer} />
      <Route path='/whysignup' component={WhySignUpContainer} />
    </Route>

);

export default routes;