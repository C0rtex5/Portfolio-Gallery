import React from 'react'

function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-white shadow-md rounded-xl p-6 text-center">
        <p>Space 1</p>
      </div>
      <div className="bg-white shadow-md rounded-xl p-6 text-center">
        <p>Space 2</p>
      </div>
    </div>
  )
}

export default Gallery
