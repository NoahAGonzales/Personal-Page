//Under the assupmtion that all things affected by gravity have an equal width and height
let gravityRange = 5
let gravityStrength = 100

let gravitate = function($elementG) {
   $elementG.each(function() {
      let $selfG = $(this)
      let inRange = false
      let onInRange = function(x, y, d, r) {
         TweenMax.to($selfG, 5, {
            x: x*gravityStrength / Math.sqrt(r) / d,
            y: y*gravityStrength / Math.sqrt(r) / d,
            ease: setInterval.easeInOut,
         })
      }
   

      let eventListener = function() {
         $(window).on("mousemove", function(e) {
            let width = $selfG.outerWidth()

            let cursor = {
               x: e.clientX,
               y: e.clientY + $(window).scrollTop(),
            }

            let elementPosG = {
               x: $selfG.offset().left + width/2,
               y: $selfG.offset().top + $selfG.outerHeight()/2
            }

            let distance = Math.sqrt(Math.pow((cursor.x-elementPosG.x), 2) + Math.pow((cursor.y-elementPosG.y), 2))

            //Let gravity affect it
            if(distance < width * gravityRange) {
               console.log(cursor.x, cursor.y, elementPosG.x, elementPosG.y)
               console.log(cursor.x-elementPosG.x, cursor.y-elementPosG.y)
               onInRange(cursor.x-elementPosG.x, cursor.y-elementPosG.y, distance, width/2)
            }
         })
      }

      eventListener()
   })
}

gravitate($('.rock'))