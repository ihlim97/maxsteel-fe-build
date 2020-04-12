// Import the main styles
import "../scss/main.scss";

// Polyfills for Internet Explorer
import "core-js/stable";

// SVG Polyfill for Internet Explorer
import svg4everybody from 'svg4everybody';
svg4everybody()

// Import vendor libraries
import "bootstrap";

// Import the JS components
import "./components/navigation";
import "./components/carousels";
import "./components/parallax";
import "./components/forms";