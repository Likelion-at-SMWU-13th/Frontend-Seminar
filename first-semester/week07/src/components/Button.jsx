import styled from "styled-components";

const Button = ({ txt, onBtnClick, fontSize }) => {
  return (
    <ButtonContainer onClick={onBtnClick} fontSize={fontSize}>
      {txt || "버튼"}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  padding: 15px 40px;
  background-color: var(--text-black);
  border-radius: 30px;
  border: none;
  color: white;
  font-weight: 700;
  /* cursor: pointer; */
  font-size: ${(props) => props.fontSize || "20px"};
  &:hover {
    background-color: var(--main-orange);
  }
`;
