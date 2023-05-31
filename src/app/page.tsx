import Headlines from "@/components/Headlines";
import { getQuarticles } from "@/services/quarticle";
import { DateTime } from "luxon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome - Hardcore React Training"
};

export default async function IndexPage() {
  const serverTime = DateTime.utc().toISO() as string;
  const ret = await getQuarticles(0, 10);

  return (
    <div>
      <h2>Tuoreimmat uutiset</h2>
      <Headlines serverTime={serverTime} headlines={ret.quarticles} />
    </div>
  );
}
