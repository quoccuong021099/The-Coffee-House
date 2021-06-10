import React from "react";
class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 1,
    };
  }

  activeCategory = (id) => {
    this.setState({
      active: id,
    });
  };

  render() {
    const { active } = this.state;
    return (
      <div className="category">
        <ul className="category-fixed">
          {this.props.categories.map((category) =>
            category.ListProduct.length !== 0 ? (
              <li
                className={
                  active === category.id
                    ? "category__item active-category"
                    : "category__item "
                }
                key={category._id}
                onClick={() => this.activeCategory(category.id)}
              >
                <a className="category__item-link" href={`#${category._id}`}>
                  {category.name}
                </a>
              </li>
            ) : null
          )}
        </ul>
      </div>
    );
  }
}
export default Sidebar;
