import React from 'react'
import '../src/css/Slider.css'

function Slider() {
  return (
    <>

    <div class="slider">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1" checked/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>

            <div class="slide first">
                <img src="vite.svg" alt="Image 1"/>
            </div>
            <div class="slide">
                <img src="vite.svg" alt="Image 2"/>
            </div>
            <div class="slide">
                <img src="vite.svg" alt="Image 3"/>
            </div>
            <div class="slide">
                <img src="vite.svg" alt="Image 4"/>
            </div>

            <div class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
            </div>

            
            <div class="navigation-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>
        </div>
    </div>
    </>
  )
}

export default Slider