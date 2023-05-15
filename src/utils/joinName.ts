export const joinName = (lastName: string, name: string, middleName: string) => {
  if (middleName) {
    const fullName = lastName + ' ' + name + ' ' + middleName;
    return fullName;
  } else {
    const fullName = lastName + ' ' + name;
    return fullName;
  }
  
};

