import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

const ListItem = (props) => {
  const { item, index, onClickListItem } = props;
  const { title, children } = item;
  return (
    <details className="list-item" open>
      <summary>
        <div className="title">
          {index}. {title}
        </div>
      </summary>
      <ol type="a">
        {children.map((child) => {
          return (
            <>
              <li
                onClick={() =>
                  onClickListItem({ isModalOpen: true, item: child })
                }
              >
                {child.title}
              </li>
            </>
          );
        })}
      </ol>
    </details>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  children: PropTypes.array,
  onClickListItem: PropTypes.func,
};

export default ListItem;
