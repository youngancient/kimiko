import { IUserType } from "@/pages/auth/signup";
import styled, { css } from "styled-components";
import { DocIcon, DocIconBlue, PatientIcon } from "../Icons/Icons";

export interface ISelectedComp {
  $isSelected: boolean;
}

interface IUserTypeFunc extends IUserType{
    handleSelect : () => void;
}
export const UserTypeOptions: React.FC<IUserTypeFunc> = ({ name, isSelected, handleSelect }) => {
  return (
    <UserTypeOptionStyles $isSelected={isSelected} onClick={handleSelect}>
      <div className="first">
        {name == "Patient" ? <PatientIcon /> : <DocIconBlue />}
        <h4>{name}</h4>
      </div>
      <p>
        {name == "Patient"
          ? "You identify as a regular user of Kimiko"
          : "You identify as a professional on Kimiko"}
      </p>
    </UserTypeOptionStyles>
  );
};

export const UserTypeOptionStyles = styled.div<ISelectedComp>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  .first {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  h4 {
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.00938rem;
  }
  p {
    color: #768396;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 133.333% */
  }
  border-radius: 1rem;
  border: 2px solid #ebedf4;
  background: #fbfbfd;
  padding: 2.75rem 0.75rem 2.75rem 0.75rem;
  ${(props) =>
    props.$isSelected &&
    css`
      background: #D7ECFF;
    border: 2px solid #D7ECFF;
    `}
`;
