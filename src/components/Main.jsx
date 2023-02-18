import styled from "styled-components";
import Card from "./Card";
import EmailInput from "./EmailInput";
import OurWorkCard from "./OurWorkCard";

import CreateIcon from "@mui/icons-material/Create";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";

/* Images */
import heroImage from "../assets/heroImage.jpg";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import smarthome from "../assets/smarthome.jpg";
import onboard from "../assets/onboard.png";
import booking from "../assets/booking.png";
import juiceProduct from "../assets/juice-product.png";

export default function Main() {
	const onSeeMoreClick = () => {};

	return (
		<StyledMain>
			<section id="home">
				<p className="tagline">Unhappy with your website?</p>
				<h2 className="title">
					We create beautiful and fast web services
				</h2>
				<img src={heroImage} alt="hero-pic" className="hero-image" />
				<h2 className="title story">Story, emotion and purpose</h2>
				<p className="content">
					We help transform your ideas into real world applications
					that will outperform your toughest competition and help you
					achieve your strategic goals in short period of time.
				</p>
				<p className="contact-you">Want us to contact you?</p>
				<EmailInput />
			</section>
			<section id="services">
				<h2 className="title">We offer high demand services</h2>
				<div className="row">
					<Card
						iconBg="#2D9CDB"
						icon={CreateIcon}
						title="UI/UX Design"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
					/>
					<Card
						iconBg="#27AE60"
						icon={CodeIcon}
						title="Front End"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
					/>
					<Card
						iconBg="#EB5757"
						icon={StorageIcon}
						title="Back End"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
					/>
				</div>
			</section>
			<section id="our-works">
				<h2 className="title">Good design means good business</h2>
				<OurWorkCard
					imgSrc={smarthome}
					type="Full stack application"
					name="Smart home dashboard"
				/>
				<OurWorkCard
					imgSrc={onboard}
					type="UX/UI design"
					name="Onboard application"
				/>
				<OurWorkCard
					imgSrc={booking}
					type="Mobile application"
					name="Booking system"
				/>
				<OurWorkCard
					imgSrc={juiceProduct}
					type="Front End application"
					name="Juice product homepage"
				/>
				<p className="see-more" onClick={onSeeMoreClick}>
					see more ➡
				</p>
			</section>
			<section id="our-team">
				<h3>Meet the team</h3>
				<h2>We are chilled and a laidback team</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<div className="img-container">
					<img src={person1} alt="person 1" />
					<img src={person2} alt="person 2" />
					<img src={person3} alt="person 3" />
				</div>
			</section>
			<section id="clients">
				<div className="client-review">
					<p className="client-review__content">
						“Fast and outstanding results. Edie understands their
						customer’s needs. They have a young and talented team.”
					</p>
					<div className="client-review__client">
						<img
							src={person4}
							alt="client"
							className="client-img"
						/>
						<div className="container">
							<span className="client-name">Carlos Tran</span>
							<span className="company">The Decorate Gatsby</span>
						</div>
					</div>
				</div>
			</section>
		</StyledMain>
	);
}

const StyledMain = styled.main`
	padding: 1rem; /* 16px */
	.pad {
		padding: 1.5rem; /* 24px */
	}

	.title {
		margin-bottom: 1rem;
		font-family: "Poppins";
		font-style: normal;
		font-weight: 500;
		font-size: 1.5rem; /* 24px */
		line-height: 36px;
		color: #333333; /* Gray 1 */
	}

	section {
		margin-bottom: 100px;
	}

	#home {
		.tagline {
			font-weight: 500;
			font-size: 12px;
			color: #2d9cdb;
		}
		.hero-image {
			width: 100%;
			height: 145px;
			border-radius: 18px;
			margin-bottom: 1.5rem; /* 24px */
			object-fit: cover;
			object-position: center;
		}
		.story {
			margin-bottom: 2rem; /* 32px */
		}
		.content {
			font-weight: 400;
			font-size: 0.75rem; /* 12px */
			color: #4f4f4f; /* Gray 2 */
			margin-bottom: 2rem;
		}
		.contact-you {
			font-weight: 500;
			font-size: 0.625rem; /* 10px */
			line-height: 15px;
			color: #828282; /* Gray 3 */
		}
	}

	#services {
		.row {
			display: flex;
			flex-direction: column;
			gap: 4.5rem; /* 72px */

			@media only screen and (min-width: 768px) {
				/* on tablet and desktops */
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}

	#our-works {
		.title {
			margin-bottom: 2rem; /* 32px */
		}

		.see-more {
			color: #2d9cdb;
			font-size: 18px;
			font-weight: 500;
		}
	}

	#clients {
		.client-review {
			&__content {
				font-weight: 500;
				font-size: 1.5rem; /* 24px */
				margin-bottom: 24px;
			}

			&__client {
				display: flex;
				gap: 30px;

				.client-img {
					width: 82px;
					height: 82px;
					border-radius: 12px;
				}

				.client-name {
					font-weight: 500;
					font-size: 1.5rem; /* 24px */
					margin-bottom: 12px;
					color: #333;
				}

				.company {
					font-size: 18px;
					font-weight: 500;
					color: #828282;
				}
			}
		}
	}
`;
