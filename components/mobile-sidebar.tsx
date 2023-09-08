"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

const MobileSidebar = () => {
  return (
    <Button className="md:hidden" variant="ghost" size="icon">
      <Menu />
    </Button>
  );
};

export default MobileSidebar;
