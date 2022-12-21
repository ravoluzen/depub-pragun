import React from 'react'

const Container = ({children}) => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
        {children}
    </div>
  )
}

export default Container