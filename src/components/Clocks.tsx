"use client";

import { DateTime } from "luxon";
import { FC, useEffect, useState } from "react";
import Clock from "./Clock";

type Props = {
  serverTime: string;
};

const Clocks: FC<Props> = ({ serverTime }) => {
  const [now, setNow] = useState<DateTime>(DateTime.fromISO(serverTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow((current) => current.plus({ seconds: 1 }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section>
      <Clock now={now} timezone="Europe/Helsinki" label="Helsinki" />
      <Clock now={now} timezone="America/New_York" label="New York" />
      <Clock now={now} timezone="Africa/Casablanca" label="Casablanca" />
    </section>
  );
};

export default Clocks;
