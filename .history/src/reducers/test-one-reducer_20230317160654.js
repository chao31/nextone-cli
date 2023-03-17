interface StoreAction {
  type: string;
  data: TOneData;
}
// 初始化全局 Store 数据
const initData = (): TOneData => ({ user: '', toolID: '', productID: '', businessID: '' });

export const tOneDataReducer = (state = initData(), { type, data }: StoreAction) => {
  switch (type) {
    case 'UPDATE_TONE_DATA':
      return Object.assign({}, state, data);
    default:
      return state;
  }
};
