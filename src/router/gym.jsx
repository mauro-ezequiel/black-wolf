import { Bar } from "../components/bar";
import { Bottom } from "../components/bottom";
import { Card } from "../components/props";

import "../style/3d.css";

export function Gym() {
  return (
    <section className="dark">
      <Bar />
      <h1 className="title">ACCESORIOS GYM</h1>

      <h1 className="title">PRODUCTOS</h1>

      <div id="grid">
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={12}
          p={129}
          price={11111}
          href={"3"}
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={12}
          p={129}
          price={11111}
          href={"3"}
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={12}
          p={129}
          price={11111}
          href={"3"}
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={12}
          p={129}
          price={11111}
          href={"3"}
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={12}
          p={129}
          price={11111}
          href={"3"}
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={12}
          p={129}
          price={11111}
          href={"3"}
        />
      </div>

      <Bottom />
    </section>
  );
}
