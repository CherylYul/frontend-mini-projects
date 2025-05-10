export interface Unsplash {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: Date;
  updated_at: Date;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: UnsplashLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: Sponsorship | null;
  topic_submissions: TopicSubmissions;
  asset_type: AssetType;
  user: User;
}

export interface AlternativeSlugs {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

export enum AssetType {
  Photo = "photo",
}

export interface UnsplashLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Sponsorship {
  impression_urls: any[];
  tagline: string;
  tagline_url: string;
  sponsor: User;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: null | string;
  portfolio_url: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null;
}

export interface TopicSubmissions {
  "business-work"?: ArchitectureInterior;
  film?: Film;
  nature?: ArchitectureInterior;
  travel?: ArchitectureInterior;
  wallpapers?: ArchitectureInterior;
  "architecture-interior"?: ArchitectureInterior;
  people?: Film;
}

export interface ArchitectureInterior {
  status: string;
}

export interface Film {
  status: string;
  approved_on?: Date;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
