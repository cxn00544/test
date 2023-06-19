const isHaveId = () => {
    let loginId = loginIdEle.value
    //遍历存储的信息,如果有id相同的则返回true
    let idHave=message.some(item => loginId == item.id)
    //如果结果为true，显示内容为空，否则，显示账号不存在
    if (idHave==true) {
        loginIdText.innerHTML = ''
        return true
    } else {
        loginIdText.innerHTML = '账号不存在！'
        return false
    }
}
//验证密码
const isHavePassword = () => {
    let loginPassword = loginPasswordEle.value
    let passwordHave=message.some(item =>loginPassword == item.password )
        if (passwordHave==false) {
            loginPasswordText.innerHTML = '密码错误！'
            return false
        } else {
            loginPasswordText.innerHTML = ''
            return true
        }
}
//点击事件
var loginBtn=document.querySelector('.loginBtn')
loginBtn.onclick = function () {
    let isEmptyChecjedId = emptyChecjedId()
    let isEmptyChecjedPassword = emptyChecjedPassword()
    if (!isEmptyChecjedId || !isEmptyChecjedPassword) {
        return
    }
    let idHave = isHaveId()
    let passwordHave = isHavePassword()
 
    if (!idHave ||!passwordHave ) {
        return
    }
    alert('登录成功！')
    loginIdEle.value = ''
    loginPasswordEle.value = ''
}
 
//焦点事件
loginIdEle.addEventListener('blur', function () {
    let isEmptyChecjedId = emptyChecjedId()
    if (!isEmptyChecjedId) {
        return
    }
    isHaveId()
 
})
//密码焦点事件
loginPasswordEle.addEventListener('blur', function () {
    let isEmptyChecjedPassword = emptyChecjedPassword()
    //如果为空，则不进行强度验证，不为空时，再进行强度验证
    if (!isEmptyChecjedPassword) {
        return
    }
    isHavePassword()
})
//点击注册跳转到注册界面
function toRegister() {
    const toRegisterEle = document.querySelector('.registerBtn')
    toRegisterEle.onclick = function () {
        location.href = './register.html'
    }
}
toRegister()