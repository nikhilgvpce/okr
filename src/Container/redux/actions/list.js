export const transFormResponseAction = (selectedCategory = "") => {
  const payload = {
    selectedCategory,
  };
  return {
    type: "TRANSFORM_RESPONSE",
    payload,
  };
};

export const loadingData = () => {
  return {
    type: "LOADING_DATA",
  };
};

export const setOkrData = (data) => {
  const payload = {
    data,
    selectedCategory: "",
  };
  return {
    type: "SET_OKR_DATA",
    payload,
  };
};

export const fetchOKrData = () => {
  return (dispatch) => {
    const url = "https://okrcentral.github.io/sample-okrs/db.json";

    dispatch(loadingData());

    return fetch(url, { method: "GET" })
      .then((data) => data.json())
      .then((res) => dispatch(setOkrData(res.data)));
  };
};
