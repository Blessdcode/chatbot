import styles from "../styles";

import { FaRobot } from "react-icons/fa6";
import Sidebar from "./sidebar";

const Navigation = () => {
  return (
    <div className={`${styles.flexBetween}`}>
      <div className="px-4">
        <div className={`${styles.flexBetween}`}>
          <FaRobot size={48} />
          <h1 className={`${styles.heading3}`}>Chat Bot</h1>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Navigation;
