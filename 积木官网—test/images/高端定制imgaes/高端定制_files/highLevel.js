window.addEventListener('load',function(){
    var  mySwiper=new Swiper('.swiper',{
        loop:true,
        pagination:{
            el:'.swiper-pagination',
        },
        autoplay:{
            delay:1000,
         
        }
    })
    var ulnav1=document.querySelector('.ul1');
    var ulnav2=document.querySelector('.ul2');
    var lis1=ulnav1.querySelectorAll('li');
    
    for(var i=0;i<lis1.length;i++){
        lis1[i].onclick=function(){
            for(var i=0;i<lis1.length;i++){
                lis1[i].className='';     
            }
            this.className='current';
        }
        

    }
    
})