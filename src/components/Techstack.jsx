import React from "react";


function Techstack() {
    return (
        <section id="techstack">
        <div className="flex flex-col items-center md:flex-row md:justify-center p-5">
          <div className="flex items-center mb-4 md:mb-0 mr-0 md:mr-4">
            <p className="text-center mr-2 text-white">Tech Stack</p>
            <span className="text-white">|</span>
          </div>
          <div className="flex justify-center">
            <ul className="flex flex-wrap justify-center md:justify-start">
              <li>
                <img
                  className="w-16 h-16 mr-6 mb-4 hover:opacity-75"
                  src="public\images\css.png"
                  alt="css"
                  title="CSS"
                />
              </li>
              <li>
                <img
                  className="w-16 h-16 mr-6 mb-4 hover:opacity-75"
                  src="public\images\html.png"
                  alt="html"
                  title="HTML"
                />
              </li>
              <li>
                <img
                  className="w-16 h-16 mr-6 mb-4 hover:opacity-75"
                  src="public\images\tailwind.png"
                  alt="tailwind css"
                  title="Tailwind CSS"
                />
              </li>
              <li>
                <img 
                  className="w-16 h-16 mr-6 mb-4 hover:opacity-75"
                  src="public\images\github.png" 
                  alt="github"
                  title="GitHub"
                />
              </li>
              <li>
                <img
                  className="w-16 h-16 mr-6 mb-4 hover:opacity-75"
                  src="public\images\javascript.png"
                  alt="javascript"
                  title="JavaScript"
                />
              </li>
              <li>
                <img
                  className="w-16 h-16 mr-6 mb-4 hover:opacity-75"
                  src="public\images\reactjs.png"
                  alt="react"
                  title="React"
                />
              </li>
              <li>
                <img
                  className="w-16 h-16 mr-6 mb-4 hover:opacity-75"
                  src="public\images\threejs.svg"
                  alt="ThreeJs"
                  title="Three.js"
                />
              </li>
              <li>
                <img
                  className="w-16 h-16 mb-4 hover:opacity-75"
                  src="public\images\typescript.png"
                  alt="TypeScript"
                  title="TypeScript"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
}

export default Techstack;