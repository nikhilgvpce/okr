import React, { useState } from "react";
import PropTypes from "prop-types";
import ListItem from "../../Components/ListItem/ListItem";
import Modal from "../../Components/Modal/Modal";
import "./List.css";
import { connect } from "react-redux";
import { filterDataAction } from "../redux/actions";

/**
 *
 * Responsible to pass each OKR to ListItem component
 * and display Modal with child OKR details when a child OKR is clicked.
 */
const List = (props) => {
  const { list, categories, filterData, selectedCategory } = props;
  const [showModal, setModalState] = useState(false);
  const [listItem, setModalListItem] = useState("");

  /***
   * opens Modal and sets the selected chidl OKR
   */
  const listItemHandler = (itemProps) => {
    const { isModalOpen, item } = itemProps;
    setModalState(isModalOpen);
    setModalListItem(item);
  };

  /**
   * if showModal is true renders Modal
   * else renders select drop down which is used to filter category
   * and delegates each Parent and child OKRs based on catergory to ListItem component.
   * The selected category is Company by default.
   */

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
      dispatch(filterDataAction(selectedCategory)),
  };
};

List.propTypes = {
  displayModal: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
