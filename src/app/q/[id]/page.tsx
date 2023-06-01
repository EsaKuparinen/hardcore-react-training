import { Metadata } from "next";
import { notFound } from "next/navigation";
import * as quarticleService from "@/services/quarticle";
import { cache } from "react";
import Qomments from "@/components/qomments/Qomments";

type Props = {
  params: {
    id: string;
  };
};

// Nextin määritys cachen revalidate ajaksi
export const revalidate = 60;

// Tällä cachetetaan funktion tulos
const getQuarticle = cache(async (id: string) => {
  try {
    const quarticle = await quarticleService.getQuarticle(id);
    return quarticle;
  } catch (e) {
    notFound();
  }
});

// Nextin mustaa magiaa
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const quarticle = await getQuarticle(params.id);
  return {
    title: quarticle.headline
  };
}

export default async function QuarticlePage(props: Props) {
  const quarticle = await getQuarticle(props.params.id);
  return (
    <div>
      <Qomments quarticleId={quarticle.id} />

      <h3>{quarticle.headline}</h3>
      <p>{quarticle.lead}</p>
      <img
        src={quarticle.mainImage}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p>{JSON.stringify(quarticle.content)}</p>
    </div>
  );
}
