(() => {
  const article = document.querySelector(".post-article");
  if (!article) return;

  const body = article.querySelector(".post-body");
  const headings = [...body.querySelectorAll("h2, h3")].filter(heading => heading.textContent.trim());

  if (headings.length >= 2) {
    const toc = article.querySelector(".post-toc");
    const list = toc.querySelector("ol");

    headings.forEach((heading, index) => {
      if (!heading.id) {
        const base = `post-section-${index + 1}`;
        let candidate = base;
        let suffix = 1;
        while (document.getElementById(candidate)) candidate = `${base}-${suffix++}`;
        heading.id = candidate;
      }

      const item = document.createElement("li");
      if (heading.tagName === "H3") item.className = "post-toc-subsection";

      const link = document.createElement("a");
      link.href = `#${encodeURIComponent(heading.id)}`;
      link.textContent = heading.textContent.trim();
      item.append(link);
      list.append(item);
    });

    toc.hidden = false;
  }

  for (const code of body.querySelectorAll("pre > code")) {
    const pre = code.parentElement;
    const tools = document.createElement("div");
    tools.className = "post-code-tools";

    const status = document.createElement("span");
    status.className = "post-copy-status";
    status.setAttribute("role", "status");

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "复制代码";
    let resetStatus;

    button.addEventListener("click", async () => {
      clearTimeout(resetStatus);
      try {
        await navigator.clipboard.writeText(code.textContent);
        status.textContent = "已复制";
        resetStatus = setTimeout(() => { status.textContent = ""; }, 2500);
      } catch {
        status.textContent = "复制失败，请手动选择代码";
      }
    });

    tools.append(status, button);
    pre.before(tools);
    pre.classList.add("post-copy-enabled");
  }
})();
