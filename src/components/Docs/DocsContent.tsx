"use client";
import Prism from "prismjs";
import { useEffect, useRef } from "react";

const DocsContent = ({ content }: any) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const rootRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    const allPres = rootRef?.current.querySelectorAll("pre");

    for (const pre of allPres) {
      const code = pre.firstElementChild;

      if (!code || !/code/i.test(code.tagName)) {
        continue;
      }

      pre.appendChild(createCopyButton(code));
    }

    return;
  });

  return (
    <div ref={rootRef}>
      <div
        className="blog-details"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
export default DocsContent;

function createCopyButton(codeEl: any) {
  const button = document.createElement("button");
  button.classList.add("prism-copy-button");
  button.textContent = "Copy";

  button.addEventListener("click", () => {
    if (button.textContent === "Copied") {
      return;
    }
    navigator.clipboard.writeText(codeEl.textContent || "");
    button.textContent = "Copied";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = "Copy";
      button.disabled = false;
    }, 3000);
  });

  return button;
}
