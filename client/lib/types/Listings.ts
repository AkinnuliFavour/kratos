export interface Listing {
  saved_listings: SavedListing[];
  recommended_listings: Recommendedlisting[];
  featured_lodges: FeaturedLodges[]
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

export interface FeaturedLodges{
  id: string
  name: string
  location: string
  description: string
  price: string
  image: string
}
