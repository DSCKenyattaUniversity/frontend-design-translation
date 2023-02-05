import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header () {
    return (
        <StyledHeader>
            <a href="/" alt="Edie" className="logo">Edie</a>
            <MenuIcon />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #2D9CDB;
    color: #F2F2F2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 10px;

    & .logo {
        display: block;
        font-size: 24px;
        font-weight: 800;
        text-decoration: none; 
        color: inherit;
    }
`