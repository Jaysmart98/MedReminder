import React from 'react'

const Button = ({text, src, style, onClick, loading}) => {
  return (
    <div>
        <button onClick={onClick} className={style}>
          <img src={src} alt="" />
          { loading? "Loading..." : text}</button>
    </div>
  )
}

export default Button
