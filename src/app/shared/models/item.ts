export interface SearchResults {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface ItemDetails {
  author: Author;
  item: Item;
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  address_state?: string;
  sold_quantity?: number;
  description?: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number | null;
}
