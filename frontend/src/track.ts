import { Album } from "./album";

export interface Track {
  id: String;
  name: String;
  album: Album;
  popularity: number;
}
