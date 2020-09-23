import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-medium max-w-xl mx-auto px-2 sm:px-0 tracking-wide text-lg">
      <p className="text-2xl">
        I love hearing from people, so please email me at{" "}
        <a
          href="mailto:aakash@hey.com"
          className="border-b-2 font-semibold tracking-wide leading-loose hover:bg-secondary hover:text-primary transition ease-in-out duration-150"
        >
          aakash@hey.com
        </a>{" "}
        and introduce yourself.
      </p>
      <p className="text-xl tracking-wide mt-12">Why?</p>
      <ul className="mt-5 text-lg space-y-3">
        <li>I love getting to know people around the world.</li>
        <li>
          I love helping people and a lot of people have told me I'm very good
          at critical thinking.
        </li>
        <li>I reply to all.</li>
      </ul>
    </div>
  );
}
