import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button txt={"게시글 작성하기"} onBtnClick={() => navigate("/write")} />
      <DetailWrapper>
        <Author>성윤정</Author>
        <Time>2025-06-25T22:54:21Z</Time>
        <Comment>하이</Comment>
        <BtnWrapper>
          <Button txt={"수정"} fontSize={"30px"} />
          <Button txt={"삭제"} fontSize={"30px"} />
        </BtnWrapper>
      </DetailWrapper>
    </Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  margin-top: 20px;
  color: var(--text-black);
`;

const DetailWrapper = styled.div`
  /* width: calc(100% - 200px); */
  height: fit-content;
  background-color: white;
  border-radius: 20px;
  padding: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Author = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const Time = styled.div`
  color: var(--text-grey);
  font-weight: 600;
  font-size: 20px;
`;

const Comment = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin: 50px 0;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
