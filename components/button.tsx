'use client'
import React from 'react'

interface buttonProps{
    onClick: () => void,
    type: "button" | "submit" | "reset" | undefined,
    name:string;
    text?: string | JSX.Element,
    style?: React.CSSProperties;
}

const Button: React.FC<buttonProps> =({onClick, text, style, name, type}) => {
  return (
    <>
    <button style={style} onClick={onClick} name={name} type={type}>
      {text}
    </button>
    </>
  )
}

export default Button
