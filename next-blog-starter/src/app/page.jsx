import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default async function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1;

  const posts = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
