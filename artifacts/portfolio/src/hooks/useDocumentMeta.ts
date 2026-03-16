import { useEffect } from "react";

interface DocumentMeta {
  title: string;
  description: string;
}

export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    } else {
      const newOg = document.createElement("meta");
      newOg.setAttribute("property", "og:title");
      newOg.content = title;
      document.head.appendChild(newOg);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    } else {
      const newOg = document.createElement("meta");
      newOg.setAttribute("property", "og:description");
      newOg.content = description;
      document.head.appendChild(newOg);
    }
  }, [title, description]);
}
