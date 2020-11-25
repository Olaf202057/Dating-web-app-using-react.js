import React from 'react'
import NameInput from './NameInput'
import AvatarSelect from './AvatarSelect'
import ZipInput from './ZipInput'
import EmailInput from './EmailInput'
import BirthdayInput from './BirthdayInput'
import TimeZoneInput from './TimeZoneInput'
import UsernameInput from './UsernameInput'
import PasswordInput from './PasswordInput'

const SettingsForm = () => {
  return (
    <span>
      <div className="row">
          <h4 className="titleAccountSettings">Change your info</h4> 
      </div>
      <form>
      
        {/* left column */}  
        <div className="col-md-4 col-xs-12">
            <div className="row">
              <NameInput />
              <ZipInput />
              <EmailInput /> 
            </div>
        </div>  
      
        {/* middle column */}  
        <div className="col-md-4 col-xs-12">
          <BirthdayInput />
          <TimeZoneInput />
          <UsernameInput />        
        </div>
        
        {/* RIGHT SIDE */}
        <AvatarSelect />
        <PasswordInput />
      </form>
    </span>
  )
}

export default SettingsForm;