import { useRef } from "react";
import styled from "styled-components";


export default function EmailInput ({ bgColor="#F2F2F2" }) {
    const inputRef = useRef();

    const onJoinClick = () => {
        const email = inputRef.current.value;
        if (email) {
            prompt(`Your email is ${email}`);
        }
    }

    return (
        <StyledDiv bgColor={bgColor}>
            <input type="text" placeholder="Email" ref={inputRef} />
            <button className="input-btn" onClick={onJoinClick}>
                Join
            </button>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background-color: ${props => props.bgColor};
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
        background: none;
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
`