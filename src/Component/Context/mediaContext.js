import React, { createContext, useEffect, useState } from 'react'




export const mediaContext =createContext()


export default function MediaContextProvider({children}) {

    const [innerHeight , setInnerHeight] = useState(0);
    const [innerWidth , setInnerWidth] = useState(0);




  return <mediaContext.Provider value={{innerHeight , setInnerHeight , innerWidth , setInnerWidth}}>
    {children}
  </mediaContext.Provider>
}
