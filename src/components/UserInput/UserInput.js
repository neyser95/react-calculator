import React from 'react';

const UserInput = (props) => {
  return (
    <div id='user-container'>
      <input
        id='user-container-input'
        type="text" 
        onChange={(e) => {props.handleInput(e)}}
        value={props.userInput}
      />
    </div>
  )
}

export default UserInput;