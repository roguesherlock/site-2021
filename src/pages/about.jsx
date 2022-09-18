import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
/* import portraitImage from '@/images/portrait.png' */
import portraitImage from '@/images/portrait.jpg'
import { Prose } from '@/components/Prose'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function Characteristic({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href} className="text-lg">
        {title}
      </Card.Title>
      <Card.Description as="div" className="text-base">
        {children}
      </Card.Description>
    </Card>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Akash</title>
        <meta
          name="description"
          content="I’m Akash, Your friendly neighbourhood sherlock."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm Akash, your friendly neighbourhood life hacker.
              {/* I'm Akash. I live on internet, where I am infinitely curious about */}
              {/* the world. */}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Here I am, slurped on a couch, pondering about writing an essay
                about myself. I'm very conscious about the words I choose
                because I'm very dithering about the usefulness of this essay to
                you. You know, I'm just going to pretend that you don't exist
                and write whatever comes to my mind.
              </p>
              <Characteristic title="I'm Ambitiously Focused on Creating">
                <p>
                  I love to make stuff. I want to make essays, books, websites,
                  podcasts, companies, systems, apps, relationships, and
                  especially new Ideas.
                </p>
                <p>
                  And this is the driving force for all the decisions I make in
                  my life. I also want to learn lots of stuff.
                </p>
                <p>
                  I want to stretch, strive and grow. I easily connect with
                  people who think the same.
                </p>
              </Characteristic>
              <Characteristic title="I'm trying to be an Experimentalist">
                <p>
                  I've learnt that the brain is remarkably responsive to
                  experience. If I ask it to exercise every day, it gets better
                  at exercising. If If I ask it to worry, it gets better at
                  worrying. If I ask it to concentrate, it gets better at
                  concentrating. Not only does it find these things easier, but
                  it actually remodels itself based on what I ask it to do!
                </p>

                <p>
                  And so I'm trying to experiment with different approaches to
                  thinking and living.
                </p>
              </Characteristic>
              <Characteristic title="I'm naive">
                <ul className="ml-4 list-disc space-y-1">
                  <li>18 Me: 16 me was so naive. I’m wiser.</li>
                  <li>20 Me: 18 me was so naive lol. I’m wiser.</li>
                  <li>22 Me: 20 me was so naive lol. I’m wiser</li>
                  <li>24 Me: 23 me was so naive.... wait. I’m still naive!</li>
                </ul>
                <p>
                  It’s so easier to think that we were in the dark yesterday but
                  we are in the light today One thing I’m learning is to learn
                  that I don’t know.
                </p>
              </Characteristic>
              <Characteristic title="I try to live in Present">
                <p>
                  The present moment, no matter how painful, is never
                  unbearable. What is unbearable is what I think is going to
                  happen in five hours or in five days. This ability to see into
                  the future is a double edged sword. So I try not to be anxious
                  about tomorrow, tomorrow will look after itself!
                </p>

                <p>
                  More importantly, If I respond to “what ifs” I'll get in
                  trouble. So I need to wait some time, let it settle, and then
                  listen very carefully to myself.
                </p>
              </Characteristic>
              <Characteristic title="I love startups">
                <p>
                  I honestly don't know how to explain this (maybe it's my
                  karmic purpose?!). But when I look at my life and ask myself
                  what I want to do with life, the only answer comes to me is
                  that I have to build a business.
                </p>

                <p>
                  And it's not even to get rich. I mean there are far better and
                  predictable ways to get comfortably rich.
                </p>

                <p>
                  I think there are reasons I don’t fully understand, and like a
                  runner at the 30th km, often question why I subjected myself
                  to such euphoric misery that is a startup.
                </p>
              </Characteristic>
              <Characteristic title="I love helping people">
                <p>
                  Whatever I want in life, I’ve found that the best way to get
                  it is to focus my energy on giving to others. If I want to
                  boost my confidence, I look for ways to help someone else feel
                  more confident. If I want to feel more hopeful, positive, and
                  inspired, I try to infuse that in someone else’s day. If I
                  want more success for myself, the fastest way to get it is to
                  go about helping someone else obtain it.
                </p>
              </Characteristic>
              <Characteristic title="I like to do what I love">
                <ul className="ml-4 list-disc space-y-1">
                  <li>The money may follow and please me.</li>
                  <li>
                    The money may follow but pleases me less than I expected.
                  </li>
                  <li>The money may follow but pleases me briefly.</li>
                  <li>
                    The money might not follow, which might disappoint me.
                  </li>
                  <li>
                    But if I'm doing what I love, I will have loved what I've
                    been doing. That will satisfy me so deeply that the result
                    must either be called success or recognized as something
                    even more enriching.
                  </li>
                </ul>
              </Characteristic>
              <Characteristic title="I'm learning to embrace failure">
                <p>
                  Growing up, I had always been told that I'm a smart kid. So
                  I'd developed this identity that I’m a smart kid. And I would
                  do things that would reinforce that identity, and stay away
                  from things that would contrast that identity.
                </p>
                <p>
                  It made it really hard for me to do anything where other
                  people could see how incompetent I am. So I would run away
                  from all sort of experiences that would make me feel kinda
                  silly or incompetent. And that actually paralyzed me because
                  for most things in life, you’ll suck in the beginning.
                </p>
                <p>
                  Eventually, I learned that the world actually rewards
                  experience and competence. So, I am learning to reframe my
                  thinking from smart / stupid to experienced / inexperienced.
                  And the More I can realize that my success has nothing to do
                  with intelligence, rather with the experience / inexperience
                  and the degree of competence I have, the better off I’m going
                  to be. The more I realize that, the more naturally I’d want to
                  try things and be okay failing at those things.
                </p>
              </Characteristic>
              <Characteristic title="I don't take myself so seriously">
                <p>
                  I believe happiness is really a default state. Happiness is
                  there when you remove the sense of something missing in your
                  life.
                </p>
              </Characteristic>
              <Characteristic title="More?">
                <p>Here's what I've learnt about myself in the last year!</p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>
                    My mind always jumps to blame me because my sense of value
                    is low. I.e. I always put myself under the bus.
                  </li>
                  <li>
                    I try to be perfect because I’m very insecure about myself.
                  </li>
                  <li>I really bully the shit out of me.</li>
                  <li>
                    That all this self loathing is a form of narcissism. And,
                    honestly I feel like narcissism is a form of protective
                    mechanism of your brain.
                  </li>
                  <li>
                    That I need to start by finding out this hurt that has
                    caused all these issues (the body keeps the score!). I’ve
                    got to swim in that hurt.
                  </li>
                  <li>
                    What If I don't really have an ugly in me? What if it's just
                    a feeling?
                  </li>
                  <li>
                    Imagine your thoughts like water, the harder you push
                    against, the harder it pushes back. Acceptance is laying
                    back in beginning!
                  </li>
                  <li>
                    That I need to show myself to other people; When I show
                    myself to other people, I can’t help but accept myself in
                    the process!
                  </li>
                  <li>That I’ve got to be in Akash’s Team!</li>
                  <li>
                    And Lastly, that it’s going to be a journey and I’m going to
                    be okay!
                  </li>
                </ul>
              </Characteristic>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/roguesherlock"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/roguesherlock"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/akashpomal"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:yo@aakash.xyz"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                yo@aaakash.xyz
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
