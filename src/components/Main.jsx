import styled from "styled-components";
import Card from "./Card";
import EmailInput from "./EmailInput";
import OurWorkCard from "./OurWorkCard";

import CodeIcon from "@mui/icons-material/Code";
import CreateIcon from "@mui/icons-material/Create";
import StorageIcon from "@mui/icons-material/Storage";

/* Images */
import booking from "../assets/booking.png";
import heroImage from "../assets/heroImage.jpg";
import juiceProduct from "../assets/juice-product.png";
import onboard from "../assets/onboard.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import smarthome from "../assets/smarthome.jpg";

export default function Main() {
	const onSeeMoreClick = () => {};

	return (
		<StyledMain>
			<section id="home" className="contain-size">
				<p className="tagline">Unhappy with your website?</p>
				<h2 className="title">
					We create beautiful and fast web services
				</h2>
				<img src={heroImage} alt="hero-pic" className="hero-image" />
				<div className="container">
					<h2 className="title story">Story, emotion and purpose</h2>
					<p className="content">
						We help transform your ideas into real world
						applications that will outperform your toughest
						competition and help you achieve your strategic goals in
						short period of time.
					</p>
					<p className="contact-you">Want us to contact you?</p>
					<EmailInput />
				</div>
			</section>
			<section id="services" className="contain-size">
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
			<section id="our-works" className="contain-size">
				<h2 className="title">Good design means good business</h2>
				<div className="grid">
					<OurWorkCard
						imgSrc={smarthome}
						type="Full stack application"
						name="Smart home dashboard"
						className="one"
					/>
					<OurWorkCard
						imgSrc={onboard}
						type="UX/UI design"
						name="Onboard application"
						className="two"
					/>
					<OurWorkCard
						imgSrc={booking}
						type="Mobile application"
						name="Booking system"
						className="three"
					/>
					<OurWorkCard
						imgSrc={juiceProduct}
						type="Front End application"
						name="Juice product homepage"
						className="four"
					/>
					<button className="see-more" onClick={onSeeMoreClick}>
						see more ➡
					</button>
				</div>
			</section>
			<section id="our-team" className="contain-size">
				<div>
					<h3 className="subtitle">Meet the team</h3>
					<h2 className="title">
						We are a chilled and laidback team
					</h2>
					<p className="content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className="img-container">
					<img src={person3} className="img-1" alt="person 1" />
					<img src={person1} className="img-2" alt="person 2" />
					<img src={person2} className="img-3" alt="person 3" />
				</div>
			</section>
			<section id="clients" className="contain-size">
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
		@media only screen and (min-width: 768px) {
			font-size: 2.25rem; /* 36px */
		}
		line-height: 36px;
		color: #333333; /* Gray 1 */
	}

	section {
		margin-bottom: 100px;
	}

	#home {
		.tagline {
			font-weight: 500;
			font-size: 0.75rem; /* 12px */
			color: #2d9cdb;
		}
		.hero-image {
			width: 100%;
			height: auto;
			border-radius: 18px;
			margin-bottom: 1.375rem; /* 22px */
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
		@media only screen and (min-width: 768px) {
			h2.title {
				font-size: 3rem; /* 48px */
				line-height: 72px;
			}
			.tagline {
				font-size: 1.125rem; /* 18px */
			}
			.content {
				font-size: 1.125rem; /* 18px */
			}
			.container {
				max-width: 50%;
			}
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
				gap: 2.5rem; /* 40px */
			}
		}
	}

	#our-works {
		.title {
			margin-bottom: 2rem; /* 32px */
		}

		.see-more {
			padding: 0;
			background-image: none;
			background-color: transparent;
			border: none;
			color: #2d9cdb;
			font-size: 18px;
			font-weight: 500;
			font-family: inherit;
			cursor: pointer;
		}
		@media only screen and (min-width: 768px) {
			.title {
				margin-bottom: 0.75px; /* 12px */
				max-width: 50%;
			}
			.grid {
				display: grid;
				column-gap: 1.25rem; /* 20px */
				row-gap: 3rem; /* 48px */
				grid-template-areas:
					". b"
					"a b"
					"a b"
					"a b"
					"a d"
					"c d"
					"c d"
					"c d"
					"c e";

				div:nth-child(1) {
					grid-area: a;
				}
				div:nth-child(2) {
					grid-area: b;
				}
				div:nth-child(3) {
					grid-area: c;
				}
				div:nth-child(4) {
					grid-area: d;
				}
				.see-more {
					grid-area: e;
				}
			}
			.see-more {
				display: block;
				margin-left: auto;
			}
		}
	}

	#our-team {
		@media only screen and (min-width: 768px) {
			display: flex;
			gap: 2rem;
			align-items: center;
		}
		.subtitle {
			font-weight: 500;
			font-size: 1.125rem; /* 18px */
			line-height: 27px;
			color: #eb5757;
			margin-bottom: 0.5rem; /* 8px */
		}
		.title {
			font-weight: 500;
			font-size: 2.25rem; /* 36px */
			line-height: 54px;
			color: #333333;
		}
		.content {
			font-weight: 400;
			font-size: 1rem;
			line-height: 24px;
			color: #4f4f4f;
			margin-bottom: 2.25rem; /* 36px */
		}
		.img-container {
			display: grid;
			gap: 0.5rem; /* 8px */
			// grid-template-areas:
			// 	". . . . . b b b ."
			// 	"a a a a a b b b ."
			// 	"a a a a a b b b ."
			// 	"a a a a a c c c c"
			// 	"a a a a a c c c c"
			// 	"a a a a a c c c c"
			// 	". . . . . c c c c";
			grid-template-columns: repeat(17, 1fr);
			grid-template-rows: repeat(15, 1fr);

			img {
				border-radius: 24px;
				display: block;
			}

			.img-1 {
				grid-area: a;
				grid-column: 1 / span 9;
				grid-row: 4 / span 9;
			}
			.img-2 {
				grid-area: b;
				grid-column: 10 / span 7;
				grid-row: 1 / span 7;
			}
			.img-3 {
				grid-area: c;
				grid-column: 10 / span 8;
				grid-row: 8 / span 8;
			}
		}
	}

	#clients {
		.client-review {
			&__content {
				font-weight: 500;
				font-size: 1.5rem; /* 24px */
				margin-bottom: 24px;
				line-height: 36px;
				color: #333333;
			}

			&__client {
				display: flex;
				gap: 1.5rem; /* 24px */

				.client-img {
					width: 82px;
					height: 82px;
					border-radius: 12px;
				}

				.client-name {
					display: block;
					font-weight: 500;
					font-size: 1.25rem; /* 20px */
					margin-bottom: 12px;
					color: #333;
				}

				.company {
					display: block;
					font-size: 0.875rem; /* 14px */
					font-weight: 500;
					color: #828282;
				}
			}
		}
	}
`;
