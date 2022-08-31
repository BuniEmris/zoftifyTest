export interface Post {
  id: number;
  status: string;
  title: string;
  description: string;
  image: any;
  createdTime: Date;
}
export type PickerImage = {
  path: string;
  id: number;
  mimetype: string;
  originalname: string;
  modificationDate?: string;
  creationDate?: string;
};
export type PostData = {
  title: string;
  status: string;
  description?: string;
  image?: any;
  createdTime: any;
};
