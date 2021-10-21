import axios from "axios";

interface IAccessTokenResponse {

}

class AuthenticateUserService {
  async execute(code: string) {
    const URL = "https://github.com/login/oauth/access_token";

    const response = await axios.post(URL, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: "application/json",
      },
    });

    return response.data;
  }
}

export { AuthenticateUserService };
