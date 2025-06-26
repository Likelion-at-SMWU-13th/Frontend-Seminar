import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 80px 100px;
  width: 100%;
  min-height: 100dvh;
  background-color: var(--bg-grey);
`;

const Title = styled.div`
  color: var(--text-black);
  font-size: 50px;
  font-weight: bolder;
  cursor: pointer;
`;

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Title onClick={() => navigate("/")}>숙멋 프론트의 TMI 게시판 🦁</Title>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default App;
