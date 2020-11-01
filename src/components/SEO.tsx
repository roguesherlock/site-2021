import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import config from "../../siteconfig";

export type SEOProps = {
  meta: {
    title: string;
    spoiler?: string;
    image?: string;
  };
};

export default function SEO({ meta }: PropsWithChildren<SEOProps>) {
  const router = useRouter();
  const title = `${meta.title} — ${config.title}`;
  const image = `${config.siteUrl}/${meta.image ?? config.siteImage}`;
  return (
    <Head>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={config.username} />
        <meta name="twitter:creator" content={config.username} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={meta.spoiler} />
        <meta name="twitter:image" content={image} />
        <meta
          property="og:url"
          content={`${config.siteUrl}/${router.pathname}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={meta.spoiler} />
        <meta property="og:image" content={image} />
      </Head>
    </Head>
  );
}
