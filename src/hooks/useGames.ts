import { GameQuery } from "../App";
import useRemoteData from "./useRemoteData";

export interface Platform{
  id:number;
  name:string;
  slug:string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[]; 
    metacritic:number
  }
  
const useGames = (gameQuery: GameQuery) => 
useRemoteData<Game>('/games', 
{params:{genres:gameQuery.selectedGenre?.id, platforms:gameQuery.selectedPlatform?.id, ordering:gameQuery.orderBy}}, 
[gameQuery])
  
export default useGames