import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

//register all plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MotionPathHelper);

const mainTL = gsap.timeline({id:"mainTL"});

mainTL.to("#Ellipse", {duration: 1, morphSVG: "#Star"});
// function imageMorph(){
//     let tl = gsap.timeline();
    
// tl.to("#Ellipse", {duration: 1, morphSVG: "#Star"}, "+=1")
//   .to("#Ellipse", {duration: 1, morphSVG: "#Circle"}, "+=1");

//   return tl;

// }

mainTL.add(imageMorph())
;


GSDevTools.create();