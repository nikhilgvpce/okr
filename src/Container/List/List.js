import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ListItem from "../../Components/ListItem/ListItem";
import Modal from "../../Components/Modal/Modal";
import "./List.css";
import { connect } from "react-redux";
import { transFormResponseAction, setOkrData } from "../redux/actions";

const List = (props) => {
  const { list, categories, filterData, fetchOKrData, selectedCategory } =
    props;
  const [showModal, setModalState] = useState(false);
  const [listItem, setModalListItem] = useState("");

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
            onChange={(e) => filterData(e.target.value)}
          >
            {categories &&
              categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
          </select>
          {list &&
            list.map((data, index) => {
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

const mapStateToProps = (state) => ({
  list: state.listReducer.list,
  categories: state.listReducer.categories,
  selectedCategory: state.listReducer.selectedCategory,
});

const mapDispatchToProps = (dispatch) => {
  return {
    filterData: (selectedCategory) =>
      dispatch(transFormResponseAction(selectedCategory)),
    setOkrData: (data) => dispatch(setOkrData(data)),
  };
};

List.propTypes = {
  displayModal: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
