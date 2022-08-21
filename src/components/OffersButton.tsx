import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const OffersButton = ({ show, onClose, children }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <StyledModalOverlay>
            <StyledModal>
                <StyledModalHeader>
                    <a href="#" onClick={handleCloseClick}>
                        x
                    </a>
                </StyledModalHeader>
                <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

const StyledModalTitle = styled.div`
    color: blue;
    font-size: 20px;
`;

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 490px;
  height: auto;
  border-radius: 15px;
  padding: 15px;
  padding-left: 5px
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default OffersButton;
