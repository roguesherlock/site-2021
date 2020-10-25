import React from "react";

import Link from "@/components/Link";
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact" pageTitle="Contact">
      <div className="space-y-5 sm:py-6 flex flex-col items-center justify-center font-medium px-2 sm:px-0 text-lg">
        <p className="text-2xl">
          I love hearing from people, so please email me at{" "}
          <Link href="mailto:aakash@hey.com" label="aakash@hey.com" /> and
          introduce yourself.
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
    </Layout>
  );
}
