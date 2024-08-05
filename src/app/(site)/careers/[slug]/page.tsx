import React from 'react';
import DocsContent from "@/components/Docs/DocsContent";
import SidebarLink from "@/components/Docs/SidebarLink";
import { getAllPosts, getPostBySlug } from "@/libs/markdown";
import markdownToHtml from "@/libs/markdownToHtml";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  if (post) {
    return {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      description: `${post.metadata?.slice(0, 136)}...`,
      author: authorName,

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}
