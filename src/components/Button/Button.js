import React from 'react'
import './button.css'

export const Button = ({btn, type}) => {
  return (
    <button type={type} className='btn'>{btn}</button>
  )
}

export const SmallBtn = ({btn}) => {
    return (
      <button className='sbtn btn'>{btn}</button>
    )
  }

  export const GoogleBtn = ({btn}) => {
    return (
      <button className='btn gbtn'>{btn}</button>
    )
  }