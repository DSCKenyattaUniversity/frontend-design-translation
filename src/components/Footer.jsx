import styled from "styled-components";

import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import EmailInput from "./EmailInput";

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
				<div className="flex-mid" id="contact">
					<p className="edie">Edie</p>
					<div className="icons">
						<img src={linkedin} alt="alt" />
						<img src={instagram} alt="alt" />
						<img src={twitter} alt="alt" />
					</div>
				</div>
				<div className="contact-div">
					<p style={{ color: "#828282", fontSize: 10 }}>
						Want us to contact you?
					</p>
					<EmailInput bgColor="#F2F2F2" />
				</div>
			</div>
			<p className="bottom">
				created by <span>Kijanda</span> - devchallenges.io
			</p>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	background-color: #100e1d;
	padding: 40px 36px;
	color: #f2f2f2;

	a {
		color: #f2f2f2;
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
				margin-bottom: 0.5rem;
				font-family: "Heebo", sans-serif;
				font-style: normal;
				font-weight: 800;
				font-size: 2.25rem; /* 36px  */
				line-height: 53px;
				color: #f2f2f2;
			}
			.icons {
				display: flex;
				gap: 0.75rem; /* 0.75rem = 12px */

				img {
					width: 1.5rem; /* 24px  */
					height: 1.5rem; /* 24px  */
				}
			}
		}
	}

	.bottom {
		color: #f2f2f2;
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 0.875rem; /* 14px */
		line-height: 17px;
		text-align: center;

		span {
			font-weight: bold;
			text-decoration: underline;
			cursor: pointer;
		}
	}
`;
