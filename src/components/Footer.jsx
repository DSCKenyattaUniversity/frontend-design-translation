import "./Footer.css";
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"


export default function Footer() {
    return (
        <footer className='Footer'>
            <div className="top">
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#our-works">Our Works</a>
                    <a href="#clients">Clients</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="flex-mid">
                    <p>Edie</p>
                    <div className="icons">
                        <img src={linkedin} alt="alt" />
                        <img src={instagram} alt="alt" />
                        <img src={twitter} alt="alt" />
                    </div>
                </div>
                <div className="contact-div">
                    <p style={{color: "#828282", fontSize: 10}}>Want us to contact you?</p>
                    <div className="input">
                        <input type="text" placeholder="Email" />
                        <button className="input-btn">
                            Join
                        </button>
                    </div>
                </div>
            </div>
            <p className="bottom">
                created by <span>username</span> . devchallenges.io
            </p>
        </footer>
    )
}