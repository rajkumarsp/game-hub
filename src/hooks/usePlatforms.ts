import { Platform } from "./useGames";
import useRemoteData from "./useRemoteData";
  
const usePlatforms = ()=> useRemoteData<Platform>('/platforms/lists/parents')
  
export default usePlatforms