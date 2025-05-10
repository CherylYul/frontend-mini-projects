export type Photos = {
  _id: string;
  photoId: string;
  slug: string;
  width: number;
  height: number;
  description: null | string;
  image: Image;
};

export type Image = {
  full: string;
  regular: string;
  thumb: string;
};
