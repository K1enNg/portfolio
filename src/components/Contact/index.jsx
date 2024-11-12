import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9bf545ca-b05e-4fde-8045-63f4d8fbc05f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => clearTimeout(timer);
      }, []);
  return (
    <div className='container contact-page'>
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                />
            </h1>
            <p>
                Hit me up ;)
            </p>
            <div className="contact-form">
                <form onSubmit={onSubmit}>
                    <ul>
                        <li className='half'>
                            <input type="text" name='name' placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type="email" name='email' placeholder='Email'required/>
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject"required/>
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value="SEND"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact