import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const Dashboard = () => {

const cartItems=useSelector((state)=>state.cart);

// console.log("cart",cart)

return (
  <div>
    <h2>Cart</h2>
    <ul>
      {cartItems.map((item)=>(<li>
        <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card></li>

      ))}
    </ul>
  </div>
  // <Container>
  //     <Card style={{ width: "18rem" }}>
  //       <Card.Img variant="top" src="holder.js/100px180" />
  //       <Card.Body>
  //         <Card.Title>Card Title</Card.Title>
  //         <Card.Text>
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </Card.Text>
  //         <Button variant="primary">Go somewhere</Button>
  //       </Card.Body>
  //     </Card>
  //   </Container>
  );
};

export default Dashboard;
