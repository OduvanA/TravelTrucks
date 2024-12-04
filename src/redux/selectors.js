export const selectCampers = (state) => state.campers.items;
export const selectTotal = (state) => state.campers.total;
export const selectCurrentCamper = (state) => state.campers.currentCamper;
export const selectIsEmpty = (state) => state.campers.isEmpty;

export const selectIsLoading = (state) => state.campers.isLoading;
export const selectFavorites = (state) => state.favorites.items;