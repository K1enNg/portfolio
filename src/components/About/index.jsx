import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3';
import { faJava, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './index.scss'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
        <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                />
            </h1>
            <p>I am a motivated IT student with a strong foundation in web development, eager to apply my skills in a practical environment. 
                I have hands-on experience with HTML, CSS, and JavaScript, and I'm proficient in modern frameworks such as React. 
                My coursework and personal projects have equipped me with a solid understanding of responsive design, 
                user experience (UX) principles, and best practices in front-end development.</p>
            <p>I thrive in collaborative environments and am eager to contribute to team projects while gaining valuable industry experience. 
                My attention to detail and problem-solving skills enable me to tackle challenges creatively and efficiently. 
                I am passionate about creating intuitive and engaging user interfaces and am excited to learn from experienced professionals in the field.</p>
            <p>I am seeking an internship where I can further develop my technical skills and contribute to innovative projects. 
                I am enthusiastic about leveraging my knowledge and passion for front-end development to help create exceptional web experiences.</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#f07f07" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#11a0d9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#dce305" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#1f11d9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#11bf2c" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
          </div>
        </div>
    </div>
    <Loader type='pacman'/>
    </>

  )
}

export default About