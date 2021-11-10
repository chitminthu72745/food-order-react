import { Fragment } from "react/cjs/react.production.min";
import AvailiableMeal from "./AvailiableMeal";
import MealsSummary from "./MealSummary";
const Meal = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailiableMeal />
    </Fragment>
  );
};
export default Meal;
