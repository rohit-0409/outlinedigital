import Image from "next/image";
import { sitePath } from "@/config/agency";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "wordmark-icon" }: BrandMarkProps) {
  return (
    <Image
      className={className}
      src={sitePath("/images/outline-mark.png")}
      alt=""
      aria-hidden="true"
      width={128}
      height={128}
    />
  );
}
