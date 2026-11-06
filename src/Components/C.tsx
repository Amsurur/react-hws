import React, { useContext } from 'react'
import { CntContext } from '../App'

const C = () => {
    const cnt = useContext(CntContext)
  return (
    <div>
        <h1>
         Cnt: {cnt}
            </h1>
            </div>
  )
}

export default C