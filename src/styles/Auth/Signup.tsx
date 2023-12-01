import styled from "styled-components";

export const AuthStyles = styled.div`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(/assets/auth.png),
    lightgray -165.523px -2.45px / 175.484% 100% no-repeat;
  min-height: 100vh;
  .form-div {
    background: #fff;
    display: flex;
    padding: 4rem 1rem 3.125rem 1rem;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }
  .intro {
    h3 {
      color: var(--shade-900, #00001a);
      font-feature-settings: "clig" off, "liga" off;

      /* Body text- web */
      font-family: Inter;
      font-size: 1.5rem;
      overflow: hidden;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5rem; /* 100% */
      letter-spacing: 0.01125rem;
    }
    p {
      color: #768396;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Inter;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1rem; /* 133.333% */
      margin-top: 0.5rem;
      width: 90%;
    }
  }
  form input {
    width: 100%;
    display: flex;
    height: 2.25rem;
    padding: 0.5rem 0.75rem;
    align-items: center;
    gap: 0.75rem;
    align-self: stretch;
    border-radius: 0.375rem;
    border: 1px solid var(--grey-300, #d0d5dd);
    background: var(--grey-100, #f0f2f5);
    color: var(--grey-500, #101928);
    font-feature-settings: "cv04" on, "cv03" on;

    /* Paragraph/Small/Regular */
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
  }
  input::placeholder {
    color: var(--grey-400, #98a2b3);
    font-feature-settings: "cv04" on, "cv03" on;

    /* Paragraph/Small/Regular */
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
  }
  .form-ele label {
    color: var(--grey-900, #101928);

    /* Paragraph/Small/Medium */
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem; /* 142.857% */
  }
  .inp {
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    position: relative;
    svg {
      position: absolute;
      right: 5%;
    }
  }
  .fg {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .btn {
    margin-top: 3rem;
  }
  .btn button {
    border-radius: 62.5rem;
    background: var(--Primary-Color, #007aff);
    display: flex;
    height: 3rem;
    padding: 1rem 1.5rem;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    color: var(--color-set-type-white-primary, #fff);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.00938rem;
    text-transform: capitalize;
  }
  .logo-div-mobile,
  .logo-div-desktop {
    padding: 2rem 2rem;
  }
  .nav {
    margin-top: 1rem;
    p {
      color: #768396;
      text-align: center;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Inter;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1rem; /* 133.333% */
    }
    strong {
      color: var(--tint-800, #1a87ff);
    }
  }
  @media (max-width: 998px) {
    .form-div {
      width: 70%;
      margin: 0 auto;
      border-radius: 1.25rem;
    }
    .logo-div-desktop {
      display: none;
    }
    .fl {
      padding-bottom: 4rem;
    }
  }
  @media (max-width: 500px) {
    .form-div {
      width: 90%;
    }
  }
  @media (min-width: 768px) {
    .logo-div-mobile {
      width: 70%;
      margin: 0 auto;
    }
  }
  @media (min-width: 998px) {
    background: lightgray;
    .fl {
      display: flex;
      justify-content: center;
      align-items: stretch;
    }
    .logo-div-desktop {
      min-height: 100vh;
      width: 40%;
      border-radius: 1.25rem 0 0 1.25rem;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url(/assets/auth.png) no-repeat,
      lightgray -165.523px -2.45px / 175.484% 100% no-repeat;

    }
    .fl {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    .form-div {
      padding: 4rem 5rem 3.125rem 3rem;
      border-radius: 0 1.25rem 1.25rem 0;
      width: 40%;
    }
    .logo-div-mobile {
      display: none;
    }
  }
`;


export const SignupStyles = styled(AuthStyles)`
  .choose{
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
`