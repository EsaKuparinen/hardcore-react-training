import { FC } from "react";
import { DateTime } from "luxon";

import styles from "./Clock.module.css";

type Props = {
  now: DateTime;
  timezone: string;
  label: string;
};

const Clock: FC<Props> = ({ now, timezone, label }) => {
  return (
    <div className={styles.clock}>
      <div>{label}</div>
      <div>
        {now.setZone(timezone).setLocale("fi").toLocaleString({
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })}
      </div>
    </div>
  );
};

export default Clock;
