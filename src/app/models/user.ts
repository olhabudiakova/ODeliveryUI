import {Serialize} from './serialize';

export class User extends Serialize {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
