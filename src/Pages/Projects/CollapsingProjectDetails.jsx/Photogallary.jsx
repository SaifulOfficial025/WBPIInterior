import React, { useState, useEffect, useRef } from "react";
import { LuZoomIn } from "react-icons/lu";
import { HiOutlineZoomOut } from "react-icons/hi";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Photogallary({ images, open, onClose }) {
  const [openLocal, setOpenLocal] = useState(false);
  const isControlled = typeof open !== "undefined";
  const isOpen = isControlled ? open : openLocal;

  const gallery =
    images && images.length ? images : new Array(9).fill("/PropertyFinder.png");
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [slideDir, setSlideDir] = useState("right"); // "left" or "right"
  const thumbsRef = useRef(null);

  useEffect(() => {
    // reset index when gallery changes
    setIndex(0);
  }, [images]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
      } else if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    // scroll thumbnail into view
    const thumbs = thumbsRef.current;
    if (thumbs) {
      const active = thumbs.querySelector(`[data-index=\"${index}\"]`);
      active?.scrollIntoView({ inline: "center", behavior: "smooth" });
    }
  }, [index]);

  const openLocalModal = () => {
    if (isControlled) return;
    setOpenLocal(true);
  };

  const close = () => {
    if (isControlled) onClose && onClose();
    else setOpenLocal(false);
    setZoomed(false);
  };

  const prev = () => {
    setSlideDir("left");
    setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  };

  const next = () => {
    setSlideDir("right");
    setIndex((i) => (i + 1) % gallery.length);
  };

  if (!isOpen) {
    if (isControlled) return null;
    return (
      <div className="flex justify-center">
        <button
          onClick={openLocalModal}
          className="px-6 py-2 bg-white text-black font-semibold rounded-full shadow transition-colors hover:bg-gray-100"
        >
          See all photos
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ margin: 0, padding: 0, top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* click overlay to close */}
      <div className="absolute inset-0 bg-black/60" onClick={close} />

      {/* blurred background grid of all photos (decorative) */}
      <div className="pointer-events-none absolute inset-0 p-8">
        <div className="w-full h-full grid grid-cols-6 gap-2 opacity-20 blur-sm">
          {gallery.map((src, i) => (
            <div key={i} className="w-full h-full overflow-hidden rounded">
              <img
                src={src}
                alt={`bg-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* modal content */}
      <div className="relative w-[100vw] h-[100vh] bg-white  shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Project Photos</h3>
          <button
            onClick={close}
            className="px-3 py-1 rounded hover:bg-gray-200"
          >
            <IoMdCloseCircleOutline className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 flex flex-col h-[calc(98vh-96px)]">
          <div className="flex-1 flex items-center justify-center bg-gray-50 overflow-hidden relative group">
            <style>{`
              @keyframes slideInRight {
                from { opacity: 0; transform: translateX(-30px); }
                to { opacity: 1; transform: translateX(0); }
              }
              @keyframes slideInLeft {
                from { opacity: 0; transform: translateX(30px); }
                to { opacity: 1; transform: translateX(0); }
              }
              .slide-right {
                animation: slideInRight 0.3s ease-out;
              }
              .slide-left {
                animation: slideInLeft 0.3s ease-out;
              }
            `}</style>
            <img
              key={`img-${index}`}
              src={gallery[index]}
              alt={`display-${index}`}
              className={`max-h-full max-w-full transition-all duration-300 ${
                zoomed ? "scale-150" : "scale-100"
              } ${slideDir === "right" ? "slide-right" : "slide-left"}`}
              style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
              onClick={() => setZoomed((z) => !z)}
            />

            {/* Buttons at bottom-right */}
            <div className="absolute bottom-4  flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-lg">
              <button
                onClick={prev}
                className="px-3 py-1  rounded hover:bg-gray-200 transition-colors"
                title="Previous (←)"
              >
                <GrCaretPrevious className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="px-3 py-1  rounded hover:bg-gray-200 transition-colors"
                title="Next (→)"
              >
                <GrCaretNext className="h-5 w-5" />
              </button>
              <div className="w-px h-5 bg-gray-300" />
              <button
                onClick={() => setZoomed((z) => !z)}
                className="px-3 py-1  rounded hover:bg-gray-200 transition-colors"
                title="Zoom"
              >
                {zoomed ? (
                  <HiOutlineZoomOut className="h-5 w-5" />
                ) : (
                  <LuZoomIn className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <div
              ref={thumbsRef}
              className="flex gap-3 overflow-x-auto py-2 px-1 mx-auto"
            >
              {gallery.map((src, i) => (
                <button
                  key={i}
                  data-index={i}
                  onClick={() => setIndex(i)}
                  className={`flex-shrink-0 w-24 h-16 overflow-hidden rounded border ${
                    i === index ? "border-2  scale-125" : "border-transparent"
                  }`}
                >
                  <img
                    src={src}
                    alt={`thumb-${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photogallary;
