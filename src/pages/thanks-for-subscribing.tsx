import Layout from "@/components/Layout";
import Link from "@/components/Link";
import Image from "@/components/Image";

export default function ThanksForSubscribing() {
  return (
    <Layout title="Thanks For Subscribing" pageTitle="Thanks For Subscribing">
      <div className="flex flex-col items-center justify-center space-y-5 font-medium text-center">
        <h3 className="text-lg  ">
          Hey thanks for signing up to Akashs Musings! I'll keep you updated
          when I launch something new & note-worthy. While you're here, feel
          free to check out my past <Link href="/essays" label="Essays" />.
        </h3>
        <Image
          src={require("@/images/i-do-what-i-can.gif")}
          alt={"I do what I can"}
        />
      </div>
    </Layout>
  );
}
