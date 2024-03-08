import React, { useState } from 'react'

function ShowHide() {
    const [showhide,showhideSetter] = useState('');

    function showContent() {
        showhideSetter('HELLO')
    }

    function hideContent() {
        showhideSetter('');
    }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{flex:1}}>
        <div className='border border-2 border-info w-50 p-5 text-center'>
            <h1 className='text-success mb-5'>{showhide}</h1>
            <button onClick={showContent} className='btn btn-primary m-2'>SHOW</button>
            <button onClick={hideContent} className='btn btn-danger m-2'>HIDE</button>
        </div>
    </div>
  )
}

export default ShowHide