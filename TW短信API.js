let TW短信API = {
    登陆:function(){
        var urls = http.post("http://api.dk827.com/index.php/reg/login", {
            "username": "kstd2016",
            "password": "1987223",
        }).body.json();
        sleep(1000)
        if(urls.errno==0){
            token=urls.ret.token;
            return token
        }
        else{
            toastLog("登陆失败！\n原因："+urls.errmsg)
            return "登陆失败！\n原因："+urls.errmsg
        }
    },


    获取项目:function(token){ 
        var urls = http.post("http://api.dk827.com/index.php/card/project", {
            "token": token,
            "method":"1"
        }).body.json();
        if(urls.errno==0){
            项目ID=urls.ret.id;
            return 项目ID
        }
        else{toastLog("获取号码失败！\n原因："+urls.errmsg)}
    },


    获取号码:function(token,t,pid){ 
        var urls = http.post("http://api.dk827.com/index.php/clients/online/setWork", {
            "token": token,
            "t": t,
            "pid": pid,
        }).body.json();
        if(urls.errno==0){
            手机号码=urls.ret.number;
            return 手机号码
        }
        else{toastLog("获取号码失败！\n原因："+urls.errmsg)}
    },


    获取验证码:function(token,手机号码){  
        var urls = http.post("http://api.dk827.com/index.php/clients/sms/getSms", {
            "token": token,
            "project": "144",
            "number": 手机号码,
            "type": "1",
        }).body.json();
        if(urls.errno==0){
            验证码=urls.ret.tst
            return 验证码
        }
        else{
            toastLog("获取验证码失败！\n原因："+urls.errmsg);
            return "获取验证码失败！\n原因："+urls.errmsg
        }
    },


    释放号码:function(token,手机号码){  
        var urls = http.post("http://api.dk827.com/index.php/reg/loginOut", {
            "token": token,
            "number": 手机号码,
        }).body.json();
        if(urls.errno==0){
            return "释放号码成功"
        }
        else{
            toastLog("释放号码失败！\n原因："+urls.errmsg)
            return "释放号码失败！\n原因："+urls.errmsg

        }
    },


    退出:function(token){  
        var urls =http.post("http://api.dk827.com/index.php/reg/loginOut", {
        "token": token,
    }).body.json();
    if(urls.errno==0){}
    else{toastLog("退出失败！\n原因："+urls.errmsg);return "退出失败"}
    },


    心跳:function(token){ 
        var urls = http.post("http://api.dk827.com/index.php/token", {
            "token": token,
        }).body.json();
        if(urls.errno==0){}
        else{toastLog("退出失败！\n原因："+urls.errmsg)}
        },
}
module.exports = TW短信API
