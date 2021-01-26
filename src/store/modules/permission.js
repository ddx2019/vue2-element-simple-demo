const state = {
  isLoadedRoutes: false,
  sideBarLis: {}
};

const mutations = {
  SET_ISLOADEDROUTES(state, status) {
    state.isLoadedRoutes = status;
  },
  SET_SDIEBARLIST(state, lis) {
    state.sideBarLis = lis;
  }
};
export default {
  state,
  mutations
};
