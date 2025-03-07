type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const initialValues: User = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

function createOrUpdateUser(initialValues: User, updates: Partial<User>) {
  return { ...initialValues, ...updates };
}

createOrUpdateUser(initialValues, {
  email: "user@mail.com",
  password: "password123",
});
