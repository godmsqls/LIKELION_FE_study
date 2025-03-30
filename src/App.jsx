/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/
import './App.css'
import React from 'react';
import Input from './components/Input.jsx'
import Button from './components/Button.jsx';
import profileImage from "./assets/profile.png";

function App() {

  return (
  <>
    <div>
      <h2>Profile Photo</h2>

      <div className='profileWrap'>

        <img src={profileImage}></img>

        <div className='profile_btWrap'>
          <Button className="upload_bt" text="Upload Photo"/>
          <Button className="remove_bt" text="remove"/>
        </div>

      </div>

    </div>
    
    <hr></hr>

    <h2>User Details</h2>

    <div className='detailWrap'>

      <div className='inputRow'>
        <Input/>
        <Input/>
      </div>

      <div className='inputColumn'>
        <Input/>
        <Input/>
        <Input/>
      </div>

      <div className='detail_btWrap'>
      <Button className="back_bt" text="Back"/>
      <Button className="continue_bt" text="Continue"/>
      </div>
    </div>
  </>
  )
}

export default App
