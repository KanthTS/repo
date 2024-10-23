import React from 'react'
import Add from './Add'
import List from './List'
import Count from './Count'

function Manage() {
  return (
    <div>
        <h1 className="text-center">Manage Task</h1>
        <div className="d-flex justify-content-around">
            <Add/>
        <List/>
        <Count/>
        </div>
    </div>
  )
}

export default Manage