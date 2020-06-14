import Head from "next/head";
import Profile, { siteTitle } from "../components/profile";
import utilStyles from "../styles/utils.module.css";

const back = false;

export default function Home() {
  return (
    <Profile home={back}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Self Introductions...</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Profile>
  );
}
