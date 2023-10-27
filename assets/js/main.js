$(document).ready(function () {
    function count(number, selector){
        var counter = { var: 0 };
        TweenMax.to(counter, 2, {
          var: number, 
          onUpdate: function () {
            var number = Math.ceil(counter.var);
            $(selector).html(number);
            if(number === counter.var){ count.kill(); }
          },
          onComplete: function(){
            count();
          },    
          ease:Circ.easeOut
        });
      }
    
      function verificarVisivility(e){
        let entry = e[0];
        if(entry.isIntersecting){
            setTimeout(() => {
                count(2000, '.counter');
                count(14000, '.counter2');
                count(33000, '.counter3');
                count(67, '.counter4'); 
            }, 500);
        }else{
            let elementos = document.querySelectorAll('.contadores');
            elementos.forEach(elem => {
                elem.innerHTML= '0'
            });
        }
      } 
      const observer = new IntersectionObserver(verificarVisivility, {});
      const element = document.querySelector('.section-seis');
      observer.observe(element);
   
})
