/* Scope interno ->*/ const nombre = "Jose Miguel Torres Medina";
import { PropTypes } from "prop-types";



export default function Firstapp({title, subtitle}) {
  /* Scope Global -> */
  return (
    <>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </>
  );
}

Firstapp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired


}
Firstapp.defaultProps = {
  title: "Sin titulo",
  subtitle: "Sin subtitulo"
}