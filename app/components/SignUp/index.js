import React from 'react'
import GenderSelect from './GenderSelect'
import OrientationSelect from './OrientationSelect'
import ZipCodeInput from './ZipCodeInput'
import BasicInfoInput from './BasicInfoInput'
import BirthdateSelect from './BirthdateSelect'
import SubmitButton from './SubmitButton'

const SignUp = () => {
  const center = {textAlign: 'center'};
  return (
    <div className="col-xs-12" style={center}>
        <div className="container-fluid signUpProperties">
          <center><div className="row">
            <p><a href="#">Not in the US?</a></p>
            <form className="signUp">
                <GenderSelect />
                {/*------ FORM -------*/}
                <OrientationSelect />
                <ZipCodeInput />
                <BirthdateSelect />
                <BasicInfoInput />
                <SubmitButton />          
            </form>
          </div></center>   
          <div className="col-xs-12 policy">
            <p>By signing up you agree to the <a href="#">Terms of Use and the Privacy Policy.</a></p>
          </div>
        </div>  
    </div>
  )
}

export default SignUp;

