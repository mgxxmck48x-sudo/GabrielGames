
export type Category = 'Action' | 'Puzzle' | 'Sports' | 'Arcade' | 'Strategy' | 'Retro';

export interface Game {
  id: string;
  title: string;
  description: string;
  category: Category;
  thumbnail: string;
  iframeUrl: string;
  isClean?: boolean;
}

export interface SiteStats {
  totalGames: number;
  categories: number;
  usersOnline: number;
}
