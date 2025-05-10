export type Photo = {
  _id: string;
  photoId: string;
  slug: string;
  width: number;
  height: number;
  description: string | null;
  image: ImageVariant;
};

export type ImageVariant = {
  full: string;
  regular: string;
  thumb: string;
};
