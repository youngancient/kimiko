import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 4rem 0rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background: var(--tint-100, #FBFBFD);
  .first {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .links,
  .socials {
    display: flex;
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    padding-left: 1.5rem;
    .links{
        flex-direction: column;
    }
  }
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    .first {
      justify-content: center;
      align-items: center;
    }
  }
`;
