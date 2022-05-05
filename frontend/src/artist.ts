import { Image } from "./app/images";

export interface Artist {
  id: String;
  name: String;
  images: [Image];
}
