import { User } from './user.model';

export interface DocumentApplication {
  id?: string;
  name: string;
  description: string;
  user: User;
}
