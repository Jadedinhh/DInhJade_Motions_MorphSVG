import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

//register all plugins
gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

const mainTL = gsap.timeline({id:"mainTL"});


function imageMorph(){
    let tl = gsap.timeline();
    
tl.to("#Ellipse", {duration: 1, morphSVG: "#Star"}, "+=1")
  .to("#Ellipse", {duration: 1, morphSVG: "#Circle"}, "+=1");

  return tl;

}

mainTL.add(imageMorph())
;
