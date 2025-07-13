import { Dialog, DialogPanel } from "@headlessui/react";

const CitationModal = ({ isOpen, onClose, citation }) => {
  if (!citation) return null;

  const { source, link, text, localPath } = citation;
  const isExternal = Boolean(link);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <DialogPanel className="bg-white p-4 rounded max-w-4xl w-full h-[90vh] relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>

          {/* Title and External Link */}
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold">{source}</h2>
            {isExternal && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm hover:text-blue-800 mr-12"
              >
                🔗 Click to open PDF in a new tab
              </a>
            )}
          </div>

          {/* PDF Viewer (works only for localPath) */}
          <div className="w-full h-[80%]">
            {localPath ? (
              <iframe
                src={`${localPath}#page=2`}
                title="PDF Viewer"
                className="w-full h-full rounded"
              ></iframe>
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
                PDF preview not available
              </div>
            )}
          </div>

          {/* Highlight Area  */}
          {text && localPath && (
            <p className="absolute bottom-4 left-4 bg-yellow-200 px-3 py-2 rounded text-sm shadow">
              🔍 Highlighted: “{text?.slice(0, 80)}...”
            </p>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CitationModal;
