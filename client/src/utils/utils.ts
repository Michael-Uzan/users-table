import { IUser } from 'interfaces/IUser';

export const utilsService = {
  sortBy,
  validateUser,
  resetFields,
};

function sortBy(items: IUser[], sortBy: keyof IUser, order: number) {
  items.sort((itemA, itemB) => {
    if (typeof itemA[sortBy] === 'string') {
      const nameA = itemA[sortBy];
      const nameB = itemB[sortBy];
      if (nameA < nameB) {
        return -1 * order;
      }
      if (nameA > nameB) {
        return 1 * order;
      }

      return 0;
    } else
      return ((itemA[sortBy] as number) - (itemB[sortBy] as number)) * order;
  });

  return items;
}

function validateUser(user: IUser): boolean {
  for (const key in user) {
    // eslint-disable-next-line no-prototype-builtins
    if (user.hasOwnProperty(key)) {
      const value = user[key as keyof IUser];
      if (typeof value === 'string' && value.trim() === '') {
        return false;
      }
      if (typeof value === 'number' && value < 0) {
        return false;
      }
    }
  }

  return true;
}

function resetFields() {
  return {
    fullName: '',
    country: '',
    city: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    yearsOfExperience: -1,
  };
}
