function importAll(r: any) {
  return r.keys().map((fileName: string) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName),
  }));
}

function dateSortDesc(a: any, b: any) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export default function getAllEssayPreviews() {
  return importAll(
    require.context("./pages/?preview", true, /\.mdx$/)
  ).sort((a: any, b: any) =>
    dateSortDesc(a.module.meta.date, b.module.meta.date)
  );
}
