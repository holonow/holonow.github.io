export interface Live {
  time: Date;
  streamer: string;
  streaming: boolean;
  guests: string[];
  link: string;
  videoId: string;
  livePreviewImage: string;
}
export interface LiveGroup {
  date: string
  lives: Live[]
}

export type LiverImgMap = Record<string, string>
