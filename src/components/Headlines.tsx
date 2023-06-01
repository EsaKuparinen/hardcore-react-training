import { QuarticleType } from "@/services/quarticle";
import { FC } from "react";
import Clocks from "./Clocks";
import Headline from "./Headline";

type Props = {
  serverTime: string;
  headlines: QuarticleType[];
};

const Headlines: FC<Props> = ({ serverTime, headlines }) => {
  // const [headlines, setHeadlines] = useState<QuarticleType[]>([]);

  // useEffect(() => {
  //   console.log("hellurei");
  // });

  // useEffect(() => {
  //   getQuarticles(0, 10).then((ret) => {
  //     setHeadlines(ret.quarticles);
  //   });
  // }, []);

  return (
    <section>
      <Clocks serverTime={serverTime} />
      {headlines.map((headline) => {
        return <Headline key={headline.id} headline={headline} />;
      })}
    </section>
  );
};

export default Headlines;
