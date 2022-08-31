import styles from "./Body.module.css";
import { CategoryCards, AddCategoryCards } from "../Index";
import { obj } from "../../data/data";
/**
 * 
 * @returns Cards display section
 */

const BodySection = () => {
  return (
    <div className={styles.bodyStyles}>
      {obj.map(({ id, available, title, qty, img }) =>
        available ? (
          <CategoryCards key={id} title={title} qty={qty} img={img} />
        ) : (
          <AddCategoryCards />
        )
      )}
    </div>
  );
};

export default BodySection;
