import { transformResponse } from "../../../Utils";

const initialState = {
  list: [],
  categoties: [],
  okrData: [],
  selectedCategory: null,
  isLoading: false,
};

const listReducer = (state = initialState, action) => {
  let res = null;

  switch (action.type) {
    case "TRANSFORM_RESPONSE":
      res = transformResponse(state.okrData, action.payload.selectedCategory);
      return {
        ...state,
        list: res.list,
        categories: res.categories,
        selectedCategory: action.payload.selectedCategory,
        isLoading: false,
      };
    case "SET_OKR_DATA":
      const { data } = action.payload;
      res = transformResponse(data, action.payload.selectedCategory);
      return {
        ...state,
        list: [].concat(res.list),
        categories: [].concat(res.categories),
        selectedCategory: res.categories[0],
        okrData: data,
        isLoading: false,
      };
    case "LOADING_DATA":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default listReducer;
