
const loginKey = "loginData";

class AuthLocalUtils {
  static saveLoginData(data) {
    localStorage.setItem(loginKey, data);
  }

  static getLoginData() {
    return localStorage.getItem(loginKey);
  }

  static getToken() {
    return AuthLocalUtils.getLoginData().token;
  }

}

export default AuthLocalUtils;