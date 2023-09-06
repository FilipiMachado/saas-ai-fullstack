import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Button className="md:hidden" variant="ghost" size="icon">
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
