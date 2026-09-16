import { Lottie } from "lottie-react";

export default function CodingLottie({ className = "" }: { className?: string }) {
  return (
    <Lottie
      src="/lottie/coding.json"
      autoplay
      loop
      className={className}
      aria-label="Illustration of a developer coding"
    />
  );
}
