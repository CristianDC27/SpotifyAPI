import { Track } from "./track";

export interface Album {
  id: number;
  name: string;
  tracks: [Track];
}
