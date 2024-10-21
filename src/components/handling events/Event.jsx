import React from 'react'

function Event() {
    let a=10;
    function click()
    {
        console.log(a++);
    }
  return (
    <div>
      <h1 onClick={click}>click</h1>
    </div>
  )
}

export default Event