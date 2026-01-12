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

      <section className="mt-[50px]">
        <div className="container">
          <div className=""></div>
        </div>
      </section>

      <section className="mt-[90px]">
        <div className="container">
          <div className="flex items-center justify-between bg-[#F8FAFC] p-[48px] rounded-[20px]">
            <div className="max-w-[697px] w-full">
              <p className="text-[20px] font-medium ">
                Сделайте доброе дело сегодня
              </p>
              <h2 className="capitalize text-[24px] font-medium mt-[12px]">
                Ваш 1 сом — это ваш вклад в чью-то лучшую жизнь. Присоединяйтесь
                к тысячам людей, которые уже помогают.
              </h2>
            </div>

            <div className="">
              <BaseBtn
                text="Пожертвовать 1 сом"
                className="text-white text-[16px] bg-black border border-black px-[24px] py-[12px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
