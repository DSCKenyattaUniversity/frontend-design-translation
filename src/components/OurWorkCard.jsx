import styled from "styled-components";

export default function OurWorkCard({
	imgSrc,
	type,
	name,
	className,
	mb = 36,
}) {
	return (
		<StyledCard style={{ marginBottom: mb }} className={className}>
			<img src={imgSrc} alt="..." className="work-img" />
			<p className="work-type">{type}</p>
			<p className="work-name">{name}</p>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	.work-img {
		border-radius: 24px;
		display: block;
		margin-bottom: 12px;
	}

	.work-type {
		font-weight: 300;
		font-size: 0.75rem; /* 12px */
		line-height: 18px;
		color: #828282;
	}

	.work-name {
		font-weight: 500;
		font-size: 1.125rem; /* 18px */
		line-height: 27px;
		color: #333333;
	}
`;
