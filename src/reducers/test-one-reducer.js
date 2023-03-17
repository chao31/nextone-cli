
// 初始化全局 Store 数据
const initData = () => ({ user: '', toolID: '', productID: '', businessID: '' });

export const tOneDataReducer = (state = initData(), { type, data }) => {
  switch (type) {
    case 'UPDATE_TONE_DATA':
      return Object.assign({}, state, data);
    default:
      return state;
  }
};
