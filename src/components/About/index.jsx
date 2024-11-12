import React from 'react'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div className="about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters
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
            <p></p>
        </div>
    </div>
  )
}

export default About