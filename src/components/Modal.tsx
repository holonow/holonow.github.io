import styled from '@emotion/styled';

interface ModalProps {
  open: boolean
}

const Modal = styled.div`
  display: ${(props: ModalProps) => (props.open ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

export default Modal;
