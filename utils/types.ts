export interface ITitleDetails {
  title: string;
  posterImg: string;
  coverImg: string;
  year: number;
  categories: string[];
  description: string;
  id: number;
}

export type TCardIndex = 'first' | 'middle' | 'last';

export interface CarouselProps {
  dataList: ITitleDetails[];
}
