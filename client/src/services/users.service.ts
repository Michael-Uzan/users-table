import { IUser } from 'interfaces/IUser';
import { httpService } from './http.service';

export const usersService = {
  query,
  getUserById,
  remove,
  save,
};

function query(criteria: string | null = null): Promise<IUser[]> {
  return httpService.get('users', { name: criteria });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getUserById(userId: number) {
  return httpService.get(`users/${userId}`);
}

function remove(userId: number) {
  return httpService.delete(`users/${userId}`);
}

function save(user: IUser) {
  if (user.id) {
    return _put(user);
  } else {
    return _post(user);
  }
}

function _put(user: IUser) {
  return httpService.put(`users/${user.id}`, user);
}
function _post(user: IUser) {
  return httpService.post('users', user);
}
