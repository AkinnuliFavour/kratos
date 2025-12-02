export interface Listing {
  saved_listings: SavedListing[];
  recommended_listings: Recommendedlisting[];
}

export interface SavedListing {
  id: string;
  name: string;
  location: string;
  price: string;
  image: string;
}

export interface Recommendedlisting {
  id: string;
  name: string;
  location: string;
  price: string;
  image: string;
}
