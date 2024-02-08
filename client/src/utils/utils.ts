import { IUser } from 'interfaces/IUser';

export const utilsService = {
  sortBy,
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
