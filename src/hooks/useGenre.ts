import useRemoteData from "./useRemoteData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
    slug:string;
  }
  
const useGenres = ()=>useRemoteData<Genre>("/genres");


export default useGenres