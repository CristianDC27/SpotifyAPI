import { Image } from "./app/images";
import { Track } from "./track";

export interface Album {
  id: String;
  name: String;
  images: [Image];
  tracks: [Track];
}
