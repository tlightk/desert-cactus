import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";
import { Button, Row, Col } from "react-bootstrap";

export default () => {
  // hook used to get dispatch needed from services
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesReducer.expenses);

  useEffect(() => {
    // empty array to call once
    GetExpenses(dispatch);
  }, []);

  return expenses.map((e) => (
    <div style={{ marginBottom: "1rem" }}>
      <ListRow expense={e} />
    </div>
  ));
};

const ListRow = ({ expense }) => {
  return (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>{expense.amount}</Col>
        <Col><Button style={{ float: "right" }} variant="warning">Edit</Button></Col>
      </Row>
      <hr />
    </div>
  );
};
