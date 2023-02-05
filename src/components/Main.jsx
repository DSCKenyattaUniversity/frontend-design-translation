import styled from "styled-components";
import Card from "./Card";
import EmailInput from "./EmailInput";

import CreateIcon from '@mui/icons-material/Create';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';

import heroImage from "../assets/heroImage.jpg"; 

export default function Main() {
    return (
        <StyledMain>
            <section id="home">
                <p>Unhappy with your website?</p>
                <h2>We create beautiful and fast web services</h2>
                <img src={heroImage} alt="hero-pic" className="hero-image" />
                <h2>Story, emotion and purpose</h2>
                <p>
                    We help transform your ideas into real world applications that will
                    outperform your toughest competition and help you achieve your
                    strategic goals in short period of time.
                </p>
                <p>Want us to contact you?</p>
                <EmailInput />
            </section>
            <section id="services">
                <h2>We offer high demand services</h2>
                <div className="row">
                    <Card iconBg="#2D9CDB" icon={CreateIcon} title="UI/UX Design" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis." />
                    <Card iconBg="#27AE60" icon={CodeIcon} title="Front End" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis." />
                    <Card iconBg="#EB5757" icon={StorageIcon} title="Back End" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis." />
                </div>
            </section>
        </StyledMain>
    );
}

const StyledMain = styled.main`
    padding: 2rem;
    
    #home {}

    #services {
        .row {
            display: flex;
            flex-direction: column;
            gap: 4.5rem; /* 72px */

            @media only screen and (min-width: 768px) { /* on tablet and desktops */
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
`