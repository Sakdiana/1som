"use client";

import { JSX } from "react";

type Item = {
  label: string;
  value: number;
  color: string;
};

export default function DistributionTransparency() {
  const data: Item[] = [
    {
      label: "Помощь подопечным",
      value: 3_124_213,
      color: "#111111",
    },
    {
      label: "Операционные расходы",
      value: 1_523_151,
      color: "#1E22FF",
    },
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  const percent = (value: number) => Math.round((value / total) * 100);

  return (
    <div className="container">
      <div className=" bg-[#F8FAFC] rounded-[24px] p-10">
        <div className="bg-white rounded-[20px] p-10 ">
          <div className="flex items-center gap-[10px]">
            <h3 className="text-[#0F172A] font-medium  text-[18px] leading-[28px]">
              Прозрачность Распределения
            </h3>

            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.99985 16.5C13.142 16.5 16.4998 13.1421 16.4998 9C16.4998 4.85786 13.142 1.5 8.99985 1.5C4.85771 1.5 1.49985 4.85786 1.49985 9C1.49985 13.1421 4.85771 16.5 8.99985 16.5Z"
                stroke="#D0D1D2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 6V9"
                stroke="#D0D1D2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8.99985" cy="12" r="0.75" fill="#D0D1D2" />
            </svg>
          </div>
          {/* LEFT */}

          <div className="flex items-center justify-between  gap-12">
            <div className="flex gap-10 items-center max-w-[552px] w-full">
              {/* Donut */}
              <div className="relative w-[220px] h-[220px]">
                <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90">
                  {
                    data.reduce(
                      (acc, item, index) => {
                        const valuePercent = (item.value / total) * 100;
                        const circle = (
                          <circle
                            key={item.label}
                            cx="21"
                            cy="21"
                            r="15.9"
                            fill="transparent"
                            stroke={item.color}
                            strokeWidth="6"
                            strokeDasharray={`${valuePercent} ${
                              100 - valuePercent
                            }`}
                            strokeDashoffset={acc.offset}
                          />
                        );
                        acc.offset -= valuePercent;
                        acc.circles.push(circle);
                        return acc;
                      },
                      {
                        offset: 0,
                        circles: [] as JSX.Element[],
                      }
                    ).circles
                  }
                </svg>
              </div>

              <div className="flex flex-col gap-6">
                {data.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-8 h-[3px] rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[#64748B] text-[16px]">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[#0F172A] font-semibold text-[16px] pl-11">
                      {item.value.toLocaleString("ru-RU")} users
                    </span>
                  </div>
                ))}
              </div>
            </div>

          {/* RIGHT */}
          <div className=" max-w-[463px] w-full flex flex-col justify-center gap-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[30px] font-medium leading-[46px] text-[#11263C]">
                  594
                </span>
                <span className="text-[#D0D1D2] text-[14px] font-medium leading-[22px]">Total</span>
              </div>

              <div className="mt-4 h-[14px] bg-[#F1F5F9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1E22FF] rounded-full"
                  style={{ width: `${percent(data[1].value)}%` }}
                />
              </div>
            </div>

            <div className="flex gap-10">
              {data.map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-8 h-[3px] rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[#64748B] text-[16px]">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[#0F172A] font-semibold text-[16px] pl-11">
                    {item.value.toLocaleString("ru-RU")} users
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
          </div>

    </div>
  );
}
