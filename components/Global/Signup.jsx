import cors from 'cors';


import React, { useState, useEffect } from 'react'

const Signup = ({axios, setActiveComponent,notifyError,notifySuccess}) => {

  const [user, setuser] = useState({
    name: "",
    email: "",
    passwordConfirm: ""
  });

  const handleFOrmFieldChange = (fieldName, e)=>{
    setuser({ ...user, [fieldName]: e.target.value })
  }

  const createAccount = async(e)=>{
    e.preventDefault()
    if (
      user.name === "" ||
      user.email === "" ||
      user.password === "" ||
      user.passwordConfirm === ""
    ) {
      return notifyError("please provide all the details");
    }

    notifySuccess("wait creating account .....")

    try {
     //API CALL
         
         const response = await axios ({
          method : 'POST',
          url: '/api/v1/user/signup',
          withCredentials: true,
          data: {
            name : user.name,
            email : user.email,
            password : user.password,
            passwordConfirm : user.passwordConfirm

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
           else {
            notifyError("Something went wrong , try later");
           }
    }
    catch (error) {}
      console.log(error)
    
  }
  console.log(user)
    

  return (
    <div className='techwave_fn_sign'>
      <div className='sign_content'>
        <h1 className='logo'>Defi crypto bot -ketan </h1>
        <form className='login'>
          <div className='from__content'>
            <div className='from_title'>Sign UP</div>
            <div className='from_username'>
              <label htmlFor='user_login'>Username</label>
              <input type="text"  className='input' onChange={(e) => handleFOrmFieldChange("name", e)}  />

            </div>

              <div className='from__username'>
              <label htmlFor='user_login'>Username</label>
              <input type="text"  
              className='input'
               onChange={(e) => handleFOrmFieldChange("name", e)}  />

            </div>

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
              <a onClick={(e) => createAccount(e)}
                className='tech_wave_fn_button'>
                  <span>Create Account</span>
                </a>

            </div>


            <div className='sign__desc'>
              <p>NOt a memeber?</p>
              <a onClick={() => setActiveComponent("Login")}>Login</a> 

            </div>

            


          </div>

        </form>

      </div>
    </div>
  )
}

export default Signup
