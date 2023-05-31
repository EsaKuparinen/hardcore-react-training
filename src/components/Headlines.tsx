"use client";

import { getQuarticles, QuarticleType } from "@/services/quarticle";
import { DateTime } from "luxon";
import { FC, useEffect, useState } from "react";
import Clock from "./Clock";

type Props = {
  serverTime: string;
};

const Headlines: FC<Props> = ({ serverTime }) => {
  const [headlines, setHeadlines] = useState<QuarticleType[]>([]);
  const [now, setNow] = useState<DateTime>(DateTime.fromISO(serverTime));

  useEffect(() => {
    console.log("hellurei");
  });

  useEffect(() => {
    getQuarticles(0, 10).then((ret) => {
      setHeadlines(ret.quarticles);
    });
  }, []);

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
      {headlines.map((headline) => {
        return (
          <article key={headline.id}>
            <h3>{headline.headline}</h3>
            <p>{headline.lead}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Headlines;
