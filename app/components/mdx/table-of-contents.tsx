function TableOfContents({
  headings,
}: {
  headings: { id: string; text: string; depth: number }[];
}) {
  const getIndentClass = (depth: number) => {
    switch (depth) {
      case 2:
        return "ml-4";
      case 3:
        return "ml-8";
      case 4:
        return "ml-12";
      case 5:
        return "ml-16";
      default:
        return "";
    }
  };

  return (
    <nav className="sticky top-20">
      <h2 className="font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} className={getIndentClass(heading.depth)}>
            <a
              href={`#${heading.id}`}
              className="text-emerald-500 hover:underline"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
