import DropdownMenu from "./components/DropdownMenu/DropdownMenu.tsx";
import styles from './App.module.scss';
import Trigger from "./components/Trigger/Trigger.tsx";
import Content from "./components/Content/Content.tsx";
import { items } from "./utils/contants.ts";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <DropdownMenu
          trigger={<Trigger/>}
          content={
            <Content
              items={items}
            />
          }
        />
        <DropdownMenu
          trigger={<Trigger/>}
          content={
            <Content
              items={items}
            />
          }
        />
      </div>
      <div className={styles.container__body}/>
      <div className={styles.wrapper}>
        <DropdownMenu
          trigger={<Trigger/>}
          content={
            <Content
              items={items}
            />
          }
        />
        <DropdownMenu
          trigger={<Trigger/>}
          content={
            <Content
              items={items}
            />
          }
        />
      </div>
    </div>
  )
}

export default App
