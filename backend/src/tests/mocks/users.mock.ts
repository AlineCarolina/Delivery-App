const mockAdmin = {
  email: "adm@deliveryapp.com",
  id: 1,
  name: "Delivery App Admin",
  role: "administrator",
}

const mockUser = {
  email: "zebirita@email.com",
  id: 3,
  username: "Cliente Zé Birita",
  role: "customer",
}

const mockUserSameEmail = {
  email: 'zebirita@email.com',
  password: '$#zebirita#$',
  username: 'Cliente Zé Birita',
}

const mockUserWithoutUsername = {
  email: 'zebirita@email.com',
  password: '$#zebirita#$',
  username: '',
}

const mockUserWithoutEmail = {
  email: '',
  password: '$#zebirita#$',
  username: 'Cliente Zé Birita',
}

const mockUserInvalidEmail = {
  email: 'zebirita.com',
  password: '$#zebirita#$',
  username: 'Cliente Zé Birita',
}

const mockUserWithoutPassword = {
  email: 'zebirita@email.com',
  password: '',
  username: 'Cliente Zé Birita',
}

const mockUserInvalidPassword = {
  email: 'zebirita@email.com',
  password: 'zebi',
  username: 'Cliente Zé Birita',
}

const mockNewUser = {
  email: "zebirita@email.com",
  name: "Cliente Zé Birita",
  role: "customer",
  password: 'somePassword'
}

const mockValidUser = {
  email: "usuario77@gmail.com",
  username: "usuario77",
  password: "usuario77senha"
}

const mockRegisterModelReturn = {
  username: 'usuario77',
  email: 'usuario77@gmail.com',
  password: 'usuario77senha',
  role: 'customer',
}

const mockSeller = {
  id: 2,
  name: "Fulana Pereira",
  email: "fulana@deliveryapp.com",
  role: "seller",
};

export {
  mockAdmin,
  mockNewUser,
  mockUser,
  mockUserSameEmail,
  mockUserWithoutUsername,
  mockUserWithoutEmail,
  mockUserInvalidEmail,
  mockUserWithoutPassword,
  mockUserInvalidPassword,
  mockValidUser,
  mockRegisterModelReturn,
  mockSeller
}