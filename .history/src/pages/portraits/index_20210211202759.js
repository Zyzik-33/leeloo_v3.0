import React from "react"
import { Link } from "gatsby"
import "../../assets/styles/gallery.css"
import Image from "gatsby-image"
import Amina from "../../assets/images/amina.jpg"

var listOfImages = []

const Portraits = () => {
  listOfImages = this.importAll(
    require.context("../../assets/images/prev", false, /\.(png|jpe?g|svg)$/)
  )
  console.log(listOfImages)
  return (
    <div className="image-grid">
      <div className="image-item">
        <Link to="/portraits/aga">Aga</Link>
      </div>
      <div className="image-item">
        <Link to="/portraits/amina">
          <div className="prev-album">
            <img src={Amina} alt="Amina" />
            <div className="content">
              <div className="text">Amina</div>
            </div>
          </div>
        </Link>
      </div>

      <Link to="/portraits/arina">Arina</Link>
      <Link to="/portraits/Daria">Daria</Link>
      <Link to="/portraits/dasha">Dasha</Link>
      <Link to="/portraits/daina">Diana</Link>
      <Link to="/portraits/domi">Domi</Link>
      <Link to="/portraits/jacek">Jacek</Link>
      <Link to="/portraits/kaja">Kaja</Link>
      <Link to="/portraits/lesia2019">Lesia 2019</Link>
      <Link to="/portraits/lesia2020">Lesia 2020</Link>
      <Link to="/portraits/michal">Michał</Link>
      <Link to="/portraits/nastia">Nastia</Link>
      <Link to="/portraits/sasha">Sasha</Link>
    </div>
  )
}

export default Portraits
