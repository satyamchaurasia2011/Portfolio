import React from 'react'
import './Contact.css'
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
function Contact() {
    return (
        <div id="contact"> 
           <div className='main-contact'>
               <form method='POST' action='https://formspree.io/f/mjvjevlw' noValidate autoComplete="off">
                <h1 data-aos="fade-up">Say hello</h1>
                    <div className='line-main'>
                        <div></div>
                    </div>
                <div className='inputs' data-aos="fade-right">
                <TextField id="standard-basic" label="Your Email" name='e-mail' />
                </div>
                <div className='inputs' data-aos="fade-right">
                <TextField id="standard-basic" label="Message" name='message' />
                </div>
                <button type='submit' className='send-m' data-aos="fade-up-right">
                <span>  <h3>Send Message</h3></span>
                        <SendIcon style={{marginTop:"0px", marginRight:"8px", marginLeft:'12px', fontSize:'30px'}}/>
               </button>
               </form>
               
           </div>
        </div>
    )
}

export default Contact

