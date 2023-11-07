import React from "react";
import "./reseau.css";
import imgfooter1 from "../../assets/imgfooter1.jpg";
import imgfooter2 from "../../assets/imgfooter2.jpg";
import imgfooter3 from "../../assets/imgfooter3.jpg";
import imgfooter4 from "../../assets/imgfooter4.jpg";

function Reseau() {
  return (
    <div className="logoreseau">
      <a href="https://www.facebook.com/?locale=fr_FR">
        <img
          className="img"
          src={imgfooter1}
          alt="facebook"
          title="https://www.facebook.com/?locale=fr_FR"
        />
      </a>
      <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZnIifQ%3D%3D%22%7D">
        <img
          className="img"
          src={imgfooter2}
          alt="twitter"
          title="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZnIifQ%3D%3D%22%7D"
        />
      </a>
      <a href="https://www.instagram.com/">
        <img
          className="img"
          src={imgfooter3}
          alt="instagram"
          title="https://www.instagram.com/"
        />
      </a>
      <a href="https://www.wildcodeschool.com/fr-fr/?utm_source=google&utm_medium=cpc&utm_campaign=brand&utm_term=wild%20code%20school&utm_campaign=FR+-+campagne+marque&utm_source=adwords&utm_medium=ppc&hsa_acc=4421706736&hsa_cam=14821000047&hsa_grp=130792156467&hsa_ad=629219034671&hsa_src=g&hsa_tgt=kwd-340701497962&hsa_kw=wild%20code%20school&hsa_mt=e&hsa_ver=3&hsa_net=adwords&gad_source=1&gclid=Cj0KCQjw4vKpBhCZARIsAOKHoWRcc7faJ9w76FO2plUgJPfDwkGy-8zlyoONFoUPZaWLbjMObdo5Cg0aAv1zEALw_wcB">
        <img className="img" src={imgfooter4} alt="WCS" />
      </a>
    </div>
  );
}
export default Reseau;
