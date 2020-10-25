import NextLink from "next/link";
import { Children } from "react";

export type LinkProps = {
  href: string;
  label?: string;
};

export function ExternalLink({
  href,
  label,
  children,
}: React.PropsWithChildren<LinkProps>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex cursor-pointer border-b-2 font-semibold tracking-wide leading-loose text-lg hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out transform hover:-translate-y-1"
    >
      {children ? children : label}
    </a>
  );
}

export default function Link({
  href,
  label,
  children,
}: React.PropsWithChildren<LinkProps>) {
  return (
    <NextLink href={href}>
      {children ?? (
        <a
          dangerouslySetInnerHTML={{ __html: label ?? "" }}
          className="inline-flex cursor-pointer border-b-2 font-semibold tracking-wide leading-loose text-lg hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out transform hover:-translate-y-1"
        />
      )}
    </NextLink>
  );
}
