/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const MainWrapper = styled.div``;

const Info = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Main = ({ user }) => {
  return (
    <MainWrapper>
      {user.email !== "" ? (
        <Info>
          <img src={user.picture} alt="" />
          <h1>{user.name}님 환영합니다!</h1>
          <p>{user.email}</p>
        </Info>
      ) : (
        <Info>
          <h1>구글 OAuth를 실험해봅시다</h1>
          <Link to="/login">로그인 페이지로 이동</Link>
        </Info>
      )}
    </MainWrapper>
  );
};

export default Main;
