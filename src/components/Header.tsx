"use client";
import BaseBtn from "./ui/BaseBtn";
import Section1 from "./Section1";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
    
  const pathname = usePathname();

  const menuItems = [
    { name: "Главная", href: "/" },
    { name: "О фонде", href: "/about" },
    { name: "Кому помогаем", href: "/help" },
    { name: "Отчеты", href: "/reports" },
    { name: "Контакты", href: "/contacts" },
  ];

  const headerData: any  = {
    "/": {
      bg: "/png/bg1.png",
      text: "Ваша помощь вернёт им жизнь",
      className:'font-bold text-[128px]  text-start text-white leading-[102px] max-w-[1032px] w-full',
    },
    "/about": {
      bg: "/png/bg2.png",
      text: "О фонде 1SOM",
      className:'font-medium text-[124.87px]  text-start text-white leading-[106.14px] max-w-[542px] w-full',

    },
    "/help": {
      bg: "/png/bg1.png",
      text: "Кому мы помогаем?",
      className:'font-bold text-[124.88px]  text-start text-white leading-[106.1px] max-w-[1009px] w-full',

    },
    "/reports": {
      bg: "/png/bg4.png",
      text: "Наши отчёты и достижения",
      className:'font-bold text-[124.88px]  text-start text-white leading-[106.1px] max-w-[1220px] w-full',

    },
    "/contacts": {
      bg: "/png/bg1.png",
      text: "Свяжитесь с нами",
      className:'font-bold text-[128px]  text-start text-white leading-[102px] max-w-[1032px] w-full',

    },
  };

    const { bg, text,className } = headerData[pathname] || headerData["/"];
  return (
    <header
      className=" max-h-[730px] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `
      linear-gradient(180deg, rgba(0, 0, 0, 0) 49.07%, rgba(0, 0, 0, 0.4) 79.39%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 11.8%, rgba(0, 0, 0, 0) 18.58%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url("${bg}")
    `,
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="header__items flex items-center justify-between py-[21px]">
          <Link href="/">
              <img src="/svg/logo.svg" alt="Логотип 1som" />
            </Link>

          <nav className="flex items-center gap-[32px]">
           {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <p
                  className={`font-medium text-[14px] capitalize ${
                    pathname === item.href ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-300 transition-colors duration-300`}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-[12px]">
            <BaseBtn
              text="Помочь"
              className="bg-white text-black px-[20px] py-[12px]"
            />
            <BaseBtn
              text="Получить помощь"
              className="bg-black text-white px-[20px] py-[12px]"
            />
          </div>
        </div>
      </div>

      <div className="container ">
        <Section1 text={text} className={className}/>
      </div>
    </header>
  );
}
