type CreateUserDto = {
  username: string;
  password: string;
  name: string;
  dob: Date;
  gender: string;
  positionId: string;
  phone: string;
  roleId: string;
  isActive?: boolean;
};

export { CreateUserDto };
