export type FileType = {
  name: string;
  path: string;
  size: number;
  type: string;
  user: string;
  _id: string;
  date: string;
  childs: FileType[];
};
