import React from 'react'
import React, { useState, useEffect } from 'react'

const Login = ({ setActiveComponent , axios, notifyError,notifySuccess}) => {

  const [user, setuser] = useState({
      password: "",

    });
  
    const handleFOrmFieldChange = (fieldName, e)=>{
      setuser({ ...user, [fieldName]: e.target.value })
    }
  
    const apiLogin = async(e)=>{
      e.preventDefault()
      if (
      
        user.email === "" ||
        user.password === "" 
      ) {
        return notifyError("please provide email and password");
      }
  
      notifySuccess("wait login to your account")
  
      try {
       //API CALL
           
           const response = await axios ({
            method : 'POST',
            url: '/api/v1/user/login',
            withCredentials: true,
            data: {
              
              email : user.email,
              password : user.password,
              
  
            }
           })
  
           if (response.data.success === "success") {
             notifySuccess("Account created successfully");
             localStorage.setItem(
              "USER_MEMBERSHIP",
              response.data.data.membershipType
             )
              localStorage.setItem(
              "CryptoBot_ackend",
              response.data.data.user._id
             )
              localStorage.setItem(
              "CryptoAUTH_TOKEN",
              response.data.token
             )
             window.location.reload()
           } 
             else if (response.data.message === "fail") {
              notifyError("Something went wrong , try later");
             }
      }
      catch (error) {}
        console.log(error)
      
    }
  return (
    <div className='techwave_fn_sign'>
      <div className='sign_content'>
        <h1 className='logo'>Defi crypto bot -ketan </h1>
        <form className='login'>
          <div className='from__content'>
            <div className='from_title'>Sign IN</div>
         

              <div className='from__username'>
              <label htmlFor='user_login'>Email</label>
              <input type="text"  className='input' onChange={(e) => handleFOrmFieldChange("email", e)}  />

            </div>

              <div className='from__username'>
              <label htmlFor='user_login'>Paaword</label>
              <input type="text"  className='input' onChange={(e) => handleFOrmFieldChange("password", e)}  />

            </div>

            <div className='from__username'>
              <label htmlFor='user_login'>password confirm</label>
              <input type="text"  
              className='input'
               onChange={(e) => handleFOrmFieldChange("passwordConfirm", e)}  />

            </div>

            <div className='form__alternative'>
              <a onClick={(e) => apiLogin(e)}
                className='tech_wave_fn_button'>
                  <span>Login</span>
                </a>

            </div>


            <div className='sign__desc'>
              <p>NOt a memeber?</p>
              <a onClick={() => setActiveComponent("Signup")}>Signup</a>

            </div>

            


          </div>

        </form>

      </div>
    </div>
  )
}

export default Login
