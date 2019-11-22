interface IAircraftApi{
  manufacturer: string;
  model: string;
  dimensions: object;
  empty_weight: number,
  fuel_capacity: number;
  pass_capacity: number;
  techo: number;
  image: string;
  logo: string;
}

export {IAircraftApi};
