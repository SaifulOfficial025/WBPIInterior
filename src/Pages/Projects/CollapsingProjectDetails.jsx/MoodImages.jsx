import React from "react";

function MoodImages() {
  return (
    <div className="w-full mt-16 mb-32">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-light text-gray-800 py-8">
          Mood Images
        </h2>

        {/* Meeting Room */}
        <div className="mb-8">
          <h3 className="text-2xl font-light text-gray-700 mb-4">
            Meeting Room
          </h3>
          <div className="">
            <div className="rounded-sm overflow-hidden shadow-sm">
              <img
                src="/moodimage1.png"
                alt="Meeting room collage"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Collaboration / Pantry Area (reuse images or show second image larger) */}
        <div>
          <h3 className="text-2xl font-light text-gray-700 mb-4">
            Collaboration / Pantry Area
          </h3>
          <div className="">
            <div className="col-span-2 rounded-sm overflow-hidden shadow-sm">
              <img
                src="/moodimage2.png"
                alt="Collab large"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoodImages;
