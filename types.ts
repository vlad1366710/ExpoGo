export interface Marker {
  id: string;
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
  images?: string[];
}

export interface Image {
  id: string;
  uri: string;
}

export interface NavigationParams {
  markerId: string;
}