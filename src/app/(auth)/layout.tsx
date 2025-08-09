import Link from 'next/link'
import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
  return (
    <div>
      <nav
        className="fixed mb-15 top-0 left-0 w-full z-50 p-4 bg-gray-800 bg-opacity-90 shadow-lg"
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <Link href={"/"}
            className="text-4xl cursor-pointer font-extrabold text-blue-400 tracking-tight"
          >
            MacroMind
          </Link>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default layout
