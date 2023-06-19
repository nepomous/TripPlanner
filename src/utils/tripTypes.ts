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

export type TripPoint = {
  id: number;
  pointName: string;
  position: TripPosition;
  description: string;
  price: number;
};
