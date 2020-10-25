import getAllEssayPreviews from '@/getAllEssayPreviews'

export async function getStaticProps() {
  return {
    props: {
      essays: getAllEssayPreviews().map((essay: any) => ({
        title: essay?.module?.meta?.title,
        link: essay.link,
      })),
    },
  }
}