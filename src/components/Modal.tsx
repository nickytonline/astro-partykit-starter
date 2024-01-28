import { createRef } from "react";

interface ModalProps {
  roomId: string;
  username: string;
}

export const Modal = ({ roomId, username }: ModalProps) => {
  const modalRef = createRef<HTMLDialogElement>();

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };

  const handleLeaveRoom = () => {
    modalRef.current?.close();
    window.location.href = "/";
  };

  const handleStayInRoom = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-red-600 hover:bg-red-700 w-36 mx-auto text-white font-bold py-2 px-4 rounded"
      >
        Leave Room
      </button>

      <dialog ref={modalRef} className="modal">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h2 className="text-xl font-semibold leading-6 text-gray-900">
                      Leave {roomId} Room
                    </h2>
                    <div className="mt-2">
                      <p className="text-md text-gray-500">
                        Hi {username}! Thank you for visiting. Are you sure you
                        want to leave?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={handleLeaveRoom}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Leave
                </button>
                <button
                  onClick={handleStayInRoom}
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Stay
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
