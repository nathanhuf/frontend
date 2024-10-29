import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 className={styles.title}>About Page</h1>
      <p className={styles.description}>
        <Link href="/">&larr; Go Back</Link>
      </p>
    </div>
  );
}
