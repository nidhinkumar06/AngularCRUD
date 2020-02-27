export interface User {
  name: string;
  age: string;
  gender: string;
  mobile: string;
  location: string;
}

export interface UserState {
  users: User[]; // users will be an array of objects. The objects will be of the User type defined above
}
