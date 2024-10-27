export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export type UserInsert = Omit<User, 'id' | 'created_at' | 'updated_at'>;
