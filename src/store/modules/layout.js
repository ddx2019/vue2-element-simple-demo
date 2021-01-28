// sdCollapse --- 侧边栏收缩与否;  tagsList --- 标签列表数据;
const state = {
  sdCollapse: false,
  tagsList: []
};

const mutations = {
  SET_SD_COLLAPSE(state, status) {
    state.sdCollapse = status;
  },
  SET_TAG_LIST(state, data) {
    state.tagsList = data;
  }
};

export default {
  // namespaced:true,
  state,
  mutations
};
