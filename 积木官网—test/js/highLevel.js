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
    var saleBtn=document.querySelector('.saleBtn');
    var hideMenu=document.querySelector('.hideMenu');
    var triangle=document.querySelector('.triangle');
    var flag1=0;
    saleBtn.addEventListener('click',function(){
        if(flag1==0){
            hideMenu.style.display='none';
            triangle.style.display='none';
            flag1=1;
        }else{
            hideMenu.style.display='block';
            triangle.style.display='block';
            flag1=0;
        }
       
    })
    var ulnav1=document.querySelector('.ul1');
    var ulnav2=document.querySelector('.ul2');
    var lis1=ulnav1.querySelectorAll('li');
    console.log(ulnav2);
    for(var i=0;i<lis1.length;i++){
        lis1[i].onclick=function(){
            for(var i=0;i<lis1.length;i++){
                lis1[i].className='';     
            }
            this.className='current';
            for(var i=0;i<ulnav2.length;i++){
                ulnav2[i].style.display='none';
            }
            ulnav2[i].style.display='block';
        
            
        }   

    }
    
})
