export interface Odds {
  msg: string;
}

export interface Score {
  winner?: any;
  duration: string;
  fullTime: FullTime;
  halfTime: FullTime;
}

export interface FullTime {
  home?: any;
  away?: any;
}

export interface MatchResultSet {
  count: number;
  competitions: string;
  first: string;
  last: string;
  played: number;
}
