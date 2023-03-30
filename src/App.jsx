import style from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Topbar from "./components/topbar/Topbar";

export default function App() {
  return (
    <main className={style["App"]}>
      <Topbar />
      <Main />
      <Footer />
    </main>
  );
}
