import React ,{ useEffect, useState } from 'react';
import './css/main.css';
import Email from './components/Email/Email';
import Map from './components/Map/Map';

import Menu from './components/Menu/Menu'
import Contacts from './components/Contacts/Contacts';
import Scene from './components/Scene'
import { Canvas } from '@react-three/fiber';

import img1 from './images/featured.jpg'
import video from './images/video.mp4'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { OrbitControls } from '@react-three/drei'

function changeMode(mode){

    let r = document.querySelector(':root');

    if(!mode){
        r.style.setProperty('--first', '#6E00FF');
        r.style.setProperty('--second', '#6700EE');
        r.style.setProperty('--third', '#00F7FF');
        r.style.setProperty('--fourth', 'white');
        r.style.setProperty('--fifth', '#FF64CB');
        r.style.setProperty('--sixth', 'black');
        r.style.setProperty('--customOne', 'white');
        r.style.setProperty('--customTwo', '#F7F9FE');
        r.style.setProperty('--customMenuOne', '#7a1bf6ae');
        r.style.setProperty('--customMenuTwo', '#a22b7a84');
        r.style.setProperty('--customThree', '#F7F9FE');
        r.style.setProperty('--gradientOne', 'rgb(247,249,254,1)');
        r.style.setProperty('--gradientTwo', 'rgb(247,249,254,1)');
    }else{
        r.style.setProperty('--first', '#121212');
        r.style.setProperty('--second', '#1E1E1E');
        r.style.setProperty('--third', '#00F7FF');
        r.style.setProperty('--fourth', '#121212');
        r.style.setProperty('--fifth', '#1E1E1E');
        r.style.setProperty('--sixth', 'white');
        r.style.setProperty('--customOne', '#363636');
        r.style.setProperty('--customTwo', '#1E1E1E');
        r.style.setProperty('--customMenuOne', '#2B2B2Bae');
        r.style.setProperty('--customMenuTwo', '#50525284');
        r.style.setProperty('--customThree', '#363636');
        r.style.setProperty('--gradientOne', 'rgba(30,30,30,1)');
        r.style.setProperty('--gradientTwo', 'rgba(54,54,54,1)');
    }

}


function App() {


   const [mode, setMode] = useState(false)

    changeMode(mode);


    AOS.init({duration:200})
    


    useEffect(()=>{

        const TagCloud = require('TagCloud');

        const container = '.skills';
        const texts = [
            'HTML', 'REST', 'JavaScript',
            'CSS3', 'Animation', 'Interactive',
            'JSON', 'React', 'Webpack',
            'Git', 'Bootstrap', 'Sass',
            'npm','SQL'
        ];
        const options = {
            radius : `${window.innerWidth/window.innerHeight * 150}`,
            keep : false,
            initSpeed : 'fast',
            maxSpeed : 'fast',
        };

        var tagCloud = TagCloud(container, texts, options);
        window.addEventListener('resize',()=>{
            var width = window.innerWidth;
            var height = window.innerHeight;
            var isHeight = height > 650;
            tagCloud.destroy();
            options['radius'] = isHeight ? width/height * 150 : width/height * 100;
            tagCloud = TagCloud(container,texts,options);
        })
            },[])
    

    return (
    <div className="App">
      

    <div className="nav-container">
        <header>
            <a href="index.html" className="logo">Lungu Robert</a>

            
            <Menu/>
            <nav>
                <ul>
                    <li><a href="#portfolio">My work</a></li>
                    <li><a href="#skills-section">My skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </nav>

        </header>

        <div className="social-header">
            <Contacts/>
        </div>

    </div>
        
    <div className="hero">
        
            <div className="content">
                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">Beautifully Crafted Web Experiences</h1>
                <p data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" className="meet">Meet Robert</p>
                <svg data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className="scroll" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="40" height="76" viewBox="0 0 40 76">
                    <g id="scroll" fill="none" stroke="#fff" strokeWidth="6">
                    <rect width="40" height="76" rx="20" stroke="none"/>
                    <rect x="3" y="3" width="34" height="70" rx="17" fill="none"/>
                    </g>
                    <ellipse id="circle" cx="12" cy="12.5" rx="12" ry="12.5" transform="translate(7.7 10)" fill="#fff"/>
                </svg>
            </div>
            
                    <Canvas className="canvas" dpr={[1, 2]}>
                        <Scene setBg={setMode} />
                        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                    </Canvas>
    </div>

    <section className="featured">
        <div className="left">
                <div className="inner transition2">
                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" className="subtitle">Featured Project</p>
                    <a data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in" href="#" className="featured-title">Star Wars Supremacy</a>
                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" className="featured-desc">Step into the Star Wars universe and command legendary characters like Luke Skywalker and Darth Vader in a fast-paced multiplayer card game. Build a powerful deck, strategize and defeat opponents from around the world in epic battles. Play now and experience the ultimate Star Wars gaming experience.</p>
                </div>
        </div>
        
        <video autoPlay loop muted playsInline className='back-video'>
            <source src={video} type="video/mp4"/>
        </video>
    </section>

        <section id="skills-section" className="skills-section">
            <div className='skills-description'>
                <h1>Skills & Experience</h1>
                <p>I am comfortable working with&nbsp;
                    <span>HTML5</span>,&nbsp;
                    <span>CSS3</span>,&nbsp;
                    <span>JavaScript</span>,&nbsp;
                    <span>React</span>,&nbsp;
                    <span>Bootstrap</span>,&nbsp;
                    <span>Sass</span>,&nbsp;
                    <span>Git</span>
                </p>
                <p>
                I’m not a designer but I have a good sense of aesthetics, and
                experience in responsive, mobile-first web design.
                </p>
                <p>
                I am a quick learner and I am always eager to take on new challenges.
                </p>
                <p>
                    Visit my <span><a href="https://www.linkedin.com/in/robert-alexandru-lungu-6a27301b9/" target='_blank'>LinkedIn</a></span> profile for more details.
                </p>
            </div>

            <span className='skills'></span>

        </section>

        <section id="portfolio" className="portfolio">
            <div className='portfolio-description'>
                <h2 className="title">Portfolio</h2>
                <span className="subtitle">Most recent work</span>
            </div>
            
            <div class="section-fluid-main">
                <div class="section-row">
                    <div class="section-col">
                        <div class="section">
                            <a href='https://star-wars-supremacy.onrender.com' class="section-in" target='_blank'>
                                <img src="https://i.imgur.com/tZ0pEQp.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="hover-text">
                        <h2>Star Wars Supremacy</h2>
                    </div>
                    <div class="section-col">
                        <div class="section">
                            <a href='https://nike-react-app.onrender.com/' class="section-in" target="_blank">
                                <img src="https://i.imgur.com/7Rwdrfb.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="hover-text">
                        <h2>Nike React E-commerce</h2>
                    </div>
                    <div class="section-col">
                        <div class="section">
                            <a href='https://breaking-news.onrender.com' class="section-in" target="_blank">
                                <img src="https://i.imgur.com/SKGfJHt.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="hover-text">
                        <h2>Breaking news App</h2>
                    </div>
                    <div class="section-col">
                        <div class="section">
                            <a href='https://form-validation-idpy.onrender.com/' class="section-in" target="_blank">
                                <img src="https://i.imgur.com/SfscdTb.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="hover-text">
                        <h2>Simple Form Validation</h2>
                    </div>
                </div>
        </div>

        </section>

        <section id="contact" className='contact'>

            <Email/>
            <Map/>

        </section>
    </div>
  );
}

export default App;
