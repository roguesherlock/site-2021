import Layout from "@/components/Layout";
import Link from "@/components/Link";
import Image from "@/components/Image";

export default function Custom404() {
  return (
    <Layout title="Not Found" pageTitle="Not Found">
      <div className="flex flex-col items-center justify-center">
        <Image src={require("@/images/caprio.gif")} alt={"lost"} />
      </div>
    </Layout>
  );
}
