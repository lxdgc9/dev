type CreateUserDto = {
  username: string;
  password: string;
  profile: {
    name: string;
    dob: Date;
    gender: string;
    positionId: string;
    phone: string;
    avatar?: string;
  };
  roleId: string;
  isActive?: boolean;
};

export { CreateUserDto };
