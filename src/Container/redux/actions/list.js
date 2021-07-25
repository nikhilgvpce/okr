/**
 * 
 * @param {*} selectedCategory 
 * @returns TRANSFORM_RESPONSE action
 */

export const filterDataAction = (selectedCategory) => {
  const payload = {
    selectedCategory,
  };
  return {
    type: "FILTER_DATA",
    payload,
  };
};

/**
 * 
 * @returns LOADING_DATA action
 */

export const loadingData = () => {
  return {
    type: "LOADING_DATA",
  };
};

/**
 * 
 * @param {data} data 
 * @returns the dispatch action that sets the fetched OKR data
 */

export const setOKRData = (data) => {
  const payload = {
    data,
    selectedCategory: "",
  };
  return {
    type: "SET_OKR_DATA",
    payload,
  };
};

/**
 * dispathces loading action.
 * Fetches the OKR data and then dispatches the setOKRData action
 */
export const fetchOKRData = () => {
  return (dispatch) => {
    const url = "https://okrcentral.github.io/sample-okrs/db.json";

    dispatch(loadingData());

    return fetch(url, { method: "GET" })
      .then((data) => data.json())
      .then((res) => dispatch(setOKRData(res.data)));
  };
};
