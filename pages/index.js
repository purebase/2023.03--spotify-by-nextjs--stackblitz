import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {

  const step1Url = "https://accounts.spotify.com/authorize" +
      "?client_id=7f6f044ff92c43bda6dd0683a293c424" +
      "&scope=user-read-currently-playing" +
      "&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback" +
      "&response_type=code"


  return (
      <div className={styles.container}>
        <Head>
          <title>Connect Spotify</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <a href={step1Url}>Step 1</a>
          </h1>
        </main>
      </div>
  );
}
