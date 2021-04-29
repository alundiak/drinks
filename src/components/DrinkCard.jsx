import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import img1 from '../images/drinks/pornstar-martini.jpg';

const Example = (props) => {
  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardImg top width="100%" src={img1} alt="Card image cap" className="drink-image" />
        <CardBody>
          <CardTitle>Pornstar Martini</CardTitle>
          <CardSubtitle>Vodka-based drink</CardSubtitle>
          <CardText>Maverick Martini. Recipe text texttexttex ttexttext text text.</CardText>
          <Button>Order</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;