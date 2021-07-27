export type VolumeId = string;
export type URL = string;
export type Language = string;
export type DateTimeString = string;

export interface Price {
  amount: number;
  currencyCode: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: VolumeId;
}

export interface BookEntity {
  id: VolumeId;
  etag?: string;
  selfLink?: URL;
  volumeInfo: {
    title: string;
    authors: string[];
    printType: string;
    pageCount: number;
    description: string;
    publisher: string;
    publishedDate: string;
    categories: string[];
    language: string;
    imageLinks: {
      thumbnail?: URL;
      smallThumbnail?: URL;
      small?: URL;
      medium?: URL;
      large?: URL;
      extraLarge?: URL;
    };
    averageRating?: number;
    ratingsCount?: number;
    industryIdentifiers?: IndustryIdentifier[];
  };
}
