import styled from "styled-components";

import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"

export default function Footer() {
    return (
        <StyledFooter>
            <div className="top">
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#our-works">Our Works</a>
                    <a href="#clients">Clients</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="flex-mid">
                    <p className="edie">Edie</p>
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
                created by <span>Kijanda</span> - devchallenges.io
            </p>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #100E1D;
    padding: 40px 36px;
    color: #F2F2F2;

    a {
        color: #F2F2F2;
    }

    .top {
        display: flex;
        flex-direction: column;
        gap: 4rem; /* 64x / 16px = 4rem */
        margin-bottom: 5rem; /* 80px / 16px = 5rem*/

        .links {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;

            a {
                display: inline-block;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .flex-mid {
            .edie {
                font-size: 2.25rem;
                font-weight: 800;
                color: inherit;
                margin-bottom: 0.5rem;
            }
            .icons {
                display: flex;
                gap: 0.75rem; /* 0.75rem = 12px */
            }
        }

        .contact-div {
            .input {
                background-color: white;
                border-radius: 12px;
                padding: 0.25rem; /* 4px */
                display: flex;
                justify-content: flex-between;
                align-items: center;
                font-family: inherit;
                
                input {
                    border: none;
                    width: 100%;
                    margin-left: 1rem;
                    font-family: inherit;
                }
                
                button {
                    border: none;
                    border-radius: 12px;
                    padding: 12px 20px;
                    background-color: #2D9CDB;
                    color: #F2F2F2;
                    font-weight: 500;
                    font-family: inherit;
                    cursor: pointer;
                }
            }
        }
    }

    .bottom {
        text-align: center;
        color: white;

        span {
            font-weight: bold;
            font-style: underline;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`