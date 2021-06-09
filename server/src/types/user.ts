export interface IUser {
  _id: string;
  email: string;
  phone: string;
  profile_id: string;
  address_id: string;
}

export interface IProfile {
  _id: string;
  name: string;
  description: [string];
  hobbies: [string];
  age: number;
  gender: IGender;
  image_id: Array<IImage>;
}

export interface IAddress {
  _id: string;
  exact_address: string;
  street_name: string;
  province_id: string;
  district_id: string;
  ward_id: string;
  geo_coordinate_id: string;
}

export interface IImage {
  _id: string;
  src: string;
  alt: string;
}

interface IGender {
  _id: number;
  gender_name: string;
}
