import { useRouteError } from "react-router-dom";
import React from 'react'

function RouteError() {
    const r=useRouteError();
   
  return (
    <div className="text-center " >
    <p className="lead">{r.data}</p>
    <p className="lead ">{r.status}-{r.statusText}</p>
    </div>
  )
}

export default RouteError