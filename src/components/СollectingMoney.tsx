export default function CollectingMoney() {
  const collected = 2_847_560;
  const goal = 4_200_000;

  const percent = Math.min((collected / goal) * 100, 100);

  return (
    <div className="container mx-auto px-4">
      <div className="bg-[#F8FAFC] rounded-[20px] p-8">
        <div
          style={{ boxShadow: "0px 2px 155.5px 0px #0000000D" }}
          className="rounded-[12px] p-[48px] bg-white"
        >
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-[#697586] font-medium text-[24px]">
              Собрано
            </h2>

            <h3 className="text-[#1F2A37] font-semibold text-[32px]">
              {collected.toLocaleString("ru-RU")} С
            </h3>

            <div className="w-full max-w-[900px]">
              <div className="h-[20px] bg-[#F1F5F9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1E22FF] rounded-full transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>

            <h2 className="text-[#697586] font-medium text-[24px]">
              Цель: {goal.toLocaleString("ru-RU")} С
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
