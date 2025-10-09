import { cn } from "../../lib/cn";

export default function Button({ children, className }) {
  return (
    <button
      className={cn(
        "bg-[#D32F2F] text-white capitalize px-5 py-2 rounded-full transition-all duration-[200ms] hover:py-1 hover:border hover:border-[#D32F2F] hover:text-black hover:bg-white",
        className
      )}
    >
      {children}
    </button>
  );
}
