import React, {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import {ethers} from 'ethers';
import toast from 'react-hot-toast';

//INTERNAL IMPORTS

import {
   Header , 
    Footer ,
     Search ,
      Loader ,
       Login , 
       MovingSubmenu ,
        Preloader ,
        SideBar ,
        Signup ,
        useTimeout ,
        home ,
        TradeTokens ,
        TopExchangeTokens ,
        Networks ,
        AddNetwork ,
        Price ,
        Profile ,
        Setting ,
        AddTokenPair ,
        Trading
} from '../components/index'
import {CONTEXT} from '../context/context';


  const index = () => {
    const {TRADING_BOT} = useContext(CONTEXT)

    //STATE VARIABLE
    const  [activeComponent, setActiveComponent] = useState('Signup')
    const [membershipType, setMembershipType] = useState('premium')
    const [authBackendEndID, setAuthBackEndID] = useState("")
    const [networks, setNetworks] = useState({})
    const [networkName, setNetworkName] = useState("")


    //NOTIFICATION
    const notifyError = (msg)=> toast.error(msg, {duration: 2000})
    const notifySuccess = (msg)=> toast.success(msg, {duration: 2000})
    return (
      <div>
        <MovingSubmenu />
        <Preloader />
        {activeComponent === "Signup" ? (
          <Signup
            axios={axios}
            setActiveComponent={setActiveComponent}
            notifyError={notifyError}
            notifySuccess={notifySuccess}
          />
        ) : (
          <div className="techwave_fn_wrapper">
             <div className="tech_fn_wrap">
              <Search/>
              <Header networkName={networkName}
              setActiveComponent={setActiveComponent}
              />
              <SideBar setActiveComponent={setActiveComponent} />
              {
                activeComponent == "Home" ? (
                  <Home />
                ) : activeComponent == "TradeTokens" ? (
                  <TradeTokens />
                ) : activeComponent == "Top Exchange Tokens" ? (
                  <TopExchangeTokens />
                ) : activeComponent == "Networks" ? (
                  <Networks networkName={networkName}  
                  setNetworkName={setNetworkName} />
                ) : activeComponent == "Trading" ? (
                  <Trading  axios={axios}
                  trading={}/>
                ) : activeComponent == "pricing" ? (
                  <Price />
                ) :activeComponent == "Profile" ? (
                  <Profile setActiveComponent= {setActiveComponent} />
                ) : activeComponent == "Setting" ? (
                  <Setting  />
                ) :  activeComponent == "Add Token Pair" ? (
                  <AddTokenPair />
                ) : (
                  ""
                )
              }
             </div>
          </div>
        )}

        {activeComponent == "Login" ? (
          <Login setActiveComponent={setActiveComponent}  
          axios={axios} 
          notifyError={notifyError}
          notifySuccess={notifySuccess}
            />
        ) : (

          ""
        )

        }
      </div>
    );
  };

  export default index;
