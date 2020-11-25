import React from 'react'
import NotificationsSettings from './NotificationsSettings'
import ContentWrapper from './ContentWrapper'
import SettingsForm from './SettingsForm'
import NameDisplay from './NameDisplay'
import SubmitButton from './SubmitButton'

const AccountSettings = () => {
  return (
    <div className="container accountSettings">
      <ContentWrapper> 
        <NameDisplay /> 
        <SettingsForm />
        <NotificationsSettings />
        <SubmitButton />
      </ContentWrapper>
    </div>
  )
}

export default AccountSettings;
