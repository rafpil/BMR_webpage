import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { BsX } from "react-icons/bs";

import Button from "../../components/button/button";



function ModalWindow(props) {
    return (
        <div
            className={`modal__box ${props.showModalState ? 'show a' : ''}`}
            id="galleryModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <Button
                type="button"
                extraClass="btn__close"
                onClick={props.closeModal}
                aria-label="Close"
            >
                <BsX />
            </Button>
            <div className="modal__content">
                <GatsbyImage 
                    id={'img'}
                    image={props.selectedImageState}
                    alt={`Obraz galerii - pełen ekran`}
                />
            </div>
        </div>
    )
}

export default ModalWindow;