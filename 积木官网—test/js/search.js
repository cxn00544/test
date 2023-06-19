window.addEventListener('load',function(){
    
    // var rightnav_three=document.querySelector('.rightnav_three');
    // var ipt=this.document.querySelector(input)
    // //这里不使用keydown的原因是keydown按下就触发事件，搜索框就会输入值，但是keyup不会，按下弹起才触发事件
    // rightnav_three.addEventListener('keyup',function(e){
    //     // input.style.border='none';
        
        
    // })
   $(".leftnav").click(function(){
   location.href="http://127.0.0.1:5500/html/taobao.html";
   })
    var flag=0;
    $(".rightnav_one").click(function(){
        if(flag==0){
            // $(".hideMenu").hide();
            // $(".hideMenu").addClass('current');
            $(".hideMenu").css('display',"flex");
            // $(".goods").css("color","#ff5000");
            flag=1;
            $(".goods").click(function(){
                $(".goods").css("color","#ff5000");
                $(".store").css("color","#ccc");
                $(".rightnav_one span").html("商品");
                $(".hideMenu").hide();
            })
            $(".store").click(function(){
                $(this).css("color","#ff5000");
                $(".goods").css("color","#ccc");
                $(".rightnav_one span").html("店铺");
                $(".hideMenu").hide();
            })
        }
        else{
            // $(".hideMenu").show();
            // $(".hideMenu").removeClass('current');
            $(".hideMenu").css('display',"none");
            flag=0;
        }
    })
    var flags=0;
    $(".eye-find").click(function(){
        if(flags==0){
            $(".history_search").hide();
            $(".txtHide").show();
            flags=1;
            
        }else{
            $(".history_search").show();
            $(".txtHide").hide();
            flags=0;
        }
    })
})