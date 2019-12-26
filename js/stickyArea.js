let goob = function ($element) {
   $element.each(function() {
      let $self = $(this)
      let hover = false

      let onHover = function (x, y) {
         TweenMax.to($self, 0.5, {
            x: x * 0.15,
            y: y * 0.15,
            scale: 1.05,
            rotation: x * 0.005,
            ease: Power2.easeOut
        })
      }

      let onLeave = function () {
         TweenMax.to($self, 0.7, {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            ease: Elastic.easeOut.config(1.2, 0.4)
        });
      }

      let eventListener = function() {
         $(window).on("mousemove", function(e) {
            let width = $self.outerWidth()
            
            let cursor = {
               x: e.clientX,
               y: e.clientY + $(window).scrollTop()
            }
         
            elementPos = {
               x: $self.offset().left + width/2,
               y: $self.offset().top + $self.outerHeight()/2
            }

            let distance = Math.sqrt(Math.pow((cursor.x-elementPos.x), 2) + Math.pow((cursor.y-elementPos.y), 2))
   
            let bigHover = false

            // Stick
            if(distance < width/2) {
               bigHover = true
               if(hover == false) {
                  hover = true
               }
               onHover(cursor.x-elementPos.x, cursor.y-elementPos.y)
            }

            // Reset sticking
            if (bigHover == false && hover == true) {
               onLeave()
               hover = false
            }
         })
      }

      eventListener()
   })
}


goob ($('#menu-button'))