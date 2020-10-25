import tinytime from "tinytime";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import Link from "@/components/Link";
import config from "../../siteconfig.js";

export type EssayPropsType = {
  meta: {
    title: string;
    date: string;
    spoiler?: string;
  };
  essays: Array<any>;
};

const postDateTemplate = tinytime("{dddd}, {MMMM} {DD}, {YYYY}");

export default function Essay({
  meta,
  children,
  essays,
}: React.PropsWithChildren<EssayPropsType>) {
  const router = useRouter();
  const essayIndex = essays.findIndex((post) => post.link === router.pathname);
  const previous = essays[essayIndex + 1];
  const next = essays[essayIndex - 1];

  return (
    <Layout pageTitle={meta.title}>
      <article className="xl:divide-y xl:divide-gray-200 min-h-screen">
        <header className="pt-12 xl:pt-16 xl:pb-10">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 font-medium text-primary">
                  <time dateTime={meta.date}>
                    {postDateTemplate.render(new Date(meta.date))}
                  </time>
                </dd>
              </div>
            </dl>
            <div className="text-5xl font-display">{meta.title}</div>
            {meta.spoiler && (
              <div className="text-sm tracking-wide leading-loose">
                {meta.spoiler}
              </div>
            )}
          </div>
        </header>
        <div className="divide-y xl:divide-y-0 divide-gray-200 flex flex-col space-y-10 pb-16 xl:pb-20">
          <div className="prose max-w-none font-medium pt-10 text-lg sm:text-justify flex-1">
            {children}
          </div>
          <footer className="text-sm font-medium leading-5">
            {(next || previous) && (
              <div className="py-8 pt-12 space-y-5 flex flex-col items-center justify-center md:flex-row md:justify-between md:space-y-0">
                {next && (
                  <div>
                    <Link href={next.link} label={`&larr; ${next.title}`} />
                  </div>
                )}
                {previous && (
                  <div>
                    <Link
                      href={previous.link}
                      label={`${previous.title} &rarr;`}
                    />
                  </div>
                )}
              </div>
            )}
          </footer>
        </div>
      </article>
    </Layout>
  );
}
