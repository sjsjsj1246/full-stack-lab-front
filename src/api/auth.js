import axios from "axios";

export const getGoogleInfo = async (token) => {
  const response = await axios({
    method: "post",
    url: "/api/auth/google",
    data: {
      id_token: token.id_token,
    },
  });
  return response.data;
};
