import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className=" absolute -top-12 left-1/2 -translate-x-1/2 z-10 bg-white text-black shadow-xl rounded-xl p-6 w-full max-w-xl ">
      <div className="relative">
        <Input
          type="email"
          placeholder="Enter email address"
          className="pr-32"
        />

        <Button className=" absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer border-4 border-solid border-amber-400 rounded-xl ">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
