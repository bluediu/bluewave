export interface ICategory {
  id: number;
  name: string;
  is_active: boolean;
  image: string;
}

export interface ICategoryCreate {
  name: string;
  image: File;
}

export interface ICategoryUpdate extends ICategoryCreate {
  is_active: boolean;
}
