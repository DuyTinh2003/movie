import { useRef } from "react";

const Modal = (props) => {
  const id = props.item.id;
  const modalRef = useRef();
  const closeModal = () => {
    const modalElement = modalRef.current;
    modalElement.classList.add("invisible");
    modalElement.querySelector("iframe").setAttribute("src", "");
  };
  return (
    <div
      ref={modalRef}
      className={`invisible  fixed inset-0 bg-modal  z-50 flex modal-${id} `}
    >
      <div className="m-auto relative z-[100] w-1/2 bg-black h-2/3 p-8">
        <iframe className="border-2 border-y-zinc-400"></iframe>
        <button
          className="absolute top-[10px] right-[10px] text-white "
          onClick={closeModal}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
