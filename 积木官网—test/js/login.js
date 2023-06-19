$(function(){
  $('.login_btn').click(function(){
      var phone=$("#tel").val();
      var phones=/^1[3456789]\d{9}$/;

      var target=$(".login-error-dialog-mag")
      var target_yzm=$("#fm-smscode")
      // $(".login-error-dialog-mask").show();
      $('.login-error-dialog-mask').click(function(){
      $(".login-error-dialog-mask").hide();
      })

    //判断手机输入框是否为空
      if(phone==''){
          $(".login-error-dialog-mask").show();
          target.html("请输入手机号码")
      }else if(!phones.test(phone)){
              $(".login-error-dialog-mask").show();
              target.html("手机的输入有误")
            }else if(target_yzm==''){
                alert("biscvsdi")
                (".login-error-dialog-mask").show();
                target.html("请输入验证码")
                }

  //  function check(obj){
  //   var value=$(obj).val();
  //   var value_length=value.length;
  //   if(length>5){
  //     value=value.substring(0,5);
  //     alert("cbshdvcdjcv")
  //     $(obj).val(value);
  //   }
  //  }
    
    })
    
    //限制输入框的长度

    $(".input-plain-wrap").keydown(function(){
    $(".del-btn_number").show();
    })
    $("#fm-smscode").keydown(function(){
    $(".del-btn_yzm").show();
    })

var btn=$(".send-btn")
  var btn=document.querySelector('.send-btn');
  var time=10;
  btn.addEventListener('click',function(){
      btn.disable=true;
      // btn.innerHTML='还剩下10s';
      var timer=setInterval(function(){
          if(time==0){
              //清除定时器，恢复按钮
              clearInterval(timer);
              btn.disabled=false;
              btn.innerHTML='获取验证码';
              //得重新开始,没有再设置time会不能点击了
              time=10;
          }else{
              btn.innerHTML='还剩下'+time+'秒';
              time--;
          }
      },1000);
  })

  $(".del-btn_number").click(function(){
    $("#tel").val("")
    $(".del-btn_number").hide();
  })
  $(".del-btn_yzm").click(function(){
    $("#fm-smscode").val("")
    $(".del-btn_yzm").hide();
  })
  $("#fm-agrreement-checkbox").click(function(){
 $("#fm-agrreement-checkbox").toggleClass('.addclass')

  })
 
  
})
