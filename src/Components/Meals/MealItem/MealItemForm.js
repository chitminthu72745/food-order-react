import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import Card from "../../UI/Card";

const MealItemForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <Input
          Label="Amount"
          input={{
            id: "number",
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
            step: "1",
          }}
        />
        <button>Add Item</button>
      </form>
    </Card>
  );
};
export default MealItemForm;
