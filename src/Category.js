import React from "react";

class Category extends React.Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/category/web")
      .then((response) => response.json())
      .then((categoryList) => {
        this.setState({ categories: categoryList });
      });
  }
  render() {
    return (
      <div className="category">
        <ul className="category-fixed">
          {this.state.categories.map((category) => (
            <li className="category__item" key={category.id}>
              <a href="#">{category.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
