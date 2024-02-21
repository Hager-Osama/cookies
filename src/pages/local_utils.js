const loginKey = "loginData";

class AuthLocalUtils {
  static saveLoginData(data) {
    localStorage.setItem(loginKey, JSON.stringify(data));
  }

  static getLoginData() {
    const stringValue = localStorage.getItem(loginKey);
    return JSON.parse(stringValue);
  }

  static getToken() {
    return AuthLocalUtils.getLoginData()?.token;
  }

  static deleteLoginData() {
    localStorage.removeItem(loginKey);
  }
}

export default AuthLocalUtils;
