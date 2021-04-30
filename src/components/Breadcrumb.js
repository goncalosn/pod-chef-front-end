import React from "react";

const Breadcrumb = (props) => {
  return (
    <nav className="text-black font-bold mb-8" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {props.path.map((page, index) =>
          index + 1 === props.path.length ? (
            <li key={index} className="text-gray-500">
              {page.name}
            </li>
          ) : (
            <li className="flex items-center" key={index}>
              <span
                onClick={() =>
                  props.handler(page.component, "/" + page.name.toLowerCase())
                }
                style={{ cursor: "pointer" }}
                aria-current="page"
              >
                {page.name}
              </span>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
          )
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
