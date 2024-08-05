import SidebarLink from "@/components/Docs/SidebarLink";
import { getAllPosts } from "@/libs/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs | AI Tool - Next.js Template for AI Tools",
  description: "This is Docs page for AI Tool",
  // other metadata
};

export default function DocsPage() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg bg-white/5 p-4 transition-all">
                <ul className="space-y-2">
                  {posts.map((post, key) => (
                    <SidebarLink post={post} key={key} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Welcome to Startup Documentation</h1>

                <p className="font-medium">
                  This document serves as a simple template to showcase a sample
                  layout and format. It is solely created for demonstration
                  purposes and is not intended for any official use.
                </p>
                <p className="font-medium">
                  Please visit:{" "}
                  <b>
                    <a
                      className="text-white"
                      target="_blank"
                      href="https://nextjstemplates.com/docs"
                    >
                      nextjstemplates.com/docs
                    </a>
                  </b>{" "}
                  to check out the real docs, setup guide and even video
                  instructions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
