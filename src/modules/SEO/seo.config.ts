

import { NextSeoProps } from "next-seo";
import { defaultSeoConfig } from "./default.config";
import { OGImage } from "./ogImages";


const config: NextSeoProps = {
  canonical: defaultSeoConfig.url,
  openGraph: {
    url: defaultSeoConfig.url,
    images: [
      {
        url: OGImage,
        width: 1200,
        height: 628,
        alt: defaultSeoConfig.title
      },
      {
        url: OGImage,
        width: 1200,
        height: 600,
        alt: defaultSeoConfig.title
      }
    ],
    site_name: defaultSeoConfig.title
  },
  twitter: {
    handle: defaultSeoConfig.twitter,
    cardType: "summary_large_image"
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/logo.png"
    }
  ]
};

export default config;
