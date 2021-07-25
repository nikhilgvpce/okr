import { filterResponse } from "../../../Utils";

const initialState = {
  list: [],
  categoties: [],
  okrData: [],
  selectedCategory: null,
  isLoading: false,
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns state object that is updated with respective action and provided payload
 */

const listReducer = (state = initialState, action) => {
  let res = null;

  switch (action.type) {
    case "FILTER_DATA":
      res = filterResponse(state.okrData, action.payload.selectedCategory);
      return {
        ...state,
        list: res.list,
        categories: state.categories || res.categories,
        selectedCategory: action.payload.selectedCategory,
        isLoading: false,
      };
    case "SET_OKR_DATA":
      const { data } = action.payload;
      res = filterResponse(data, action.payload.selectedCategory);
      return {
        ...state,
        list: [].concat(res.list),
        categories: [].concat(res.categories),
        selectedCategory: res.categories[0], // setting first item in category as selectedCatergory by default
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
