export interface ScoreStat {
  homeTeam: number;
  awayTeam: number;
}

export interface Score {
  winner: string;
  duration: string;
  fullTime: ScoreStat;
  halfTime: ScoreStat;
  extraTime: ScoreStat;
  penalties: ScoreStat;
}
