import GoodDeed from "@/components/GoodDeed";
import Help from "@/components/Help";
import OnlineServices from "@/components/OnlineServices";
import BaseBtn from "@/components/ui/BaseBtn";

export default function page() {
  return (
    <main>
      <section className="mt-[50px]">
        <OnlineServices />
      </section>


      <section className="mt-[50px]">
        <div className="">
         <Help/>
        </div>
      </section>

    
     <GoodDeed/>
    </main>
  );
}
