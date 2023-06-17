export type TripObj = {
  id: number;
  name: string;
  price: number;
  description: string;
  position: TripPosition;
};

export type TripPosition = {
  latitude: number;
  longitude: number;
};
