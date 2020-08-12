import theme from '@theme-ui/preset-future'
import { merge } from "theme-ui"

// merge will deeply merge custom values with the
// unknown theme's defaults
export default merge(theme, {
  colors: {
    // text: "#222",
    // primary: "tomato",
    heading: "#999"
  },
  sizes: {
    container: "600px",
  },
  text: {
    heading: {
      color: "heading"
    }
  }
  
})