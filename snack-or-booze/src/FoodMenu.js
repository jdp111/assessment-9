import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ items, title }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Select an option to see ingredients and more information about a product
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${title.toLowerCase()}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
      <div className="row justify-content-center" >
        <NavLink exact to={`/${title.toLowerCase()}/new`}>
          <button className="btn btn-primary"> Add new {title}!</button>
        </NavLink>
      </div>
    </section>
  );
}

export default FoodMenu;
