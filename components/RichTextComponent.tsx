import { Image } from '@mantine/core';
import Link from 'next/link';
import urlFor from '../lib/urlFor';

export const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => (
            <Image
              src={urlFor(value).url()}
              alt={value.title}
            />
        ),
    },

    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }:any) => <ul className="mt-xl">{children}</ul>,
        number: ({ children }:any) => <ol className="mt-lg">{children}</ol>,

        // Ex. 2: rendering custom lists
        checkmarks: ({ children }:any) => <ol className="m-auto text-lg">{children}</ol>,
    },

    block: {
        // Ex. 1: customizing common block types
        h1: ({ children }:any) => <h1 className="text-2xl">{children}</h1>,
        blockquote: ({ children }:any) => <blockquote className="border-l-purple-500">{children}</blockquote>,

        // Ex. 2: rendering custom styles
        customHeading: ({ children }:any) => (
          <h2 className="text-lg text-primary text-purple-700">{children}</h2>
        ),
    },
    marks: {
      link: ({ children, value }:any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          <Link href={value.href} rel={rel}>
            {children}
          </Link>
        );
      },
    },
  };
