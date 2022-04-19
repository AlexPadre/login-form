export const Login = (name, email, password) => {

  const admin = {
    email: "admin@admin.com",
    password: "admin123"
  }

    if (email == admin.email && password == admin.password) {
      console.log("Logged In");
      return {
        name,
        email
      };
    }
  }