import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Akash</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1 Pro, 32GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations. This device just dissapears and lets me focus on the work.
            </Tool>
            <Tool title="Roost stand">
							I've not been able to find a good display that complements my current computer setup, so I just use it straight on my desk. I've been using the Roost stand for a few years now and it's been great. It's sturdy, has a nice rubberized surface, and is easy to adjust.
            </Tool>
            <Tool title="Magic keyboard">
							It's just a boring keyboard. But that's the beauty of it. It just works and I don't have to think about it.
            </Tool>
            <Tool title="Logitech MX master">
							I've not found any other ergonomic mouse that I like as much as this one. It's a little pricey, but it's worth it.
            </Tool>
       {/*      <Tool title="Airpods Max"> */}
							{/* Goddamn love these pairs! */}
       {/*      </Tool> */}
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Neovim">
							I just could never get rid of the vim keybindings. I've tried VSCode, Sublime, Atom, and a bunch of other editors, but I always come back to Neovim. I've been using it for years now and I'm still learning new things about it.
            </Tool>
            <Tool title="iTerm2">
							Terminal? iTerm2.
            </Tool>
            {/* <Tool title="TablePlus"> */}
            {/*   Great software for working with databases. Has saved me from */}
            {/*   building about a thousand admin interfaces for my various projects */}
            {/*   over the years. */}
            {/* </Tool> */}
          </ToolsSection>
          {/* <ToolsSection title="Design"> */}
          {/*   <Tool title="Figma"> */}
          {/*     We started using Figma as just a design tool but now it’s become */}
          {/*     our virtual whiteboard for the entire company. Never would have */}
          {/*     expected the collaboration features to be the real hook. */}
          {/*   </Tool> */}
          {/* </ToolsSection> */}
          <ToolsSection title="Productivity">
            <Tool title="Muse">
							Spacial thinking is a skill that I've always struggled with. I think muse comes really close to helping me with that.
            </Tool>
            <Tool title="Drafts">
							Where to dump your thoughts into? Drafts.
            </Tool>
            <Tool title="Craft">
							Where to organize your thoughts into? Craft.
            </Tool>
            <Tool title="Things">
							Honestly I don't know about other apps cause I've always used things. Never had a problem with it.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
