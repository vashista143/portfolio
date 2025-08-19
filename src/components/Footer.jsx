import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative  gap-7 border-border mt-12 pt-8 flex lg:flex-row flex-col flex-wrap lg:justify-between items-center ">
      
      <p className="text-sm text-muted-foreground text-start lg:text-center lg:ml-[35%]">
        
        &copy; {new Date().getFullYear()} Vashista. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-amber-600 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
