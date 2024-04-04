import React from 'react';

const ModalTable: React.FC<{
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ open, onClose, children }) => {
  const overlayClass = open ? 'visible bg-black bg-opacity-50 backdrop-blur' : 'invisible';
  const modalClass = open ? 'scale-100 opacity-100 z-50' : 'scale-110 opacity-0';
  const modalWidth = 'max-w-screen-2xl';

  const handleClickOverlay = () => {
    console.log('Clic en el overlay');
    onClose();
  };

  const handleClickCloseButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Evita que el clic en el botón se propague al contenedor
    console.log('Clic en el botón de cierre');
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 p-4 flex justify-center items-center transition-all ${overlayClass}`}
      onClick={handleClickOverlay}>
      <div
        className={`bg-white rounded-2xl shadow p-5 transition-all w-full sm:${modalWidth} ${
          open ? '' : 'h-0 overflow-hidden'
        } ${modalClass}`}
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-700"
          onClick={handleClickCloseButton}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalTable;