import getAllEssayPreviews from "@/getAllEssayPreviews";
import Layout from "@/components/Layout";
import Link from "@/components/Link";

const essays = getAllEssayPreviews();
export type EssayMetaType = { title: string; date: string };
export type EssayType = {
  link: string;
  module: { default: React.Component; meta: EssayMetaType };
};

const degrees = [-2, 2];
let index = 0;
// const rotateClass = () => {
//   const degree = degrees[index % degrees.length];
//   const rotateDegree = degree < 0 ? `-rotate-${-degree}` : `rotate-${degree}`;
//   index += 1;
//   return ` transform ${rotateDegree}`;
// };

const getDegree = () => {
  const degree = degrees[index % degrees.length];
  index += 1;
  return degree;
};

export default function Essays() {
  return (
    <Layout title="Essays" pageTitle="Essays">
      <div className="space-y-12 flex flex-col leading-tight z-10 pb-24">
        {essays.map(({ link, module: { meta } }: EssayType) => {
          const degree = getDegree();
          return (
            <div
              key={link}
              className="flex items-center justify-center text-xl sm:text-3xl font-display w-auto"
            >
              <Link href={link}>
                <a
                  className={
                    "inline-block bg-primary p-5 text-secondary w-auto shadow-xl hover:-translate-y-1 hover:bg-hot-pink transition-all duration-200 ease-in-out transform " +
                    `${degree < 0 ? "-rotate-2" : `rotate-2`}`
                  }
                >
                  {meta.title}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
