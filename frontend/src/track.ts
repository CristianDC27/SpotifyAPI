import { Album } from "./album";

export interface Tracks{
  tracks: [Track];
}

export interface Track {
  id: String;
  name: String;
  album: Album;
  popularity: number;
}
