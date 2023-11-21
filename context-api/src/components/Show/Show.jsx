import React, { useContext } from 'react'
import UserContext from '../../context/UserContext/context'

function Show() {
    const {user} = useContext(UserContext)
  return (
    <p>{user} just logged in</p>
  )
}

export default Show