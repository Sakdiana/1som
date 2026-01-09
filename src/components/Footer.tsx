import React from "react";
import BaseBtn from "./ui/BaseBtn";

export default function Footer() {
  return (
    <footer className="mt-[100px]">
      <div className="container">
        <div className="flex items-start justify-between">
          <div className="max-w-[438px] w-full">
            <div className="">
              <img src="/svg/logoBlue.svg" alt="" />
              <p className="font-medium text-[14px] mt-[16px] ">
                Даже один сом может изменить чью-то жизнь. Присоединяйтесь к
                нашей миссии помощи тем, кто в ней нуждается.
              </p>
            </div>

            <div className="mt-[32px] flex flex-col items-start gap-[8px]">
              <p className="font-medium text-[14px]  ">Контакты</p>
              <div className="flex items-center gap-[10px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.41333 7.19333C5.37333 9.08 6.92 10.62 8.80667 11.5867L10.2733 10.12C10.4533 9.94 10.72 9.88 10.9533 9.96C11.7 10.2067 12.5067 10.34 13.3333 10.34C13.7 10.34 14 10.64 14 11.0067V13.3333C14 13.7 13.7 14 13.3333 14C7.07333 14 2 8.92667 2 2.66667C2 2.3 2.3 2 2.66667 2H5C5.36667 2 5.66667 2.3 5.66667 2.66667C5.66667 3.5 5.8 4.3 6.04667 5.04667C6.12 5.28 6.06667 5.54 5.88 5.72667L4.41333 7.19333Z"
                    fill="#151515"
                  />
                </svg>

                <p className="font-medium text-[14px]  ">+996 550 19 49 39</p>
              </div>

              <div className="flex items-center gap-[10px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 3.99984C14.6667 3.2665 14.0667 2.6665 13.3333 2.6665H2.66667C1.93333 2.6665 1.33333 3.2665 1.33333 3.99984V11.9998C1.33333 12.7332 1.93333 13.3332 2.66667 13.3332H13.3333C14.0667 13.3332 14.6667 12.7332 14.6667 11.9998V3.99984ZM13.3333 3.99984L8 7.33317L2.66667 3.99984H13.3333ZM13.3333 11.9998H2.66667V5.33317L8 8.6665L13.3333 5.33317V11.9998Z"
                    fill="#151515"
                  />
                </svg>

                <p className="font-medium text-[14px]  ">info@1som.kg</p>
              </div>

              <div className="flex items-center gap-[10px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 7.66683C7.55797 7.66683 7.13405 7.49123 6.82149 7.17867C6.50893 6.86611 6.33333 6.44219 6.33333 6.00016C6.33333 5.55814 6.50893 5.13421 6.82149 4.82165C7.13405 4.50909 7.55797 4.3335 8 4.3335C8.44203 4.3335 8.86595 4.50909 9.17851 4.82165C9.49107 5.13421 9.66667 5.55814 9.66667 6.00016C9.66667 6.21903 9.62356 6.43576 9.5398 6.63797C9.45604 6.84018 9.33327 7.02391 9.17851 7.17867C9.02375 7.33344 8.84001 7.4562 8.6378 7.53996C8.4356 7.62372 8.21887 7.66683 8 7.66683ZM8 1.3335C6.76232 1.3335 5.57534 1.82516 4.70017 2.70033C3.825 3.5755 3.33333 4.76249 3.33333 6.00016C3.33333 9.50016 8 14.6668 8 14.6668C8 14.6668 12.6667 9.50016 12.6667 6.00016C12.6667 4.76249 12.175 3.5755 11.2998 2.70033C10.4247 1.82516 9.23768 1.3335 8 1.3335Z"
                    fill="#151515"
                  />
                </svg>

                <p className="font-medium text-[14px]  ">
                  г. Бишкек, Кыргызстан
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <p className="font-medium text-[16px]">Навигация</p>

            <div className="flex flex-col items-start gap-[8px] mt-[12px]">
              <p className="font-medium text-[16px]">О фонде</p>{" "}
              <p className="font-medium text-[16px]">Кому помогаем</p>{" "}
              <p className="font-medium text-[16px]">Истории помощи</p>
              <p className="font-medium text-[16px]">Отчетность</p>
            </div>
          </div>

          <div className="">
            <p className="font-medium text-[16px]">Информация</p>

            <div className="flex flex-col items-start gap-[8px] mt-[12px]">
              <p className="font-medium text-[16px]">Контакты</p>{" "}
              <p className="font-medium text-[16px]">Пожертвовать</p>{" "}
            </div>
          </div>

          <div className="">
            <p className="font-medium text-[16px] ">Quick Actions</p>

            <div className="mt-[12px] flex items-center gap-[12px]">
                <BaseBtn text="Помочь" className="text-black bg-white border border-black px-[20px] py-[12px]"/>
                <BaseBtn text="Получить помощь" className="text-white bg-black border border-black px-[20px] py-[12px]"/>

            </div>
          </div>
        </div>


        <div className="w-full  border mt-[29px] mb-[32px] "></div>

        <div className="flex items-center justify-between">
            <p className="font-medium text-[14px]">© 2025 Благотворительный фонд 1SOM.</p>
            <p className="font-medium text-[14px]">Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
