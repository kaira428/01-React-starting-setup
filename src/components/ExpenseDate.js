import "./ExpenseDate.css";

function ExpenseDate(props) {
  // const month = props.date.toLocaleDateString("en-GB", { month: "long" });
  // const year = props.date.toLocaleDateString("en-GB", { year: "numeric" });
  // const day = props.date.toLocaleDateString("en-GB", { day: "2-digit" });

  const day = props.date.getDate();
  const month = props.date.toLocaleString('en-us', { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
