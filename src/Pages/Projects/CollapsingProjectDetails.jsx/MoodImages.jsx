import React from "react";

function MoodImages({ moodImages = [] }) {
  // Fallback to default images if no data
  const defaultImages = [
    { image: "/moodimage1.png", title: "Meeting Room" },
    { image: "/moodimage2.png", title: "Collaboration / Pantry Area" },
  ];

  const imagesToDisplay = moodImages.length > 0 ? moodImages : defaultImages;

  return (
    <div className="w-full mt-16 mb-32">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-light text-gray-800 py-8">
          Mood Images
        </h2>

        {imagesToDisplay.map((moodImage, index) => (
          <div
            key={moodImage.id || index}
            className={index < imagesToDisplay.length - 1 ? "mb-8" : ""}
          >
            <h3 className="text-2xl font-light text-gray-700 mb-4">
              {moodImage.title || `Mood Image ${index + 1}`}
            </h3>
            <div className="">
              <div className="rounded-sm overflow-hidden shadow-sm">
                <img
                  src={moodImage.image}
                  alt={moodImage.title || `Mood image ${index + 1}`}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src =
                      index === 0 ? "/moodimage1.png" : "/moodimage2.png"; // Fallback image
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodImages;
