import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const Toggle = () => {
    const { Toggle } = useContext(ThemeContext);
    return ( 
        <button onClick= { Toggle }>Click me</button>
     );
}
 

 
export default Toggle;