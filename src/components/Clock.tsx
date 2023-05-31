import { FC } from "react";
import { DateTime } from "luxon";

import styles from "./Clock.module.css";

import cx from "clsx";

// NOTE: styled components do not work with SSR :(
// import styled from "styled-components";

// const ClockContainer = styled.div`
//   border-radius: 10px;
// `;

// const ClockContainer = styled.div({
//   borderRadius: "10px",
//   border: "1px solid rgb(0 0 0)"
// });

type Props = {
  now: DateTime;
  timezone: string;
  label: string;
};

const Clock: FC<Props> = ({ now, timezone, label }) => {
  const localTime = now.setZone(timezone);

  const classes = cx(styles.clock, {
    [styles.nightTime]: localTime.hour > 0 && localTime.hour < 8
  });

  return (
    <div className={classes}>
      <div>{label}</div>
      <div>
        {localTime.setLocale("fi").toLocaleString({
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })}
      </div>
    </div>
  );
};

export default Clock;
