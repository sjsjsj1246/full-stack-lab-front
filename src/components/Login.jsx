/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import GoogleLogin from "react-google-login";

const LoginWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Title = styled.h1``;

const GoogleButton = styled.div`
  width: 5rem;
  height: 5rem;
  background-image: url("https://littledeep.com/wp-content/uploads/2020/09/google-icon-styl.png");
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const Login = ({ onGoogleOauth }) => {
  return (
    <LoginWrapper>
      <Title>구글 OAuth</Title>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={(props) => <GoogleButton onClick={props.onClick} />}
        onSuccess={(result) => onGoogleOauth(result)}
        onFailure={(result) => console.log(result)}
        cookiePolicy={"single_host_origin"}
      />
    </LoginWrapper>
  );
};

export default Login;
