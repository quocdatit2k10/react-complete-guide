import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className='expenses'>
      {props.items.map((e) => {
        return (
          <>
            <ExpenseItem
              title={e.title}
              amount={e.amount}
              date={e.date}
            ></ExpenseItem>
          </>
        );
      })}
    </Card>
  );
}

export default Expenses;
