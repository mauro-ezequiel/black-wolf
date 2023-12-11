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
            "https://http2.mlstatic.com/D_NQ_NP_736811-MLA73175731038_122023-O.webp"
          }
          title={"Par Estribos+Agarre remo+Barra Corta+Dorsalera"}
          p={"'envio gratis'atodo el pais"}
          price={"30.000"}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1398132043-par-de-estribos-agarre-casita-barra-corta-dorsalera-_JM"
          }
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_682370-MLA73335802439_122023-O.webp"
          }
          title={"Agarra Tipo Casita + Agarre V + Un Estribo"}
          p={"'envio gratis'atodo el pais"}
          price={"21.00"}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1593413974-agarra-tipo-casita-mas-agarre-v-mas-un-estribo-_JM#position=2&search_layout=stack&type=item&tracking_id=4aece7fc-74fb-4564-b43b-713ca11a1d91"
          }
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
