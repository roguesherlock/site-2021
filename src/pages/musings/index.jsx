import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllMusings } from '@/lib/getAllMusings'
import { formatDate } from '@/lib/formatDate'

function Musing({ musing }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/musings/${musing.slug}`}>{musing.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={musing.date}
          className="md:hidden"
          decorate
        >
          {formatDate(musing.date)}
        </Card.Eyebrow>
        <Card.Description>{musing.description}</Card.Description>
        <Card.Cta>Read musing</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={musing.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(musing.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function MusingsIndex({ musings }) {
  return (
    <>
      <Head>
        <title>Musings - Akash</title>
        <meta
          name="description"
          content="This is how I learn about the world and myself. I write about things I'm learning, things I'm doing, things I'm thinking about, and things I'm reading."
        />
      </Head>
      <SimpleLayout
        title="Musings"
        intro="This is how I learn about the world and myself. I write about things I'm learning, things I'm doing, things I'm thinking about, and things I'm reading."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {musings.map((musing) => (
              <Musing key={musing.slug} musing={musing} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      musings: (await getAllMusings()).map(({ component, ...meta }) => meta),
    },
  }
}
