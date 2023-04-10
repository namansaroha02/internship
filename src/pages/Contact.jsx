import React, { useState } from 'react';
import "../Styles/contact.css";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Contact = () => {
    const initialForm = {
        name: "",
        email: "",
        message: ""
    };
    const [formState, setFormState] = useState(initialForm);
    const { name, email, message } = formState;
    const [buttonMessage, setButtonMessage] = useState("Send Message");
    const [loading, setIsLoading] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        setTimeout(() => {
            setIsLoading(false);
            setButtonMessage("Success!!");
            setFormState(initialForm);
        }, 1000);
    }
    const onchange = (e) => {
        const {name,value}=e.target;
        setFormState({...formState,[name]:value});
    }

    return (
        <div className='service-top'>
            <div className='title'>Get in touch</div>
            <ul className="socials-contact">
                <li><a href="https://www.linkedin.com/company/clowak-innovations-llp/?viewAsMember=true" className="ld"><AiFillLinkedin /></a></li>
                <li><a href="https://www.instagram.com/clowak_innovations/" className="ig"><AiFillInstagram /></a></li>
                <li><a href="https://www.facebook.com/CLOWAKINNOVATIONS" className="fb"><AiFillFacebook /></a></li>
                <li><a href="https://www.youtube.com/channel/UCX18BBZubtPF_mQNjcM5lIw" className="yt"><AiFillYoutube /></a></li>
                <li><a href="https://twitter.com/ClowakI" className="twt"><AiFillTwitterSquare /></a></li>
            </ul>
            <div className='details'>
                <p>Phone : 8072375909</p>
                <p>Email : clowakinnovations@gmail.com</p>
                <p>Address : 73/A, Vaibhav Nagar Phase 3,  VIT post,  Katpadi, Vellore, Tamil Nadu 632014 </p>
                <p>R&D : TT003 Technology Tower VIT University</p>
            </div>
            <div className='sub'>
                Got a question,proposal or project or want to work <br /> together something? Feel free to reach out.
            </div>
            <form onSubmit={onSubmit}>
                <div className='input-row'>

                    <div className='side'>
                        <label htmlFor="name">Your Name</label>
                        <input type='text'
                            placeholder="What's Your Name?"
                            name="name"
                            required
                            value={name}
                            onChange={onchange}
                        />
                    </div>
                    <div className='side'>
                        <label htmlFor='name'>Your Email</label>
                        <input type='email'
                            placeholder="What's Your Email?"
                            required
                            name="email"
                            value={email}
                            onChange={onchange}
                        />
                    </div>
                </div>
                <div className='textarea'>
                    <label htmlFor='message'>Message</label>
                    <textarea type='textarea'
                        id='textarea'
                        placeholder="Hello, I think we need you to work on/collaborate this particular product... Reach out as soon as you can"
                        required
                        name="message"
                        value={message}
                        onChange={onchange}
                    />
                </div>
                <button type='submit'>{loading ? "" : buttonMessage}</button>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1201383796742!2d79.15203531475548!3d12.964163490860786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47515fcb42b1%3A0xd96d88055890199d!2sClowak%20Innovations%20LLP!5e0!3m2!1sen!2sin!4v1680960732170!5m2!1sen!2sin" ></iframe>
        </div>
    );
};

export default Contact;