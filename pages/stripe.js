import React from 'react'

const stripe = () => {
  return (
    <div>
      <form action='/stripe-login' method='post'>

        <input type="email" name='email' placeholder='enter email' required id=''></input>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default stripe
