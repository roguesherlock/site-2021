import Layout from "@/components/Layout";
import Link from "@/components/Link";
import Image from "@/components/Image";

export default function StripeThankYou() {
  return (
    <Layout
      title="Thanks for trying out billing portal"
      pageTitle="Thanks for trying out billing portal"
    >
      <div className="flex flex-col items-center justify-center space-y-5 font-medium text-center">
        <h3 className="text-lg  ">
          Hey thanks for trying out billing portal. If you have any other
          questions, feel free to <Link href="/contact" label="contact me" />.
        </h3>
        <Image
          src={require("@/images/i-do-what-i-can.gif")}
          alt={"I do what I can"}
        />
      </div>
    </Layout>
  );
}
