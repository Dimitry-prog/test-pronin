import { FiMoreVertical } from "react-icons/fi";
import styles from './Trigger.module.scss';

const Trigger = () => {
  return (
    <button className={styles.trigger} type='button' aria-label='trigger'>
      <FiMoreVertical className={styles.trigger__icon}/>
    </button>
  );
};

export default Trigger;