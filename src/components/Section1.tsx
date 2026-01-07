
interface Section1Props {
  text: string;
  className:any;
}


export default function Section1({ text,className }: Section1Props) {
  return (
   <section >
    <div className="flex items-center mt-[280px] pb-[50px]">
        <h1
        className={` ${className}`}>{text}</h1>
    </div>
   </section>
  )
}
