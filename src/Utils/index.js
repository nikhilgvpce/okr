
/**
 * 
 * @param {*} apiRes 
 * @param {*} selectedCategory 
 * @returns list and selectedCategory as reponse .
 * 
 * This function transforms the API response as per our requirement
 * by filtering according to the selectedCategory that is selected
 * from the drop down, by defualt "Company" is used as selected parameter
 */

export const filterResponse = (apiRes = [], selectedCategory = '') => {
  let response = [];
  let categories = [];
  apiRes.length > 0 && apiRes.forEach((data) => {
    const { parent_objective_id, archived, category } = data;
    if (selectedCategory === "" || category === selectedCategory) {
      if (!categories.find((cat) => cat === category)) {
        categories = [...categories, category];
      }
      if (parent_objective_id === "" || parent_objective_id.includes(")")) {
        const parent = {
          ...data,
          children: [],
        };
        response = [...response, parent];
      } else {
        let index = response.findIndex(
          (item) => item.id === parent_objective_id
        );
        if (index === -1) {
          index = response.findIndex((item) => item.id === archived);
        }
        if (index !== -1)
          response[index].children = [...response[index].children, data];
      }
    }
  });

  return {
    list: response,
    categories,
  };
};
