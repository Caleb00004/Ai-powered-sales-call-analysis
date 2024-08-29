import { FC, ReactNode, useEffect, useRef } from "react";

interface modalType {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode
    className?: unknown
}

const Modal: FC<modalType> = ({ isOpen, onClose, children, className = "" }) => {

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      };
  
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, onClose]);

    if (!isOpen) {
      return null;
    }

    return (
      <div className="fixed z-[5] inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg w-full md:w-[35em]">
          <button className="absolute text-[1.8em] right-8 text-gray-600" onClick={onClose}>
            &times;
          </button>
          <div className={`${className}`}>{children}</div>
        </div>
      </div>
    );
  };

export default Modal