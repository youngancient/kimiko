import styled from "styled-components";

export const WhiteLogoStyle = styled.div`
  h3 {
    color: var(--03-on-primary-high-emphasis, #fff);
    font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  display: flex;
  align-items: center;
  gap: 0.9375rem;
`;


export const BacktbtnStyles = styled.button`
  border-radius: 1.25rem;
  border: 1px solid #ebedf4;
  display: flex;
  width: 6.625rem;
  height: 2.5rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  p {
    color: #768396;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 133.333% */
  }
`;
