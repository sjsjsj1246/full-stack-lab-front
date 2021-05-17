import axios from "axios";

export const getGoogleInfo = async (token) => {
  const response = await axios({
    method: "post",
    url: "/api/auth/google",
    data: {
      token_type: token.token_type,
      access_token: token.access_token,
      scope: token.scope,
      expires_in: token.expires_in,
      id_token: token.id_token,
      expires_at: token.expires_at,
    },
  });
  return response.data;
};
