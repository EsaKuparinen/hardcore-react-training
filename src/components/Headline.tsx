import { QuarticleType } from "@/services/quarticle";
import Link from "next/link";
import { FC, memo } from "react";

export type HeadlineType = Pick<QuarticleType, "id" | "headline" | "lead">;

type Props = {
  headline: HeadlineType;
  // lead: QuarticleType["lead"];
};

const Headline: FC<Props> = ({ headline }) => {
  return (
    <article>
      <h3>
        <Link href={`/q/${headline.id}`}>{headline.headline}</Link>
      </h3>
      <p>{headline.lead}</p>
    </article>
  );
};

export default memo(Headline);
