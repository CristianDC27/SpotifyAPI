import { Image } from "./app/images";

export interface Episode {
  id: String;
  name: String;
  images: Image[];
  release_date: String;
}
