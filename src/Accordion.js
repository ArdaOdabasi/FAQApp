import React from 'react'

function Accordion() {
  return (
    <div className='accordion'>
        <div className='accordionHeading'>
            <div className='container'>
                <p>Question</p>
                <span>CLICK ME</span>
            </div>
        </div>
        <div className='accordionContent'>
            <div className='container'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    </div>
  )
}

export default Accordion