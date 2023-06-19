window.addEventListener('load',function(){
    var btn=document.querySelector('.glyphicon-menu-hamburger');
    var local=document.querySelector('.local');

    var heads=document.querySelector('.head');
    var fuwus=document.querySelector('.fuwu');

    var flag=0;
    var flags=0;
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
   
    var spanup=document.querySelector('.box-seven-icon');
    var spandown=document.querySelector('.box-seven-icon2');
     var txt=document.querySelector('box-seven-txt');
    var box_seven=document.querySelector('.box-seven');
    var liss=box_seven.querySelectorAll('li');
    for(var i=0;i<liss.length;i++){
        liss[i].setAttribute('index',i);
        liss[i].addEventListener('click',function(){
            for(var i=0;i<liss.length;i++){
                liss[i].className='current';
            }
            this.className='currents';
            var index=this.getAttribute('index');
            console.log(index);
        })}

    //验证码
    var btn2=document.querySelector('.huoqu');
    var input=document.querySelectorAll('input');
    var subbtn=document.querySelector('.subbtn');
    var form=document.querySelector('form');
    var phone=document.querySelector('.phone');
    var reds=document.querySelectorAll('.reds');
    var time=10;
        btn2.addEventListener('click',function(){
            var time=10;
            btn2.disable=true;
            var timer=setInterval(function(){
                if(time==0){
                    clearInterval(timer);
                    btn2.disabled=false;
                    btn2.innerHTML='获取验证码';
                    time=10;
                }
            else{
                btn2.innerHTML='还剩下'+time+'秒';
                time--;
            }
            },1000);
        });
       
        subbtn.addEventListener('click',function(){
            var uname=document.querySelector('.uname').value;
            var number=document.querySelector('.phone').value;
            var teshu=document.querySelector('.teshu').value;
            var companyName=document.querySelector('.companyName').value;
            console.log(teshu);
            console.log(uname);
            console.log(number);
            console.log(companyName);

            for(var i=0;i<input.length;i++){
                if(input[i].value==''||input[i].value==null){
                    if(number.length!=11){
                    reds[i].style.display='block';
                    }
                    reds[i].style.display='block';
                    input[i].focus();
                    return false;
                        
                }else{
                    reds[i].style.display='none';
                }
                }
            alert('提交成功');
        });
       
        //电话咨询
        var mobilephone=document.querySelector('.mobilephone');
        var phone_num=document.querySelector('.phone-num');
        var copyNums=document.querySelectorAll('.copyNum');
        var wechat=document.querySelector('.wechat');
        var erweimaMenu=document.querySelector('.erweimaMenu');
         var flag1=0;
        mobilephone.addEventListener('click',function(){
            if(flag1==0){
                phone_num.style.display='block';
                flag1=1;
                for(var i=0;i<copyNums.length;i++){
                    copyNums[i].addEventListener('click',function(){
                        alert('复制成功');
                    });
                }
               
            }
            else{
                phone_num.style.display='none';
                flag1=0;
            }
        });

        //微信客服
        var flag2=0;
        wechat.addEventListener('click',function(){
            if(flag2==0){
                erweimaMenu.style.display='block';
                flag2=1;
               
            }else{
                erweimaMenu.style.display='none';
                flag2=0;
                
            }
        });
        //
}
)

