export const transformResponse = (apiRes = [], selectedCategory = '') => {
  let response = [];
  let categories = [];
  apiRes.length > 0 && apiRes.forEach((data) => {
    const { id, parent_objective_id, archived, category } = data;
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
