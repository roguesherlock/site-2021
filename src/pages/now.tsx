import Layout from "@/components/Layout";
import Link, { ExternalLink } from "@/components/Link";
import React from "react";

export default function Now() {
  return (
    <Layout title="What I'm doing Now" pageTitle="Now">
      <div className="flex flex-col items-center justify-center max-w-xl px-2 sm:px-0 mx-auto space-y-10 my-20 font-medium text-lg">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Onboarding a new client</h2>
          <p>
            I recently got in touch with a client who wanted me to work on a vue
            project for them. And I am just happy to work with them.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Living in Bali</h2>
          <p>
            This year I made a decision to try living a nomadic lifestyle. I
            decided to start with Bali, Indonesia. And then Pandemic happened
            and I'm stuck here. Wait, I'm happy to be stuck here. I'll write
            more about my trip to Bali soon.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Re-booting Comrade Chat</h2>
          <p>
            At the start of this year I had decided to work on this project,{" "}
            <ExternalLink href="https://comrade.chat" label="Comrade" />. It's a
            browser extension that allows people to chat on any website. It's
            like if discord & intercom had a baby.
          </p>
          <p>
            But then, life happened to me and I decided to put it on hold.
            Recently I've decided to work on that again.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">
            Reading Almanack of Naval Ravikant
          </h2>
          <p>
            I love{" "}
            <ExternalLink href="https://twitter.com/naval" label="Naval" />. And{" "}
            <ExternalLink
              href="https://www.navalmanack.com/"
              label="Almanack of Naval Ravikant"
            />{" "}
            by{" "}
            <ExternalLink
              href="https://www.ejorgenson.com/"
              label="Eric Jorgenson"
            />{" "}
            is a collection of everything naval has publicly said or written.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">
            Thinking about setting up a Coaching Business
          </h2>
          <p>
            Lot of people have told me that I help them bring clarity. So, I
            want to dabble in this. I’m thinking about building a new coaching
            business where I help people bring extreme clarity in their business
            and make them face their bullshit so they can move forward better
            with clear steps.
          </p>
          <p>
            Btw if you're interested, feel free to{" "}
            <Link href="/contact" label="email me." />
          </p>
        </section>
        <section className="space-y-3">
          <i className="font-medium mt-5">
            Updated 23rd September, 2020, from Bali, Indonesia.
          </i>
        </section>
      </div>
    </Layout>
  );
}
