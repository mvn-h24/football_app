export interface Player {
  id: number;
  name: string;
  position: string;
  shirtNumber: number;
}
export interface PlayerDetail extends Player {
  dateOfBirth: Date;
  countryOfBirth: string;
  nationality: string;
  role: string;
}
