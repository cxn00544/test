
$(function(){
    var timer=setInterval(()=>{
        $(".tanchuang").show();
    },5000);
    
    $(".nexttime").click(function(){
        $(".tanchuang").hide();
        clearInterval(timer)
    })
    $(".minddle_search").click(function(){
        location.href="http://127.0.0.1:5500/html/search.html";
    })

    $(".fotter_index").click(function(){
        $(this).addClass("current").siblings().removeClass("current");  
    })
    var _width = $(document).height();
    alert(_width)

    if( _width < 667){
       alert(width)
       alert(_width)
    }
   
    //     let demo=document.querySelector('.fotter')
    //     let topp=demo.offsetTop
    //     window.onscroll=function(){
    //     let scroll=Math.floor(document.documentElement.scrollTop)
    //     let maxScr=document.body.offsetHeight-window.innerHeight
    //     // let percent=(scroll*100/maxScr)+'%'
    //     // $('')
    //     if(scroll > topp){
    //         demo.style.position='fixed'

    //     }else{
    //         demo.style.position='static'
    //     }
    // }
    // $(window).scroll(function(){
    //     if($(window).scrollTop() == $(document) .height() -$(window).height()){
    //         alert("已经到地步了")
    //     }
    // })

   
    var mySwiper=new Swiper('.swiper',{
        //无缝循环
        loop:true,
        pagination:{
            el:'.swiper-pagination',
        },
        autoplay:{
            delay:1000,
            disableOnInteraction:false,
        }
    })
})

