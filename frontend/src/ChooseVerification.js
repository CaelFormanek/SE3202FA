import './ChooseVerification.css';
import React, { useState } from 'react';


function ChooseVerification() {
  
  return (
    <div className="ChooseVerification">
      <div className='contentdiv'>
        <div className='pageheader'>Choose Verification Method</div>
        
        <div className='methodbuttons'>
          <div><button className='sendtoemail'>Send Code to Email</button></div>
          <div><button className='receivesms'>Receive SMS Code</button></div>
          <div><button className='useauthflow'>Use AuthFlow Application</button></div>
        </div>
      </div>
    </div>
  );
}

export default ChooseVerification;
