import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import { useRef } from "react";

export default function Header () {
    const menuRef = useRef();

    const toggleMenu = () => {
        menuRef.current.classList.toggle("hidden");
    }

    return (
        <StyledHeader>
            <div className="container">
                <a href="/" alt="Edie" className="logo">Edie</a>
                <MenuIcon onClick={toggleMenu} className="menu-icon" />
            </div>
            <div className="menu hidden" ref={menuRef}>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#our-works">Our Works</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #2D9CDB;
    color: #F2F2F2;
    padding: 12px 10px;
    margin-bottom: 36px;

    .menu-icon {
        cursor: pointer;
    }

    @media only screen and (min-width: 768px) { /* on tablet and desktops */
        display: flex;
        align-items: center;
        justify-content: space-between;

        .menu-icon {
            display: none;
        }
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & .logo {
        display: block;
        font-size: 24px;
        font-weight: 800;
        text-decoration: none; 
        color: inherit;
    }

    .menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        margin-top: 1rem;
        
        @media only screen and (min-width: 768px) { /* on tablet and desktops */
            margin-top: 0;
            flex-direction: row;
            align-items: center;
            gap: 2rem;
        }
    
        a {
            color: #E1D6D6;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .hidden {
        display: none;
        @media only screen and (min-width: 768px) { /* on tablet and desktops */
            display: flex;
        }
    }
`