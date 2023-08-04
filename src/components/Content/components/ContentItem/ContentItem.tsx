import { IconType } from "react-icons";
import styles from './ContentItem.module.scss';

type ContentItemProps = {
  id: number;
  label: string;
  icon: IconType;
  onClick: () => void
}

const ContentItem = ({ label, icon: Icon, onClick }: ContentItemProps) => {
  return (
    <li className={styles.item} onClick={onClick}>
      <p>{label}</p>
      <Icon/>
    </li>
  );
};

export default ContentItem;