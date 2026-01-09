import BaseBtn from "../ui/BaseBtn";

export default function helpCard() {
  return (
    <div className="max-w-[312px] w-full rounded-top-[17px] ">
      <div
        style={{ backgroundImage: "url(/png/helpCard.png)" }}
        className="center no-repeat max-w-[312px] w-full h-[200px]"
      >
        <div className="p-[6px]">
          <BaseBtn
            text="Лечение"
            className="bg-none border border-[#010BFF] text-[#010BFF] px-[15px] py-[7px] text-[14px] font-normal "
          />
        </div>
      </div>

      <div className="mt-[14px] flex items-start flex-col gap-[16px]">
        <div className="">
          <h1 className="font-medium text-[24px] leading-[30px] capitalize">
            Бектур, 8 лет
          </h1>
          <p className="text-[#4B5563] text-[16px] font-medium mt-[8px] ">
            Бектур, нуждается в срочной операции на сердце. Стоимость лечения
            составляет 85,000 долларов.
          </p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center justify-between ">
            <p className="text-[#616265] text-[16px] leading-[34px] font-medium ">
              Собрано:
            </p>
            <p className="text-[#151515] font-medium text-[16px] leading-[34px] ">
              3 450 000 SOM
            </p>
          </div>

          <div className="">
            <svg
              width="312"
              height="11"
              viewBox="0 0 312 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="312" height="11" rx="5.5" fill="#F1F1FF" />
              <rect width="156.455" height="11" rx="5.5" fill="#151515" />
            </svg>
          </div>

          <div className="flex items-center justify-between ">
            <p className="text-[#616265] text-[16px] leading-[34px] font-medium ">
              Цель: 7 200 000 SOM
            </p>
            <p className="text-[#151515] font-medium text-[16px] leading-[34px] ">
              47.9%
            </p>
          </div>


        </div>

        <div className="">
           <BaseBtn text="Пожертвовать 1 сом" className="text-white bg-[#010BFF] px-[16px] py-[12px] font-medium text-[14px]"/>
        </div>

        
      </div>

      
    </div>
  );
}
