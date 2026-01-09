import React from "react";
import BaseBtn from "./ui/BaseBtn";

export default function About() {
  return (
    <div className="container">
      <div className="flex items-start justify-between">
        <div className="">
          <h2 className="font-medium text-[48px] leading-[62px] capitalize">
            О нас
          </h2>
        </div>

        <div className="max-w-[649px] w-full">
          <p className="text-[#4B5563] text-[16px] leading-[27px] capitalize">
            Благотворительный фонд «Надежды» был создан в 2018 году с целью
            помочь детям из малообеспеченных и неблагополучных семей получить
            доступ к качественному образованию, медицинской помощи и достойному
            будущему. За 7 лет работы мы помогли более чем 200 семьям. Наша
            команда состоит из профессионалов, которые искренне верят в то, что
            каждый ребёнок заслуживает шанс на счастливое детство. Мы работаем
            абсолютно прозрачно: публикуем все финансовые отчёты, документы и
            истории наших подопечных. Каждое пожертвование идёт напрямую на
            помощь детям – без посредников и скрытых комиссий.
          </p>

          <BaseBtn
            text="связаться с нами"
            className="bg-black text-white mt-[20px] px-[24px] py-[12px]"
          />
        </div>
      </div>
    </div>
  );
}
