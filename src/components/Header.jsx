import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";
import styled from "styled-components";

export default function Header() {
	const menuRef = useRef();

	const toggleMenu = () => {
		menuRef.current.classList.toggle("hidden");
	};

	return (
		<StyledHeader>
			<div id="contain-header">
				<div className="container">
					<a href="/" alt="Edie" className="logo">
						Edie
					</a>
					<MenuIcon onClick={toggleMenu} className="menu-icon" />
				</div>
				<div className="menu hidden" ref={menuRef}>
					<a href="#home">Home</a>
					<a href="#services">Services</a>
					<a href="#our-works">Our Works</a>
					<a href="#clients">Clients</a>
					<a href="#contact">Contact</a>
				</div>
			</div>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	background-color: #2d9cdb;
	color: #f2f2f2;
	padding: 12px 10px;
	margin-bottom: 36px;

	@media only screen and (min-width: 768px) {
		/* on tablet and desktops */
		#contain-header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.menu-icon {
				display: none;
			}
		}
	}

	@media only screen and (min-width: 768px) {
		#contain-header {
			max-width: 768px;
			margin-left: auto;
			margin-right: auto;
		}
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.menu-icon {
		cursor: pointer;
	}

	.logo {
		display: block;
		text-decoration: none;
		font-family: "Heebo", sans-serif;
		font-style: normal;
		font-weight: 800;
		font-size: 1.5rem; /* 24px */
		line-height: 35px;
		color: #333333;
	}

	.menu {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		margin-top: 1rem;

		@media only screen and (min-width: 768px) {
			/* on tablet and desktops */
			margin-top: 0;
			flex-direction: row;
			align-items: center;
			gap: 2rem;
		}

		a {
			color: #e1d6d6;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.hidden {
		display: none;
		@media only screen and (min-width: 768px) {
			/* on tablet and desktops */
			display: flex;
		}
	}
`;
