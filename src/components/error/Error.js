import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const  err = useRouteError();
    console.log(err)
  return (
    <>
      <div className="error-wrapper">
        <section>
          <h3>
            <span>Opps! </span>
            <span>Something went Wrong</span>
          </h3>
          <h2>{err.error.message}</h2>
        </section>
      </div>
    </>
  );
}
