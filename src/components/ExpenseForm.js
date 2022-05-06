import { React, useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default () => {
  const descriptions = ["Groceries", "Credit Card", "Gas", "Rent"];
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState();
  const [isNewExpense, setIsNewExpense] = useState(true);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          // create a new expense
        } else {
          // edit an expense
        }
      }}
    >
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => setDescription(event.target.value)}
          >
            {descriptions.map((d) => (
              <option>{d}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </Col>
        <div style={{ marginTop: "auto" }}>
          {isNewExpense ? (
            <Button variant="primary" type="submit" style={{ float: "right" }}>
              Add
            </Button>
          ) : (
            <div>
              <Button variant="danger" type="submit">
                Delete
              </Button>
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="default" type="submit">
                Cancel
              </Button>
            </div>
          )}
        </div>
      </Row>
    </Form>
  );
};
