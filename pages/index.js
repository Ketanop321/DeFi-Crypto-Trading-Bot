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
  return <div>
    <h1>{TRADING_BOT}</h1>
  </div>;
};

export default index;
