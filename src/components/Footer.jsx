import React from "react";
import '../Styles/footer.css';
import { AiFillFacebook,AiFillInstagram,AiFillTwitterSquare,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";

const Footer=()=>{
    return(
        <>
        <footer>
            <div className="footer-content">
                <h3>
                    Clowak Innovation
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis posuere gravida. Nulla id scelerisque ligula, et molestie nibh. Proin eu magna sem. Fusce eget mattis metus. Praesent sodales blandit.</p>
                <ul className="socials">
                    <li><a href="https://www.linkedin.com/company/clowak-innovations-llp/?viewAsMember=true" className="ld"><AiFillLinkedin /></a></li>
                    <li><a href="https://www.instagram.com/clowak_innovations/" className="ig"><AiFillInstagram /></a></li>
                    <li><a href="https://www.facebook.com/CLOWAKINNOVATIONS" className="fb"><AiFillFacebook /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCX18BBZubtPF_mQNjcM5lIw" className="yt"><AiFillYoutube /></a></li>
                    <li><a href="https://twitter.com/ClowakI" className="twt"><AiFillTwitterSquare /></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2022 clowak innovations</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;
