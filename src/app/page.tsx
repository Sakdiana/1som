import Help from "@/components/Help";
import OnlineServices from "@/components/OnlineServices";
import СollectingMoney from "@/components/СollectingMoney";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="mt-[50px]">
        <OnlineServices />
      </section>

      <section  className="mt-[50px]">
        <СollectingMoney/>
      </section>

      <section className="mt-[50px]">
        <Help/>
      </section>

    </main>
  );
}
