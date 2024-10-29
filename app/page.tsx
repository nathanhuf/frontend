import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Page() {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>Welcome to your Cloud projects!</h1>
      <p>Here is a list of existing projects:</p>
      <Link href="/projects" className="underline">
        Projects
      </Link>
    </div>
  );
}
