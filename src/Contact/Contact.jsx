import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
    <>
    <div className="contact py-5">
        <div className="container py-5">
        <div className='text-center portofolio-title'>
                <h1 className='fw-bolder'>CONATCT SECTION</h1>

                <div className='d-flex justify-content-center'>
                      <div className='line me-3'></div>
                     <i class="fa-solid fa-star"></i>
                     <div className='line ms-3'></div>
                </div> 

            </div>
            <div className='inputs d-flex flex-column gap-5 mt-5 pt-5'>
                
                {name!=''?<label htmlFor='name' className={`ms-2  `}>userName</label>:""}
                <input type='text' className='form-control' placeholder='userName' name='name'  onKeyUp={handleNameChange}/>

                {age!=''?<label htmlFor='age' className={`ms-2  `}>userAge</label>:""}
                <input type='text' className='form-control ' placeholder='userAge' name='age' onKeyUp={handleAgeChange} />

                {email!=''?<label htmlFor='email' className={`ms-2  `}>userEmail</label>:""}
                <input type='text' className='form-control'placeholder='userEmail' name='email' onKeyUp={handleEmailChange} />

                {password!=''?<label htmlFor='password' className={`ms-2  `}>userPassword</label>:""}
                <input type='text' className='form-control' placeholder='userPassword' name='password' onKeyUp={handlePasswordChange} />

                <button className='btn btn-danger'>Message</button>

            </div>
            
        </div>

    </div>
    
    
    
    
    
    
    </>
  )
}
