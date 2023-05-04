export const BASEURL =`https://anime-app-e0ea0-default-rtdb.firebaseio.com`;

export const ENDPOINTS = {
  ANIME: {
    LIST: `${BASEURL}/anime/list`,
    DESCRIPTION: (id: string): string => `${BASEURL}/anime/anime-description/${id}`,
    ADD_ANIME: `${BASEURL}/add-anime`,
    POPULAR: `${BASEURL}/anime/popular`,
    ONGOING: `${BASEURL}/anime/ongoing`,
  },
  PHOTO: {
    MAIN: (animeId: string): string => `${BASEURL}/photos/main/${animeId}`,
    ALL_NORMAL: (animeId: string): string => `${BASEURL}/photos/normal/${animeId}`
  }
};
