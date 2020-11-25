import React from 'react'
import SubscriptionStatus from './SubscriptionStatus'
import HorizontalLine from './HorizontalLine'
import EmailSettings from './EmailSettings'
import SubscribeNewsletter from './SubscribeNewsletter'

const NotificationsSettings = () => {
  return (
    <span>
      <SubscriptionStatus />
      <SubscribeNewsletter />
      <HorizontalLine />                 
      <EmailSettings />
      <HorizontalLine />
    </span>
  )
}

export default NotificationsSettings

