import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

function NowSection({ title, date, children }) {
  return (
    <div className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        {title && <Card.Title>{title}</Card.Title>}
        <Card.Eyebrow as="time" dateTime={date} className="md:hidden" decorate>
          {formatDate(date)}
        </Card.Eyebrow>
        <Card.Description as="div" className="">
          {children}
        </Card.Description>
      </Card>
      <Card.Eyebrow as="time" dateTime={date} className="mt-1 hidden md:block">
        {formatDate(date)}
      </Card.Eyebrow>
    </div>
  )
}

export default function Now() {
  return (
    <>
      <Head>
        <title>Now - Akash</title>
        <meta name="description" content="What I'm doing now" />
      </Head>
      <SimpleLayout
        title="What I'm doing now"
        intro="I want to use this page to share what I'm up to. In a way, you get to peek into my life a bit which I think is intimate. So, here's what I'm doing now,"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16 text-base text-zinc-600 dark:text-zinc-400">
            <NowSection date={'2022-09-18'}>
              <Card.Title className="">Reading!</Card.Title>
              <ul className="ml-4 mt-2 list-disc">
                <li>Awareness by Anthony De Mello</li>
                <li>Your Music and People by Derek Sivers</li>
                <li>The Scout Mindset by Julia Galef</li>
                <li>The Great Mental Modals Volume 2 by Shane Parrish</li>
              </ul>
              <Card.Title className="mt-7">Learning!</Card.Title>
              <ul className="ml-4 mt-2 list-disc">
                <li>Learning to draw via learnbox</li>
                <li>Dwelling deeper into typescript and react ecosystem</li>
                <li>Practical deep learning by fast.ai</li>
              </ul>
            </NowSection>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
