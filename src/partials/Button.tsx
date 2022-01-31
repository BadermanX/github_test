import React from 'react';
import { ButtonInterface } from '../types';

export default function Button({onClick, children, className = "", role=""}: ButtonInterface) {
  return (
    <button
      role={role}
      className={className + " button"}
      onClick={()=>{onClick()}}
    >
        {children}            
    </button>
  )
}