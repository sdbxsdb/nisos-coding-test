import React from 'react'

const Navbar = () => {
  return (
    <div className="flex w-full bg-[#D8E3EF] px-4 justify-between items-center p-4">
      <div>Nisos</div>
      <div className="flex items-center gap-x-4">
        <div>&#128276;</div>
        <div className="bg-[#578795] px-1 rounded-full w-[40px] h-[40px] flex items-center justify-center text-white">SDB</div>
      </div>
    </div>
  )
}

export default Navbar