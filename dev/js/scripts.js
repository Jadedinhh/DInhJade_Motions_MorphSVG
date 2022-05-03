import { gsap } from "gsap";
// // import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// // import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// //register all plugins
// // gsap.registerPlugin( DrawSVGPlugin, MorphSVGPlugin);

// const mainTL = gsap.timeline({id:"mainTL"});


// function imageMorph(){
//     let tl = gsap.timeline();
    
// // tl.to("#Ellipse", {duration: 1, morphSVG: "#Star"}, "+=1")
// //   .to("#Ellipse", {duration: 1, morphSVG: "#Circle"}, "+=1");

//   return tl;

// }

// mainTL.add(imageMorph())
// ;

gsap.to("#Ellipse", {duration:1, scale: 0.5});