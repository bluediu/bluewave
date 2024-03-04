export interface IUser {
  id: number;
  username: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  updated_at: string;
}
