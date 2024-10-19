import React from "react";
import { images } from '../../utils/ImageExtract';

const Footer = () => {
    return (
        <div className="sticky-footer" id="navbar-bg-color">
            <footer className="d-flex flex-wrap justify-content-around align-items-center py-3 my-0 border-top fixed-bottom text-white" id="navbar-bg-color">
              <div className="col-md-4 d-flex align-items-center">
                <a className="text-white text-decoration-none d-flex align-items-center" href="#">
                  <img src={images.logo} alt="" width="30" height="auto" />
                <span className="mx-3">Happy Memories © 2024 Company, Inc</span>
                </a>
              </div>
              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a>
                        <svg width="45" height="45" viewBox="0 0 256 256">
                        <defs>{/* SVG defs here */}</defs>
                        <g
                            style={{
                            stroke: 'none',
                            strokeWidth: 0,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: 'none',
                            fillRule: 'nonzero',
                            opacity: 1,
                            }}
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                        >
                            {/* SVG paths and elements here */}
                            <path
                            d="M 45 8.109 c 12.015 0 13.439 0.046 18.184 0.262 c 4.387 0.2 6.77 0.933 8.356 1.549 c 1.955 0.721 3.723 1.872 5.174 3.366 c 1.495 1.452 2.645 3.22 3.366 5.174 c 0.616 1.586 1.349 3.968 1.549 8.356 c 0.216 4.745 0.262 6.168 0.262 18.184 s -0.046 13.439 -0.262 18.184 c -0.2 4.387 -0.933 6.77 -1.549 8.356 c -1.514 3.924 -4.616 7.026 -8.54 8.54 c -1.586 0.616 -3.968 1.349 -8.356 1.549 C 58.44 81.847 57.016 81.893 45 81.893 S 31.56 81.847 26.816 81.63 c -4.387 -0.2 -6.77 -0.933 -8.356 -1.549 c -1.955 -0.721 -3.723 -1.872 -5.174 -3.366 c -1.495 -1.452 -2.645 -3.22 -3.366 -5.174 c -0.616 -1.586 -1.349 -3.968 -1.549 -8.356 c -0.216 -4.745 -0.262 -6.168 -0.262 -18.184 S 8.154 31.562 8.37 26.816 c 0.2 -4.387 0.933 -6.77 1.549 -8.356 c 0.721 -1.955 1.872 -3.723 3.367 -5.174 c 1.452 -1.495 3.22 -2.645 5.174 -3.366 c 1.586 -0.616 3.968 -1.349 8.356 -1.549 C 31.561 8.154 32.984 8.108 45 8.109 M 45 0 C 32.779 0 31.246 0.052 26.447 0.271 c -4.79 0.219 -8.061 0.979 -10.923 2.092 c -3.003 1.13 -5.723 2.901 -7.97 5.19 c -2.29 2.248 -4.061 4.968 -5.192 7.97 c -1.112 2.862 -1.872 6.133 -2.09 10.923 C 0.052 31.246 0 32.779 0 45 s 0.052 13.754 0.272 18.553 c 0.219 4.79 0.979 8.061 2.092 10.923 c 1.13 3.003 2.901 5.723 5.19 7.97 c 2.248 2.289 4.968 4.06 7.97 5.19 c 2.862 1.112 6.133 1.873 10.923 2.092 C 31.247 89.948 32.779 90 45 90 s 13.754 -0.052 18.553 -0.271 c 4.79 -0.219 8.061 -0.979 10.923 -2.092 c 6.044 -2.338 10.823 -7.116 13.161 -13.161 c 1.112 -2.862 1.873 -6.133 2.092 -10.923 C 89.948 58.754 90 57.221 90 45 s -0.052 -13.754 -0.271 -18.553 c -0.219 -4.79 -0.979 -8.061 -2.092 -10.923 c -1.13 -3.003 -2.901 -5.723 -5.19 -7.97 c -2.248 -2.29 -4.968 -4.061 -7.971 -5.191 c -2.862 -1.112 -6.133 -1.872 -10.923 -2.09 C 58.754 0.052 57.221 0 45 0 L 45 0 L 45 0 z"
                            style={{
                                stroke: 'none',
                                strokeWidth: 1,
                                strokeDasharray: 'none',
                                strokeLinecap: 'butt',
                                strokeLinejoin: 'miter',
                                strokeMiterlimit: 10,
                                fill: 'rgb(166,55,149)',
                                fillRule: 'nonzero',
                                opacity: 1,
                            }}
                            transform="matrix(1 0 0 1 0 0)"
                            strokeLinecap="round"
                            />
                            <path
                            d="M 45 21.892 c -12.762 0 -23.108 10.346 -23.108 23.108 S 32.238 68.108 45 68.108 S 68.108 57.762 68.108 45 l 0 0 C 68.108 32.238 57.762 21.892 45 21.892 z M 45 60 c -8.284 0 -15 -6.716 -15 -15 s 6.716 -15 15 -15 c 8.284 0 15 6.716 15 15 C 60 53.284 53.284 60 45 60 z"
                            style={{
                                stroke: 'none',
                                strokeWidth: 1,
                                strokeDasharray: 'none',
                                strokeLinecap: 'butt',
                                strokeLinejoin: 'miter',
                                strokeMiterlimit: 10,
                                fill: 'rgb(166,55,149)',
                                fillRule: 'nonzero',
                                opacity: 1,
                            }}
                            transform="matrix(1 0 0 1 0 0)"
                            strokeLinecap="round"
                            />
                            <circle
                            cx="69.02"
                            cy="20.98"
                            r="5.4"
                            style={{
                                stroke: 'none',
                                strokeWidth: 1,
                                strokeDasharray: 'none',
                                strokeLinecap: 'butt',
                                strokeLinejoin: 'miter',
                                strokeMiterlimit: 10,
                                fill: 'rgb(166,55,149)',
                                fillRule: 'nonzero',
                                opacity: 1,
                            }}
                            transform="matrix(1 0 0 1 0 0)"
                            />
                        </g>
                        </svg>
                    </a>
                </li>
                <li className="ms-3">
                    <a>
                        <svg width="45" height="45" viewBox="0 0 256 256">
                        <defs>{/* SVG defs here */}</defs>
                        <g
                            style={{
                            stroke: 'none',
                            strokeWidth: 0,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: 'none',
                            fillRule: 'nonzero',
                            opacity: 1,
                            }}
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                        >
                            {/* SVG content here */}
                            <circle
                            cx="45"
                            cy="45"
                            r="45"
                            style={{
                                stroke: 'none',
                                strokeWidth: 1,
                                strokeDasharray: 'none',
                                strokeLinecap: 'butt',
                                strokeLinejoin: 'miter',
                                strokeMiterlimit: 10,
                                fill: 'rgb(60,90,153)',
                                fillRule: 'nonzero',
                                opacity: 1,
                            }}
                            transform="matrix(1 0 0 1 0 0)"
                            />
                            <path
                            d="M 49.645 74.998 V 47.631 h 9.186 l 1.375 -10.665 H 49.645 v -6.809 c 0 -3.088 0.857 -5.192 5.285 -5.192 l 5.648 -0.002 v -9.539 c -0.977 -0.13 -4.329 -0.42 -8.23 -0.42 c -8.143 0 -13.717 4.97 -13.717 14.098 v 7.865 h -9.209 v 10.665 h 9.209 v 27.367 H 49.645 z"
                            style={{
                                stroke: 'none',
                                strokeWidth: 1,
                                strokeDasharray: 'none',
                                strokeLinecap: 'butt',
                                strokeLinejoin: 'miter',
                                strokeMiterlimit: 10,
                                fill: 'rgb(255,255,255)',
                                fillRule: 'nonzero',
                                opacity: 1,
                            }}
                            transform="matrix(1 0 0 1 0 0)"
                            strokeLinecap="round"
                            />
                        </g>
                        </svg>
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-white" href="#">
                        <svg width="45" height="45" viewBox="0 0 256 256">
                        <defs>{/* SVG defs here */}</defs>
                        <g
                            style={{
                            stroke: 'none',
                            strokeWidth: 0,
                            strokeDasharray: 'none',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeMiterlimit: 10,
                            fill: 'none',
                            fillRule: 'nonzero',
                            opacity: 1,
                            }}
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                        >
                            {/* SVG content here */}
                            <path
                            d="M 28.303 81.565 c 33.962 0 52.538 -28.138 52.538 -52.538 c 0 -0.799 0 -1.595 -0.054 -2.387 c 3.614 -2.614 6.733 -5.85 9.212 -9.558 c -3.37 1.493 -6.945 2.473 -10.606 2.905 c 3.855 -2.308 6.74 -5.937 8.118 -10.213 c -3.625 2.151 -7.59 3.667 -11.725 4.482 c -6.993 -7.436 -18.69 -7.795 -26.126 -0.802 c -4.796 4.51 -6.83 11.23 -5.342 17.643 C 29.473 30.352 15.64 23.34 6.264 11.804 c -4.901 8.437 -2.398 19.231 5.717 24.649 c -2.939 -0.087 -5.813 -0.88 -8.381 -2.311 c 0 0.076 0 0.155 0 0.234 c 0.002 8.79 6.198 16.36 14.814 18.101 c -2.718 0.741 -5.571 0.85 -8.338 0.317 c 2.419 7.522 9.351 12.675 17.251 12.823 c -6.539 5.139 -14.616 7.928 -22.932 7.92 C 2.926 73.534 1.459 73.445 0 73.27 c 8.444 5.419 18.27 8.293 28.303 8.28"
                            style={{
                                stroke: 'none',
                                strokeWidth: 1,
                                strokeDasharray: 'none',
                                strokeLinecap: 'butt',
                                strokeLinejoin: 'miter',
                                strokeMiterlimit: 10,
                                fill: 'rgb(29,161,242)',
                                fillRule: 'nonzero',
                                opacity: 1,
                            }}
                            transform="matrix(1 0 0 1 0 0)"
                            strokeLinecap="round"
                            />
                        </g>
                        </svg>
                    </a>
                </li>
              </ul>
            </footer>
          </div>
    );
}

export default Footer;