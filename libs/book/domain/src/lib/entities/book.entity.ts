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
  volumeInfo?: {
    title: string;
    authors: string[];
    publisher: string;
    publishDate: DateTimeString;
    printType: string;
    pageCount: number;
    description: string;
    averageRating: number;
    ratingsCount: number;
    categories: string[];
    language: string;
    previewLink: URL;
    infoLink: URL;
    imageLinks: {
      thumbnail: URL;
      smallThumbnail: URL;
      medium: URL;
      large: URL;
      extraLarge: URL;
    };
    canonicalVolumeLink: URL;
    industryIdentifiers: IndustryIdentifier[];
  };
  saleInfo?: {
    country: string;
    saleability: string;
    coisEbookuntry: boolean;
    listPrice: Price;
    retailPrice: Price;
    buyLink: URL;
  };
  searchInfo?: {
    textSnippet: string;
  };
}
