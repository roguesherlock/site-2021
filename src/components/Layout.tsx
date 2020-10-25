import Head from "next/head";
import React from "react";
import config from "../../siteconfig.js";

type LayoutPropsType = { pageTitle?: string; title?: string };

export default function Layout({
  children,
  pageTitle,
  title,
}: React.PropsWithChildren<LayoutPropsType>) {
  return (
    <div className="max-w-screen-sm mx-auto px-4 py-8 sm:py-12">
      <Head>
        <title>
          {pageTitle ? `${pageTitle} — ${config.title}` : config.title}
        </title>
      </Head>
      {title && (
        <section className="text-center sm:py-5 py-10">
          <h1 className="text-5xl font-display">{title}</h1>
        </section>
      )}
      <section className="px-2 max-w-none sm:px-0 mt-5">{children}</section>
    </div>
  );
}
