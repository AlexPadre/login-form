const admin = {
  email: "admin@admin.com",
  password: "admin123"
}

export const Login = (name, email, password) => {
    if (email === admin.email && password === admin.password) {
      return {
        name,
        email
      };
    }
    return null;
  }