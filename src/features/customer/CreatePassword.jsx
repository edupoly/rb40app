import React from 'react'

function CreatePassword() {
    const [password,setPassword] = React.useState('');
  return (
    <div>
        <h2>CreatePassword</h2>
        <input type="password" />
        <button>Set Password</button>
        <a href="mailto:masteryoda@starwars.com">I love star wars</a>
    </div>
  )
}

export default CreatePassword