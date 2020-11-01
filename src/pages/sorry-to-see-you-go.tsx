import Layout from "@/components/Layout";
import Image from "@/components/Image";

export default function SorryToSeeYouGo() {
  return (
    <Layout title="Sorry to see you go" pageTitle="Sorry to see you go">
      <div className="flex flex-col items-center justify-center space-y-5 font-medium text-center">
        <h3 className="text-lg  ">
          I just wanted to let you know that you've successfully been
          un-subscribed. I'll miss you. Hope you have a lovely day. <br />
          Ciao!
        </h3>
        <Image
          src={require("@/images/sorry-to-see-you-go.jpg")}
          alt={"Sorry to see you go"}
        />
      </div>
    </Layout>
  );
}
