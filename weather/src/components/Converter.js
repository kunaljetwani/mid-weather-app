import React from 'react'
import './convert.css'
import arrow from './images/arrow.webp'

export default function Converter() {
   
    function changeToCel(e) {
        let para1=document.getElementById("f").value
        let celcs=document.getElementById("c").value
        console.log(para1)
        console.log(celcs)
        // console.log(e.target.value)
        if (para1 != "")
        {
            celcs=(parseInt((para1)-32)*5/9)
        }
        else
        {
            para1=(parseInt(celcs)*9/5+32)
        }
        document.getElementById("f").value=para1
        document.getElementById("c").value=celcs

       
        
    }
    function reset()
    {
        document.getElementById("f").value=""
        document.getElementById("c").value=""
        
    }
    return (
        <div className='converter'>
            <h2>Temprature converter</h2>
            <input placeholder='Enter farinaite' id="f"></input>
            <img src={arrow} alt="" className='arrow'></img>
            <input placeholder='Enter celcious'  id='c'></input>
            <div className='convert-button'>
                <button onClick={changeToCel}>Convert</button>
                <button onClick={reset}>Reset All</button>
            </div>

        </div>
    )
}
