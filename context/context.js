import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import error from 'mongoose/lib/error';


//Internal Import

export const CONTEXT = React.createContext();


export const PROVIDER = ({ children}) =>{
    const TRADING_BOT = "Trading Bot";

    const LOAD_iNTIAL_DATA = async () => {
        try{

        } catch (eroor){
            console.log(error)
        }

    }

    //BUY
    const buyTokens = async () => {
        try {

        } catch (error){
            console.log(error)
        }

    }

    //SELL 

    const sellTokens = async () =>{
        try{

        } catch (error){
            console.log(error)
        }
    }

    //TRADE

    const tradeToken = async () => {
        try{

        } catch(error){
            console.log(error)
        }
    }

      return (
         
         <CONTEXT.Provider
         value={{
            TRADING_BOT,
            trading
         }}
          >
            {children}</CONTEXT.Provider>
      )

}