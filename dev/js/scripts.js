import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin( DrawSVGPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const mainTL = gsap.timeline({id:"mainTL"});


function imageMorph(){
    let tl = gsap.timeline();
    
tl.to("#Ellipse", {duration: 2, morphSVG: "#Star", fill:"FFFFFF", stroke:"FFFFFF"}, "+=1")
  .to("#Ellipse", {duration: 1, morphSVG: "#Circle", fill:"FFA800", stroke:"A6B4FA"}, "+=1");

  return tl;

}

mainTL.add(imageMorph())
;

