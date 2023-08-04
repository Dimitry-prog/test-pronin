import styles from './Content.module.scss';
import ContentItem from "./components/ContentItem/ContentItem.tsx";
import { ItemType } from "../../types";

export type ContentProps = {
  items: ItemType[];
  onItemClick?: (id: number) => void;
}

const Content = ({
                   items, onItemClick = () => {
  }
                 }: ContentProps) => {

  return (
    <ul className={styles.list}>
      {items.map(item => (
        <ContentItem key={item.id} {...item} onClick={() => onItemClick(item.id)}/>
      ))}
    </ul>
  );
};

export default Content;