import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

const Banner = props => {
  return (
    // <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin3.min.js"></script>
    <div className="banner-wrapper">
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin3.min.js"></script>
      <div
        className="banner-image"
        // style={{ backgroundImage: `radial-gradient(circle at top left,
        //   rgba(149, 109, 142, 0.5),
        //   rgba(0, 0, 0, 0.5)),url(${props.image})`}}
        // style={{ backgroundImage: `radial-gradient(circle at top left,
        //   rgba(149, 109, 142, 0.5),
        //   rgba(0, 0, 0, 0.5))`}}
          // style={{ backgroundImage: `radial-gradient(circle at top left,
          //   rgba(80, 80, 127),
          //   rgba(39, 39, 81))`}}
      >
        <div className="banner-text">
          {props.bannerText.map((text, index) => {
            return (
              <div className="inner-content" key={index}>
                {text}
              </div>
            );
          })}
        </div>
      </div>
      {/* <div class="ghost-container">
        <img src="https://media.giphy.com/media/dVp67j8xo6WclnKfIH/giphy.gif"/>
  <div class="ghost">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 249.17 340.472">
  <defs>
    <clipPath id="clip-path">
      <path id="ghost_body" d="M4.141,290.52c-12.085-10.811,5.484-39.237,12.02-82.326,7.4-48.816,2.312-81.382,9.82-122.634S60.888-1.948,129.782.063s94.434,60.777,96.558,102.753-4.363,72.9-4.363,122.419,22.331,60.736,4.363,77.881-42.377-14.51-71.871-12.6-22.475,19.758-42.81,18.112S92.189,290.068,66.133,285,29.909,313.572,4.141,290.52Z" transform="translate(0 12.212) rotate(-3)" fill="#fff" opacity="0"/>
    </clipPath>
    <linearGradient id="linear-gradient" x1="1.304" y1="1.131" x2="0" y2="-1.214" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/>
      <stop offset="1" stop-color="#a4abd6"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="1.304" y1="1.131" x2="1" y2="-1.306" xlinkHref="#linear-gradient"/>
    <linearGradient id="linear-gradient-3" x1="1.304" y1="1.131" x2="-1.05" y2="-0.423" xlinkHref="#linear-gradient"/>
    <linearGradient id="linear-gradient-4" x1="0.584" y1="1.071" x2="0.552" y2="-0.708" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#ff6197"/>
      <stop offset="1" stop-color="#ff96ba"/>
    </linearGradient>
    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="1.312" gradientTransform="matrix(0.696, 0.718, -0.686, 0.665, 0.495, -0.192)" xlinkHref="#linear-gradient-4"/>
    <filter id="Path_9" x="5.936" y="0" width="110.603" height="99.124" filterUnits="userSpaceOnUse">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feFlood flood-opacity="0.102"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <radialGradient id="radial-gradient-2" cx="0.329" cy="-0.411" r="1.312" gradientTransform="matrix(0.696, 0.718, -0.686, 0.665, 0.495, -0.192)" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#ff6197"/>
      <stop offset="1" stop-color="#ff8ab2"/>
      <stop offset="1" stop-color="#ff96ba"/>
    </radialGradient>
  </defs>
  <g id="ghost" transform="translate(-276.052 -201.395)">
    <path id="ghost_body_base" d="M4.141,290.52c-12.085-10.811,5.484-39.237,12.02-82.326,7.4-48.816,2.312-81.382,9.82-122.634S60.888-1.948,129.782.063s94.434,60.777,96.558,102.753-4.363,72.9-4.363,122.419,22.331,60.736,4.363,77.881-42.377-14.51-71.871-12.6-22.475,19.758-42.81,18.112S92.189,290.068,66.133,285,29.909,313.572,4.141,290.52Z" transform="translate(276.052 233.551) rotate(-3)" fill="#fff" opacity="0.9"/>
    <g id="ghost_body_shadows" transform="translate(276.052 221.34)" clip-path="url(#clip-path)">
      <path id="shadow_right" d="M1003,853.321s-2.741-16.8,0-40.867,5.309-36.062,10.447-37.127,2.394,9.767,10.107,32.865a164.293,164.293,0,0,0,21.26,41.24Z" transform="translate(-852.257 -548.175)" fill="url(#linear-gradient)"/>
      <path id="shadow_left" d="M1043.6,853.321s2.741-16.8,0-40.867-5.309-36.062-10.447-37.127-2.394,9.767-10.107,32.865a164.3,164.3,0,0,1-21.26,41.24Z" transform="translate(-938.685 -548.175)" fill="url(#linear-gradient-2)"/>
      <path id="body_shadow" d="M1118.184,1058.816s22.844-46.579,18.218-84.863c-7.324-60.6-29.463-121.626-31.428-137.554-3.205-25.984-67.289-50.446-73.3-51.6-4.218-.808,26.954,14.563,46.284,46.194,8.194,13.409,14.086,31.246,17.688,60.692s-14.006,167.128-14.006,167.128Z" transform="translate(-875.618 -779.802)" fill="url(#linear-gradient-3)"/>
    </g>
    <g id="eyes" transform="translate(358.337 304.954)">
      <circle id="eye_left_open" data-name="Ellipse 1" cx="8" cy="8" r="8" transform="translate(0.663 0.046)" fill="#343434"/>
      <path id="eye_left_close" transform="translate(-1 10)" data-name="Path 11" d="M9.9,0c5.468,0,9.9,3.539,9.9,7.905S20.5,2.652,9.9,2.818,0,12.271,0,7.905,4.435,0,9.9,0Z" transform="translate(-3.995)" fill="#343434"/>
      <circle id="eye_right_open" transform="translate(69.037 0)" data-name="Ellipse 1" cx="7.905" cy="7.905" r="7.905" fill="#343434"/>
      <path id="eye_right_close" transform="translate(67 10)" data-name="Path 11" d="M9.9,0c5.468,0,9.9,3.539,9.9,7.905S20.5,2.652,9.9,2.818,0,12.271,0,7.905,4.435,0,9.9,0Z" transform="translate(-3.995)" fill="#343434"/>
    </g>
    <g id="shine">
      <path id="shine-2" data-name="shine" d="M23.6-1.731S12.566,9.766,6.666,24.086,1.04,55.025,0,55.545" transform="matrix(1, -0.017, 0.017, 1, 321.998, 270.727)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
      <path id="Path_7" data-name="Path 7" d="M-996.405-968.088l2.993-2.506" transform="translate(1209.463 1355.371) rotate(8)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
    </g>
    <g id="mouth">
      <path id="Path_6" data-name="Path 6" d="M902.044,667.746s7.668,8.721,22.165,8.312S943.166,665.9,943.166,665.9" transform="translate(-520.069 -330.96)" fill="none" stroke="#343434" stroke-linecap="round" stroke-width="2"/>
      <path id="tongue" d="M1.192,9.672q-.012-.171-.009-.34L.35-.786a55.368,55.368,0,0,0,7.795.769,51.971,51.971,0,0,0,7.64-.728l-.618,9.608a4.048,4.048,0,0,1-.048.747l-.006.094H15.1c-.45,2.474-3.156,4.509-6.559,4.747q-.329.023-.653.023C4.322,14.474,1.384,12.415,1.192,9.672Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 387.32, 341.895)" fill="url(#linear-gradient-4)"/>
    </g>
    <g id="bow" transform="matrix(0.819, -0.574, 0.574, 0.819, -23.958, 310.446)">
      <g transform="matrix(0.82, 0.57, -0.57, 0.82, 308.3, 82.75)" filter="url(#Path_9)">
        <path id="Path_9-2" data-name="Path 9" d="M-1.595-.664c7.788-3.7,31.153,12.418,31.153,12.418h4.924S57.294-5.905,64.9-2.209s7.6,23.869,0,28.747-30.416-7.692-30.416-7.692H29.558S8.208,31.415.42,26.537-9.383,3.032-1.595-.664Z" transform="matrix(0.82, -0.57, 0.57, 0.82, 27.84, 57.72)" fill="url(#radial-gradient)"/>
      </g>
      <path id="Path_10" data-name="Path 10" d="M0,0H7.908V9.038H0Z" transform="translate(325.959 156.52)" fill="url(#radial-gradient-2)"/>
    </g>
  </g>
    </svg>
  </div>
  <div class="shadow"></div> 
</div> */}
    </div>
  );
};

Banner.defaultProps = {
  image: "",
  bannerText: []
};

Banner.propTypes = {
  image: PropTypes.string,
  bannerText: PropTypes.array
};

// MorphSVGPlugin.convertToPath("#eye_right_open");
// MorphSVGPlugin.convertToPath("#eye_left_open");

// let defaultTimeline = {
//   repeat: -1, 
//   yoyo: true
// }
// let timeline1 = gsap.timeline(defaultTimeline);
// let timeline2 = gsap.timeline(defaultTimeline);

// timeline1.to("#eye_right_open", {
//   morphSVG:"#eye_right_close",
//   duration: 0.3,
//   delay: 0.8
// })

// timeline2.to("#eye_left_open", {
//   morphSVG:"#eye_left_close",
//   duration: 0.3,
//   delay: 0.8
// })

export default Banner;
