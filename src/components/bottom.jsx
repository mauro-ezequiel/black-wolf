import "../style/bottom.css";

export function Bottom() {
  return (
    <section className="clear b ">
      <h1 className="title"> Contacto </h1>
      <div className="row">
        <div className="col-md-4">
          <h2 className="paragraph">
            Puedes contactarme en las siguientes redes:
          </h2>
        </div>
        <div className="col-md-4">
          <div className="link">
            <a href="https://github.com/mauro-ezequiel" target="-blank">
              <i className="bo bi-github"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100088989336658"
              target="-blank"
            >
              <i className="bo bi-facebook"></i>
            </a>

            <a href="https://wa.me/541150941389" target="-blank">
              <i className="bo bi-whatsapp" />
            </a>

            <a
              href="https://mail.google.com/mail/u/0/#search/from%3A%40jooble.org+in%3Aanywhere/FMfcgzGtwCtTwJMFtBCXBlHLrcdTZmpk"
              target="-blank"
            >
              <i className="bo bi-envelope-at-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <a href="https://wa.me/541150941389" id="btn" target="-blank">
        <i className="b bi-whatsapp" />
      </a>
    </section>
  );
}
