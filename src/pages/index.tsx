import React, { useState } from "react";
import Link from "@/components/Link";
import ArrowDown from "@/components/ArrowDown";
import Subscribe from "@/components/Subscribe";
import TypingAnimation from "@/components/TypingAnimation";

export default function HomePage() {
  const [height, setHeight] = useState("100vh");
  const words = [
    "Digital Product Designer",
    "Front End Developer",
    "UX Designer",
    "Lifelong Learner",
    "Ambitiously Focused On Creating",
    "Writer",
    "Critical Thinker",
    "Problem Solver",
    "Experimentalist",
  ];
  React.useEffect(() => {
    setHeight(`${window.document.body.clientHeight}`);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div
        style={{ minHeight: height }}
        className="flex flex-col items-center justify-center flex-shrink-0 flex-1 bg-red-500"
      >
        <h1 className="mt-auto text-4xl text-center font-semibold tracking-wide ">
          Hey There 👋
        </h1>
        <p className="text-xl font-medium tracking-wide leading-loose">
          I'm Akash
        </p>
        <TypingAnimation words={words} />
        <div className="mt-auto">
          <ArrowDown />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="mt-12 max-w-3xl px-8 sm:px-0 text-lg sm:text-xl text-justify leading-loose font-medium tracking-wide ">
          Now this is the part where I give you a brief overview about me and
          then you judge me based on how it made you feel in the moment and also
          based on what is going in your life right now (like whether you had
          coffee today or not, if you had a fight with your gf right before you
          stumbled upon this site or not, etc). So obviously I'm not playing
          that game. Rather, let's play another game.
        </h1>
        <h1 className="mt-10 font-display text-3xl sm:text-4xl text-center tracking-wide">
          Me in 10 Seconds?
        </h1>
        <p className="font-medium tracking-wider leading-loose text-justify max-w-md px-8 sm:px-0">
          I’m a software developer turned life hacker and experimentalist. I am
          fascinated by human behaviour biology, philosophy, science, technology
          and startups. I love to think deeply about topics and write!
        </p>
        <h1 className="mt-10 font-display text-3xl sm:text-4xl text-center tracking-wide">
          Me in 10 Minutes?
        </h1>
        <p className="font-medium">
          See <Link href="/about" label='my "about" page' />
        </p>
        <h1 className="mt-10 font-display text-3xl sm:text-4xl text-center tracking-wide">
          What am I doing now?
        </h1>
        <p className="font-medium">
          See <Link href="/now" label='my "now" page' />
        </p>
        <h1 className="mt-10 font-display text-3xl sm:text-4xl text-center tracking-wide">
          Contact Me?
        </h1>
        <p className="font-medium">
          See <Link href="/contact" label="why you should" />
        </p>
        <div className="mt-10">
          <ArrowDown />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Subscribe />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const configData = await import("../../siteconfig");

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
