import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import "./gallery.scss";
import ModalWindow from "./ModalWindow";

function Gallery() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
            id
          }
        }
      }
    }
  `);

  const images = data.allFile.nodes;

  const [showModalState, setShowModalState] = useState(false);
  const [selectedImageState, setSelectedImageState] = useState(
    images[0].childImageSharp.gatsbyImageData
  );

  const openModal = (index) => {
    setShowModalState(true);
    setSelectedImageState(images[index].childImageSharp.gatsbyImageData);
  };

  const closeModal = () => setShowModalState(false);

  return (
    <section id="gallery" className="container gallery">
      <div className="row">
        <div className="col-12">
          <h2 className="section-header">Zapoznaj się z nasza galerią</h2>
        </div>
        {images.map((item, index) => (
          <div key={item.childImageSharp.id} className="col-6 col-sm-4 py-2">
            <button
              className="btn__gallery"
              type="button"
              onClick={() => openModal(index)}
            >
              <GatsbyImage
                id={item.childImageSharp.id}
                className="img"
                image={item.childImageSharp.gatsbyImageData}
                alt={`Obraz galerii nr ${index + 1}`}
              />
            </button>
          </div>
        ))}
      </div>
      <ModalWindow
        showModalState={showModalState}
        selectedImageState={selectedImageState}
        closeModal={closeModal}
      />
    </section>
  );
}

export default Gallery;
