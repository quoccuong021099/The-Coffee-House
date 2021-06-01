import React from "react";
import { Link } from "react-scroll";
class Sidebar extends React.Component {

  // 5af5602d8167f03b21ff7e1c
  render() {
    return (
      <div className="category">
        <ul className="category-fixed">
          {this.props.categories.map((category) =>
            Object.keys(category.ListProduct).length !== 0 ? ( 
              <li className="category__item" key={category._id}>
                
                { category._id === this.props.categories[0]._id ?

                <Link
                  activeClass="active"
                  to={category._id }
                  spy={true}
                  offset={-150}
                  duration={500}
                >
                  {category.name}
                </Link>
                :
                <Link
                  activeClass="active"
                  to={category._id}
                  spy={true}
                  offset={-60}
                  duration={500}
                >
                  {category.name}
                </Link>
                }
              </li>
            ) : null
          )}
        </ul>
      </div>
    );
  }
}
export default Sidebar;
