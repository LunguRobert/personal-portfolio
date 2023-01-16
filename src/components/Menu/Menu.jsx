import React, { useEffect, useState }  from 'react'
import './Menu.css'

export default function Menu() {
    
    var btn;
    var nav;
    var blue;


    function changeMenu(){
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
            btn.classList.add('no');
            nav.classList.toggle('show');
            blue.classList.toggle('slide');
        }
    }

    useEffect(()=>{
        
        btn = document.getElementById("btn");
        nav = document.getElementById('nav');
        blue = document.getElementById("blue");
    
     
        window.addEventListener('click', function(e){  
            if(nav.classList.contains('show')&&e.target!== btn){
                if (nav.contains(e.target)){
            
                } else{
                    if(btn.classList.contains('active')){
                        btn.classList.remove('active')
                        btn.classList.add('no');
                        nav.classList.toggle('show');
                        blue.classList.toggle('slide');
                    }
                }             
            } 
        });

        btn.addEventListener('click', function() {
            if(btn.classList.contains('no')){
                btn.classList.remove('no')
                btn.classList.add('active');
            }else {
                btn.classList.remove('active')
                btn.classList.add('no');
            }

            

        nav.classList.toggle('show');
        blue.classList.toggle('slide');
        });

        
    },[])


  return (
    <div className='menu'>
        <div className="box">
            <div id='btn' className="btn no">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    
    <nav className='hamburger-nav' id="nav">
        
        <ul>

            <li><a onClick={()=> changeMenu()} href="#portfolio">My work</a></li>
            <li><a onClick={()=> changeMenu()} href="#skills-section">My skills</a></li>
            <li><a onClick={()=> changeMenu()} href="#contact">Contact</a></li>
        
        </ul>
    
    </nav>
    
    <div className="dark-blue" id="blue"></div>
    </div>
  )
}
