window.addEventListener('load',function(){
    var btn=document.querySelector('.huoqu');
    var input=document.querySelectorAll('input');
    var tijiao=document.querySelector('.tijiao');
    var form=document.querySelector('form');
     var phone=document.querySelector('.phone');
    var time=3;
        btn.addEventListener('click',function(){
            btn.disable=true;
            var timer=setInterval(function(){
                if(time==0){
                    clearInterval(timer);
                    btn.disabled=false;
                    btn.innerHTML='获取验证码';
                    time=3;
                }
            else{
                btn.innerHTML='还剩下'+time+'秒';
                
                time--;
            }
            },1000);
        });

        tijiao.addEventListener('click',function(){

            for(var i=0;i<input.length;i++){
                if(input[i].value==''||input[i].value==null){
                    alert('表单内容不能为空');
                   input[i].focus();
                
                        if(phone.length!=11){
                        //    phone.ariaPlaceholder='手机格式不符合要求';
                             alert('手机格式不符合要求');
                        
                            
                        }   
                        return false;
                        
                }
                }
            alert('提交成功');
        });

})