import styled from "styled-components";

export default function Card({ icon: Icon, iconBg, title, content, href="#" }) {
    return (
        <StyledDiv>
            <div className="icon-container" style={{ backgroundColor: iconBg }}>
                <Icon />
            </div>
            <h4 className="card-title">{title}</h4>
            <p className="card-content">{content}</p>
            <a href={href} className="link">Get started</a>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background-color: white;
    border-radius: 1.5rem; /* 1.5rem = 24px */
    padding: 46px 34px;

    .icon-container {
        color: white;
        margin-bottom: 36px;
        border-radius: 1rem;
        width: 68px;
        height: 68px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-title {
        margin-bottom: 24px;
        font-size: 1.5rem; /* 24px */
        font-weight: 700;
        color: #333333;
    }

    .card-content {
        margin-bottom: 30px;
        font-size: 1rem; /* 24px */
        font-weight: 400;
    }

    .link {
        display: inline-block;
        text-decoration: none;
        font-weight: 500;
        padding: 9px 12px;
        border-radius: 12px;
        background-color: #E0E0E0;
        color: #828282;
    }

    &:hover {
        box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);

        .link {
            background-color: #2D9CDB;
            color: white;
        }
    }
`