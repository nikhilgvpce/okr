import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";
import Modal from "../Modal/Modal";
import "./List.css";

const List = (props) => {
  const { list } = props;
  const [showModal, setModalState] = useState(false);
  const [listItem, setModalListItem] = useState("");
  const [okrData, setOkrData] = useState([]);
  const [transformedData, setTransformedData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const transformData = (apiRes) => {
    const newData = [];
    const categoties = [];
    apiRes.forEach((data) => {
      const { id, parent_objective_id, archived, category } = data;
      if (selectedCategory === '' || category === selectedCategory) {
        if (!categories.find((cat) => cat === category)) {
          categories.push(category);
        }
        if (parent_objective_id === "" || parent_objective_id.includes(")")) {
          const parent = {
            ...data,
            children: [],
          };
          newData.push(parent);
        } else {
          let index = newData.findIndex(
            (item) => item.id === parent_objective_id
          );
          if (index === -1) {
            index = newData.findIndex((item) => item.id === archived);
          }
          if (index === -1) {
          }
          index !== -1 && newData[index].children.push(data);
        }
      }
    });
    console.log({ newData }, { categories });
    setCategories(categories);
    setTransformedData(newData);
  };

  useEffect(() => {
    setOkrData(list);
    // setTransformedData(() => transformData(list));
    transformData(list, selectedCategory);
  }, [list, selectedCategory]);

  const listItemHandler = (prop) => {
    const { isModalOpen, item } = prop;
    setModalState(isModalOpen);
    setModalListItem(item);
  };

  return (
    <>
      {showModal ? (
        <Modal listItem={listItem} closeModal={() => setModalState(false)} />
      ) : (
        <div className="content">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
          {transformedData.length > 0 &&
            transformedData.map((data, index) => {
              return (
                <ListItem
                  index={index + 1}
                  item={data}
                  onClickListItem={listItemHandler}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

List.propTypes = {
  displayModal: PropTypes.bool,
};

export default List;
