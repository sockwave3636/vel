import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        this is the screen for authenticatd user only
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
