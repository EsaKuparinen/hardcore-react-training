import { FC } from "react";
import { DateTime } from "luxon";

type Props = {
  now: DateTime;
  timezone: string;
  label: string;
};

const Clock: FC<Props> = ({ now, timezone, label }) => {
  return (
    <div>
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
