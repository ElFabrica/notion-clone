import Image from "next/image";

export function Heroes() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-75 h-75 sm:w-87.5 sm:h-87.5 md:h-100 md:w-100">
          <Image
            src={"/documents.webp"}
            fill
            className="object-contain dark:hidden"
            alt="Documents"
          />
          <Image
            src={"/documents-dark.webp"}
            fill
            className="hidden dark:block object-contain"
            alt="Documents"
          />
        </div>
        <div className="relative h-100 w-100 hidden md:block">
          <Image
            src={"/reading.webp"}
            alt="Reading"
            fill
            className="dark:hiddem object-contain"
          />
          <Image
            src={"/reading-dark.webp"}
            alt="Reading"
            fill
            className="hidden dark:block object-contain"
          />
        </div>
      </div>
    </div>
  );
}
