import React from 'react'

function Accordion({title, active, setActive}) {
  return (
    <div className='accordion'>
        <div className='accordionHeading'>
            <div className='container'>
                <p>{title}</p>
                <span onClick={()=> setActive(title)}>CLICK ME</span>
            </div>
        </div>
        <div className={(active === title ? "show" : "") + "accordionContent"}>
            <div className='container'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    </div>
  )
}

export default Accordion