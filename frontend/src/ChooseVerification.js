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
          <div><a href='http://localhost:3000/rootinfo'><button className='useauthflow'>Use AuthFlow Application</button></a></div>
        </div>
      </div>
    </div>
  );
}

export default ChooseVerification;
