interface UserInfo {
  username: string;
  password: string;
  age: number;
  sex: string;
}

export class Users {
  getUserInfo(uid: number): UserInfo | null {
    let userInfo: UserInfo = {
      username: "jerry",
      password: "password",
      age: 18,
      sex: "男",
    };
    return uid ? userInfo : null;
  }

  getRoleInfo(uid: number): object | null {
    if (!uid) return null;
    return { role: "admin" };
  }
}
