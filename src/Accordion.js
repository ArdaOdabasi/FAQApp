import React from 'react'

function Accordion({title, active, setActive}) {
  return (
    <div className='accordion'>
        <div className='accordionHeading'>
            <div className='container'>
                <p>{title}</p>
                <span onClick={()=> setActive(title)}>CLICK</span>
            </div>
        </div>
        <div className={(active === title ? "show" : "") + "accordionContent"}>
            <div className='container'>
                <br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <br/>
            </div>
        </div>
    </div>
  )
}

export default Accordion