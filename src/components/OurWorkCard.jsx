import styled from "styled-components";

export default function OurWorkCard({ imgSrc, type, name }) {
    return (
        <StyledCard>
            <img src={imgSrc} alt="..." className="work-img" />
            <p className="work-type">{type}</p>
            <p className="work-name">{name}</p>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    .work-img {}

    .work-type {}

    .work-name {}
`