interface BaseBtnProps {
  text: string;
  className?: string;
}

export default function BaseBtn({ text, className }: BaseBtnProps) {
  return (
    <button
      className={`rounded-full font-medium text-[14px] capitalize ${className}`}
    >
      {text}
    </button>
  );
}
