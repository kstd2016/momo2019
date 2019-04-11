let 封装API = require(engines.myEngine().cwd() +"/封装API.js");
let 集成模块 = require(engines.myEngine().cwd() +"/集成模块.js");
//叔叔不约滑块类型captchaType:1318
toastLog("开始运行叔叔不约脚本...")
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
全局变量();
容错()
手机判断参数 = 集成模块.手机品牌判断()
进入叔叔不约();
for(let a=1;a<9999;a++){
    重新开始参数 = 0;
    返回主页参数++
    if(返回主页参数>=50){
        进入叔叔不约();
        开始聊天();
        返回主页参数 = 0
    }
    else{
        log("聊天循环===>"+a)
        if(账号参数 == "账号已死"){
            if(寻找字符串("叔叔不约","热点共享手机")){
                toastLog("识别为热点共享手机,准备切换IP...");
                集成模块.流量卡切换IP(手机判断参数);
                打开流量共享();
            }
            集成模块.多开分身善后(手机判断参数)
            集成模块.多开分身(切换IP方式,APP)
            集成模块.制作分身(切换IP方式,手机判断参数,地理位置)
            进入叔叔不约();
            账号参数 = "新账号";
        }
        开始聊天();
        if(聊天判断 != "对方离开了"){
            输入微信号();
        }
        if(重新开始参数>=5){
            进入叔叔不约();
        }
    }

}
function 全局变量(){
    易码账号 = "kstd2016";
    易码密码 = "1987223";
    联众账号 = "kstd2016";
    联众密码 = "Wentao1987223";
    qq = "ссЬЬ¹995º²"

    账号参数 = 0;
    接码成功 = 0;
    接码数量 = 0;
    获取号码参数 = 0;
    返回主页参数 = 0
    浏览器 = "QQ浏览器"
    回复等待时长 = 5
    打码总数量参数 = 0
    点击完成验证参数 = 0
    叔叔不约网站判断参数 = 0
    
    切换IP方式 = "流量卡IP"
    地理位置 = "0"
    APP = "猎豹浏览器"
    相似度 = 0.8

    叔叔不约重新开始保存路径 = "/sdcard/脚本图片/叔叔不约重新开始.png"
    叔叔不约重新开始下载地址 = "http://a3.qpic.cn/psb?/V13HoQ6D224qoC/mXV9PcKh8SqJbGzJEuNndU.jLm4oWhO4Xxgp6Boxdjo!/b/dFIBAAAAAAAA&ek=1&kp=1&pt=0&bo=vAAsAAAAAAADF6I!&tl=1&vuin=1536343278&tm=1554541200&sce=60-1-1&rf=viewer_4"
    集成模块.网络图片下载(叔叔不约重新开始下载地址,叔叔不约重新开始保存路径)
    叔叔不约反馈问题保存路径 = "/sdcard/脚本图片/叔叔不约反馈问题.png"
    叔叔不约反馈问题下载地址 = "http://a1.qpic.cn/psb?/V13HoQ6D224qoC/IFQNiH5C*9VQYu6TKaVspvBJtjnM4PHRVFLoG08M4x8!/b/dLgAAAAAAAAA&ek=1&kp=1&pt=0&bo=wAAtAAAAAAADF98!&tl=1&vuin=1536343278&tm=1554541200&sce=60-1-1&rf=viewer_4"
    集成模块.网络图片下载(叔叔不约反馈问题下载地址,叔叔不约反馈问题保存路径)
    叔叔不约离开保存路径 = "/sdcard/脚本图片/叔叔不约离开.png"
    叔叔不约离开下载地址 = "http://a3.qpic.cn/psb?/V13HoQ6D224qoC/OQmUVMXc45BW*tYGEWMxNIHJd3DfPp1gmUXdB3DDpl4!/b/dL4AAAAAAAAA&ek=1&kp=1&pt=0&bo=XQAtAAAAAAADF0I!&tl=1&vuin=1536343278&tm=1554541200&sce=60-1-1&rf=viewer_4"
    集成模块.网络图片下载(叔叔不约离开下载地址,叔叔不约离开保存路径)
    叔叔不约开始聊天保存路径 = "/sdcard/脚本图片/叔叔不约开始聊天.png"
    叔叔不约开始聊天下载地址 = "http://m.qpic.cn/psb?/V13HoQ6D224qoC/g2qSWTR96PSmti.wJVOSNFFZTyM2vJEs81I478.7Pno!/b/dMMAAAAAAAAA&bo=xQAtAMUALQADGTw!&rf=viewer_4"
    集成模块.网络图片下载(叔叔不约开始聊天下载地址,叔叔不约开始聊天保存路径)
    叔叔不约X图标保存路径 = "/sdcard/脚本图片/叔叔不约X图标.png"
    叔叔不约X图标下载地址 = "http://m.qpic.cn/psb?/V13HoQ6D224qoC/pOMdHpbIPuHweybk2poG*sOayG1NDvQMVwY5qVPHhK8!/b/dL8AAAAAAAAA&bo=IgAiAAAAAAADByI!&rf=viewer_4"
    集成模块.网络图片下载(叔叔不约X图标下载地址,叔叔不约X图标保存路径)
    叔叔不约首页查找保存路径 = "/sdcard/脚本图片/叔叔不约首页查找.png"
    叔叔不约首页查找下载地址 = "http://m.qpic.cn/psb?/V13HoQ6D224qoC/JR6tGVGZiDE5Cnl6oDdkYAgEK7vYqPMiaLz*dhsN0y4!/b/dL8AAAAAAAAA&bo=LAArACwAKwADGTw!&rf=viewer_4"
    集成模块.网络图片下载(叔叔不约首页查找下载地址,叔叔不约首页查找保存路径)
    /*var i = 0;
    var 同步参数 = []; 
    套路回复 = [];
    var 读取文本 = files.read("/sdcard/叔叔不约话术.txt");
    var 分割文本=读取文本.split("\n");
    分割文本.forEach(element => {
        log(element);
        同步参数[i] = element;
        i++;
    });
    var 话术1 = 同步参数[0];
    var 话术2 = 同步参数[1];
    var 话术3 = 同步参数[2];
    套路回复[1] = 话术1.split("|");
    套路回复[2] = 话术2.split("|");
    套路回复[3] = 话术3.split("|");
    套路回复[1] = "你好，小哥哥| 你好呀，小哥哥|小哥哥好".split("|")
    套路回复[2] = "连麦玩吗？有点想|玩连麦爱爱吗? 有点想|连麦爱爱吗,我想试试".split("|")
    套路回复[3] = "要么∨聊吧|薇聊吗,方便点|∨聊吧,方便点|要不薇聊吧".split("|")

    var i = 0;
    var 同步参数 = [];
    var 读取文本 = files.read("/sdcard/叔叔不约参数.txt");
    var 分割文本=读取文本.split("\n");
    分割文本.forEach(element => {
        log(element);
        同步参数[i] = element;
        i++;
    });
    微信1 = 同步参数[0];
    微信2 = 同步参数[1];
    微信3 = 同步参数[2];
    易码账号 = 同步参数[3];
    易码密码 = 同步参数[4];
    联众账号 = 同步参数[5];
    联众密码 = 同步参数[6];*/
    叔叔不约表情 = Array("😄","😃","😀","😊","😉","😍","😘","😚","😗","😙","😜","😝","😛","😳"
    ,"😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓","😩","😫","😨","😱"
    ,"😠","😡","😤","😖","😆","😋","😷","😎","😴","😵","😲","😟","😦","😧","😈","😮","😬","😐"
    ,"😕","😯","😶","😇","😏","😑","😯","😶","😇","😏","😑","👲","👳","👮","👷","💂","👶")
    套路回复 = [];
    //套路回复[1] = Array("有想看我小白兔跟内内吗，我шēī✘,","有互看的吗,我шēī✘,","群内免费看小白兔哦，有兴趣来 我шēī✘","免费看小白兔哦，想看的来 我шēī✘"
    //,"群内免费看性感秀 什么都能看见哦，有兴趣来 我шēī✘","免费看真人秀哦，想看的来 我шēī✘","有相互看的吗,我шēī✘,","老公不在家我一个人好怕啊 你能陪我语音吗 我шēī✘")
    套路回复[1] = Array(叔叔不约表情[random(0,叔叔不约表情.length-1)]+"好啊,шēī✘玩吗",叔叔不约表情[random(0,叔叔不约表情.length-1)]+"好啊,шēī✘污吗,方便点"
    ,叔叔不约表情[random(0,叔叔不约表情.length-1)]+"好啊,шēī✘污吗",叔叔不约表情[random(0,叔叔不约表情.length-1)]+"好啊,шēī✘污吗")
    //套路回复[1] = "你好，小哥哥| 你好呀，小哥哥|小哥哥好".split("|")
    //套路回复[2] = "连麦玩吗？有点想|玩连麦爱爱吗? 有点想|连麦爱爱吗,我想试试".split("|")
    //套路回复[3] = "要么∨聊吧|薇聊吗,方便点|∨聊吧,方便点|要不薇聊吧".split("|")

}
function 超级点击(变量){
        if(descContains(变量).exists()==true){封装API.desc(变量).click()}
        else if(textContains(变量).exists()==true){封装API.text(变量).click()}
}
function 超级判断(变量){
    if(descContains(变量).exists()==true||textContains(变量).exists()==true){return true}
    else{return false}
}
function 寻找字符串(APP,str){
    var i = 0 
    var 同步参数 = new Array()
    files.createWithDirs("/sdcard/"+APP+"参数.txt");
    var 读取文本 = files.read("/sdcard/"+APP+"参数.txt");
    var 分割文本=读取文本.split("\n");
    分割文本.forEach(element => {
        同步参数[i] = element
        i++
    });
    for(let a=0;a<同步参数.length;a++){
        if(str==同步参数[a]){
            return true
        }
    }
}
function 进入叔叔不约(){
    集成模块.清理手机缓存(手机判断参数)
    获取号码参数 = 0
    launchApp("猎豹浏览器分身");
    for(let a=0;a<20;a++){
        sleep(3000)
        if(text("允许").exists()==true){
            封装API.text("允许").click();
        }
        if(text("跳过").exists()){
            封装API.text("跳过").click();
        }
        if(text("菜单").exists()==true){
            log("进入叔叔不约_找到菜单...")
            break;
        }
        //id("a06")浏览器菜单ID
        if(id("a06").exists()==true){
            if(text("窗口").exists()==true){}
            else{
                返回浏览器主页 = className("TextView").boundsInside(598,1724,914,1920).findOne(2000)
                封装API.setView(返回浏览器主页).click()
                break;
            }
        }
        if(超级判断("立即提速")||超级判断("立即安装")||超级判断("立即下载")){
            集成模块.找图点击(叔叔不约X图标保存路径,800,550,200,250,相似度)
        }
    }
    sleep(1000)
    封装API.text("允许").click();
    sleep(1000)
    if(text("窗口").exists()==true){}
    else{
        返回浏览器主页 = className("TextView").boundsInside(598,1724,914,1920).findOne(2000)
        封装API.setView(返回浏览器主页).click()
    }
    封装API.id("aks").click()
    封装API.id("lh").click()
    if(text("立即提速").exists()==true){
        集成模块.找图点击(叔叔不约X图标保存路径,800,600,200,200,相似度)
    }
    封装API.等待(1000,2000)
    集成模块.找图点击(叔叔不约首页查找保存路径,40,300,120,150,相似度)
    封装API.等待(1000,2000)
    setText("http://www.unclenoway.com/#") 
    封装API.text("前往").click()
    for(let a=0;a<6;a++){
        sleep(10000)
        叔叔不约网站判断()
        if(集成模块.找图点击(叔叔不约离开保存路径,0,1570,320,200,相似度)=="找图成功"){
            log("准备跳过进入叔叔不约模块...")
            return;
        }
        else if(集成模块.找图点击(叔叔不约重新开始保存路径,0,1570,320,200,相似度)=="找图成功"){
            log("准备跳过进入叔叔不约模块...")
            return;
        }
        else if(集成模块.找图不点击(叔叔不约开始聊天保存路径,400,1250,300,200,相似度)=="找图成功"){
            封装API.等待(1500,2000)
            超级点击("女生")
            封装API.等待(1500,2000)
            封装API.press(500,1540,500)
            封装API.等待(1500,2000)
            超级点击("开始聊天")
            break;
        }
        else if(text("听花开的树洞服务号").exists()==true||desc("听花开的树洞服务号").exists()==true){
            log("找到听花开的树洞服务号...")
            返回浏览器主页 = className("TextView").boundsInside(598,1724,914,1920).findOne(2000)
            封装API.setView(返回浏览器主页).click()
            封装API.等待(1000,2000)
            进入叔叔不约()
            break;
        } 
        else if(textContains("由于用户多次举报").exists()==true||descContains("由于用户多次举报").exists()==true){
            toastLog("找到由于用户多次举报...")
            账号参数 = "账号已死"
            break;
        }                                                                                                                                                                                                
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
            接码模块()
        }
        else if(textContains("请点击").exists()==true||descContains("请点击").exists()==true&&idContains("reload").exists()==true){
            接码模块()
            }
        else{超级点击("点击完成验证")}
    }
    for(let a=0;a<12;a++){
        sleep(5000)
        if(集成模块.找图点击(叔叔不约离开保存路径,0,1570,320,200,相似度)=="找图成功"){
            log("准备跳过进入叔叔不约模块...")
            return;
        }
        else if(集成模块.找图点击(叔叔不约重新开始保存路径,0,1570,320,200,相似度)=="找图成功"){
            log("准备跳过进入叔叔不约模块...")
            return;
        }
        else if(text("听花开的树洞服务号").exists()==true||desc("听花开的树洞服务号").exists()==true){
            log("找到听花开的树洞服务号...")
            返回浏览器主页 = className("TextView").boundsInside(598,1724,914,1920).findOne(2000)
            封装API.setView(返回浏览器主页).click()
            封装API.等待(1000,2000)
            进入叔叔不约()
            break;
        } 
        else if(text("点击获取").exists()==true||desc("点击获取").exists()==true){
            log("准备注册账号...")
            易码API = require('./易码API');
            登陆 = 易码API.登陆(易码账号,易码密码);
            sleep(500)
            获取号码 = 易码API.获取号码(登陆,"17968");
            获取号码参数 = 1
            log(获取号码)
            sleep(500)
            text("手机号").setText(获取号码)//手机号码
            sleep(500)
            封装API.text("点击获取").click();
            封装API.desc("点击获取").click();
            sleep(500)
            text("密码(至少需要6位)").setText("abcd1995")//密码
            sleep(500)
            break;
        }
        else if(text("反馈问题").exists()==true){
            break
        }
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
            接码模块()
        }
        else if(textContains("请点击").exists()==true||descContains("请点击").exists()==true&&idContains("reload").exists()==true){
            接码模块()
            }
        else{超级点击("点击完成验证")}
    }
    for(let a=0;a<10;a++){
        sleep(6000)
        if(text("反馈问题").exists()==true){
            log("找到反馈问题...")
            break
        }
        if(textContains("由于实名制要求").exists()==true||descContains("由于实名制要求").exists()==true){
            log("找到由于实名制要求...")
            获取验证码 = 易码API.获取验证码(登陆,"17968",获取号码);
            if(获取验证码=="获取验证码失败"){toastLog(获取验证码)}
            else if(获取验证码=="3001"){获取验证码 = 易码API.获取验证码(登陆,"17968",获取号码)}
            else{break;}
        }
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
            接码模块()
        }
        else if(textContains("请点击").exists()==true||descContains("请点击").exists()==true&&idContains("reload").exists()==true){
            接码模块()
            }
        else{超级点击("点击完成验证")}
    }
    if(text("反馈问题").exists()==true){
        log("找到反馈问题控件...")
    }
    else{
        if(获取号码参数==1){
            toastLog(获取验证码)
            if(获取验证码=="获取验证码失败"){
                log("获取验证码失败,开始释放号码...")
            }
            else if(获取验证码=="3001"){
                toastLog("获取验证码3001")
                返回浏览器主页 = className("TextView").boundsInside(598,1724,914,1920).findOne(2000)
                封装API.setView(返回浏览器主页).click()
                封装API.等待(1000,2000)
                进入叔叔不约()
            }
            else{
                log("获取验证码成功,开始释放号码...")
                验证码 = 获取验证码.replace(/[^0-9]/ig,"");
                验证码 = 验证码.replace(/[^0-9]/ig,"");//筛选出内容里面的所有数字
                验证码 = 验证码.substr(0,4)//截取字符串从0位开始到第三位
                text("手机验证码").setText(验证码)//验证码
                超级点击("确认")
            }
        }
    }
}
function 开始聊天(){
    聊天判断 = 0
    变量A = 1
    聊天内容=[]
    for(let b=1;b<套路回复.length;b++){
        回复参数 = 0
        时间变量 = 0 
        if(集成模块.找图点击(叔叔不约重新开始保存路径,0,1570,320,200,相似度)=="找图成功"){log("开始聊天模块找到图片重新开始...")}
        else if(集成模块.找图点击(叔叔不约开始聊天保存路径,400,1250,300,200,相似度)=="找图成功"){log("开始聊天模块找到图片开始聊天...")}
        if(textContains("无响应").exists()&&textContains("确定").exists()){
            log("找到分身无响应...")
            封装API.textCon("确定").click();
            进入叔叔不约();
        }
        if(text("窗口").exists()==true&&text("菜单").exists()==true){
            toastLog("找到窗口还有菜单,判断在浏览器主页...")
            进入叔叔不约();
            break;
        }
        if(descContains("请稍等").exists()==true||textContains("请稍等").exists()==true){
            sleep(30*1000)
            if(descContains("请稍等").exists()==true||textContains("请稍等").exists()==true){
                toastLog("长时间找到请稍等控件,准备重新进入叔叔不约...")
                进入叔叔不约()
            }
        }
        else if(text("立即提速").exists()==true){
            封装API.id("alh").click()
        }
        else if(textContains("由于用户多次举报").exists()==true||descContains("由于用户多次举报").exists()==true){
            toastLog("找到由于用户多次举报...")
            账号参数 = "账号已死"
            return
        }
        else if(textContains("由于实名制要求").exists()==true||descContains("由于实名制要求").exists()==true){
            log("找到由于实名制要求...")
            返回浏览器主页 = className("TextView").boundsInside(598,1724,914,1920).findOne(2000)
            封装API.setView(返回浏览器主页).click()
            封装API.等待(1000,2000)
            进入叔叔不约()
        }
        else if(text("听花开的树洞服务号").exists()==true||desc("听花开的树洞服务号").exists()==true){
            log("找到听花开的树洞服务号,准备重新进入叔叔不约...")
            进入叔叔不约()
            break;
        } 
        else if(textContains("还没有VIP代码").exists()==true||descContains("还没有VIP代码").exists()==true){
            log("找到还没有VIP代码...")
            超级点击("取消")
        }
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
            log("找到拖动下方滑块完成拼图...");
            接码模块();
        }
        else if(textContains("请点击").exists()==true||descContains("请点击").exists()==true&&idContains("reload").exists()==true){
            log("找到请点击...");
            接码模块();
        }
        else{超级点击("点击完成验证");}
        if(账号参数=="账号已死"){
            return;
        };
        固定时间回复(b);
    }
}
function 固定时间回复(变量){
    for(let a=0;a<回复等待时长;a++){
        sleep(1000)
        时间变量++
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
            log("找到拖动下方滑块完成拼图...");
            接码模块();
            聊天判断="对方离开了"
        }
        else if(textContains("请点击").exists()==true||descContains("请点击").exists()==true&&idContains("reload").exists()==true){
            log("找到请点击...");
            接码模块();
            聊天判断="对方离开了"
        }
        else{超级点击("点击完成验证");}
        if(text("确定离开?").exists()==true||desc("确定离开?").exists()==true){
            超级点击("取消")
        }
        else if(text("分享设置").exists()==true||desc("分享设置").exists()==true){
            超级点击("关闭")
            }
        else if(text("重新开始").exists()==true||desc("重新开始").exists()==true){
            log("固定时间回复模块找到重新开始控件...")
            重新开始参数++
        }
        if(重新开始参数>=10){
            log("连续找到重新开始控件,判断为页面卡住")
            break;
        }
        c = 0
        聊天 = className("android.view.View").clickable(false).depth(19).find()
        聊天.forEach(element => {
            if(element.text()!=null&element.text()!=""){
                聊天内容[c] = element.text()
                c++
                if(element.text()=="对方离开了。"){
                    log("对方离开了...")
                    聊天判断="对方离开了"
                }
                else if(element.text()==qq){
                    log("已经发送微信号码，准备离开...")
                    聊天判断="对方离开了"
                }
                if(desc("重新开始").exists()==true||text("重新开始").exists()==true){
                    超级点击("重新开始")
                }
                if(textContains("由于用户多次举报").exists()==true||descContains("由于用户多次举报").exists()==true){
                    toastLog("找到由于用户多次举报...")
                    账号参数="账号已死"
                }
            }
        });
        消息 = 聊天内容[c-1]
        if(消息==null){
            c = 0
            聊天 = className("android.view.View").clickable(true).depth(18).find()
            聊天.forEach(element => {
                if(element.text()!=null&element.desc()!=""){
                    聊天内容[c] = element.desc()
                    c++
                    if(element.desc()=="对方离开了。"){
                        log("对方离开了...")
                        聊天判断="对方离开了"
                    }
                    else if(element.text()==qq){
                        log("已经发送微信号码，准备离开...")
                        聊天判断="对方离开了"
                    }
                    if(desc("重新开始").exists()==true||text("重新开始").exists()==true){
                        超级点击("重新开始")
                    }
                    if(textContains("由于用户多次举报").exists()==true||descContains("由于用户多次举报").exists()==true){
                        toastLog("找到由于用户多次举报...")
                        账号参数="账号已死"
                    }
                }
            });
            消息 = 聊天内容[c-1]
            回复消息 = "无关键词回复"//关键词回复模块();
        }
        else{
            回复消息 = "无关键词回复"//关键词回复模块();
        }
        log("获取的消息为===>"+消息)//最后一条消息内容
        if(消息=="请进行验证~"){
            接码模块()
        }
        else if(消息==null){
            log("没有获取到消息")
        }
        if(聊天判断=="对方离开了"){
            log("固定时间回复模块,找到聊天判断对方离开了...")
            集成模块.找图点击(叔叔不约离开保存路径,0,1570,320,200,相似度)
            sleep(1000)
            超级点击("确定")
            sleep(1000)
            集成模块.找图点击(叔叔不约重新开始保存路径,0,1570,320,200,相似度)
            sleep(1000)
            break;
        }
        if(账号参数=="账号已死"){
            break;
        }
        if(回复消息 == "无关键词回复"){
            if(时间变量==回复等待时长-1){
                setText(套路回复[1][random(0,套路回复[1].length-1)])
                封装API.等待(500,1000)
                超级点击("发送")
                超级点击("留步")
                超级点击("分享")
                封装API.等待(5000,6000)
                if(descContains("点击完成验证").exists()||textContains("点击完成验证").exists()){
                    setText(qq)
                    封装API.等待(500,1000)
                    超级点击("发送")
                    超级点击("留步")
                    超级点击("分享")
                    封装API.等待(500,1000)
                    setText(套路回复[1][random(0,套路回复[1].length-1)])
                    封装API.等待(500,1000)
                    超级点击("发送")
                    超级点击("留步")
                    超级点击("分享")
                    封装API.等待(500,1000)
                    setText(qq)
                    封装API.等待(500,1000)
                    超级点击("发送")
                    超级点击("留步")
                    超级点击("分享")
                }
                else{
                    setText(qq)
                    封装API.等待(500,1000)
                    超级点击("发送")
                    超级点击("留步")
                    超级点击("分享")
                    封装API.等待(5000,6000)
                    if(descContains("点击完成验证").exists()||textContains("点击完成验证").exists()){
                        setText(qq)
                        封装API.等待(500,1000)
                        超级点击("发送")
                        超级点击("留步")
                        超级点击("分享")
                    }

                }
            }
        }
        else{
            setText(回复消息)
            sleep(500)
            超级点击("发送")
            超级点击("留步")
            超级点击("分享")
        }

    } 
}
function 关键词回复模块(){
    关键词回复变量 = -1
    引流微信参数 = -1
    关键词=[];
    随机回复=[];
    关键词[0] = Array("你好","嗨","哈喽","hello","hi","嗨喽","小姐姐好","你好小姐姐","你好美女","美女好","美女你好")
    关键词[1] = Array("聊污","聊骚","聊色")
    关键词[2] = Array("请你吃饭", "一起吃", "看电影","一起玩","出来吗","一起去玩","出来玩","带你出去玩","见个面","见面")
    关键词[3] = Array("在干吗", "在干嘛", "在做什么","干嘛呢","干吗呢","在干啥")
    关键词[4] = Array("约一个", "约吗","约不","约个","约出来","约?")
    关键词[5] = Array("QQ","加Q","加扣","Q友","扣扣")
    关键词[6] = Array("人呢","在不在","在不","在吗")
    关键词[7] = Array("不说话")
    关键词[8] = Array("有男朋友", "男票","有对象")
    关键词[9] = Array("微信", "加你", "联系", "给我", "留个", "加个微信", "vx","wx","加V","加个V","加Ｖ","加个Ｖ")
    关键词[10] = Array("哪里人", "哪儿的","本地人")
    关键词[11] = Array("住这里","住在这","住这")
    关键词[12] = Array("加你了")
    关键词[13] = Array("玩啊")
    关键词[14] = Array("怎么称呼", "你叫什么")
    关键词[15] = Array("住哪个小区", "住哪里", "住哪","什么地方","在哪里的")
    关键词[16] = Array("吃了没", "吃没", "吃晚饭了", "吃午饭了", "吃中饭了", "吃饭了")
    关键词[17] = Array("哪里玩", "在哪玩")
    关键词[18] = Array("什么电视")
    关键词[19] = Array("很近","好近","有点近")
    关键词[20] = Array("什么游戏","玩啥游戏")
    关键词[21] = Array("不会说话")
    关键词[22] = Array("多高")
    关键词[23] = Array("怎么啦")
    关键词[24] = Array("在吗")
    关键词[25] = Array("[微笑]","[大笑]")
    关键词[26] = Array("节快乐","节日快乐")
    关键词[27] = Array("游戏直播？","游戏直播吗？")
    关键词[28] = Array("在么","在吗")
    关键词[29] = Array("怎么了")
    随机回复[0] = Array("你好呀", "你好", "你好","你好呀,很高兴认识你")
    随机回复[1] = Array("好啊,要不Ｖ聊把,方便发图", "可以啊,要不微聊吧,方便语音发图")
    随机回复[2] = Array("好啊，那我们Ｖ聊吧"+"!", "那你加我聊吧方便点，探探用的少"+"!", "那Ｖ聊吧方便点，"+"!")
    随机回复[3] = Array("我在看电视", "我在看抖音呀", "我在刷抖音")
    随机回复[4] = Array("那我们Ｖ聊吧方便点，"+"!", "加我Ｖ聊吧方便点，"+"!", "那加我Ｖ聊吧方便点，"+"!")
    随机回复[5] = Array("我很少用那个，我都是用微信的"+"!", "我不用QQ的 要不加个V吧 "+"!", "没有用只有微信"+"!")
    随机回复[6] = Array("在呢,这个用的的比较少，要不加我微信聊吧"+"!","在呢 怎么了","加我Ｖ信聊吧"+"!"+"探探用得少")
    随机回复[7] = Array("我这里上的少 你加我Ｖ聊吧"+"!"+"","我探探用的不太多啦，要不你加我微信把"+"!", "探探我就偶尔上啦")
    随机回复[8] = Array("没有呢，你呢", "暂时没有呢，你呢", "目前没有，你呢")
    随机回复[9] = Array("恩，"+"!", "可以,"+"!", "恩,那我留个Ｖ吧，"+"!")
    随机回复[10] = Array("我是浙江嘉兴的", "浙江嘉兴的呀", "浙江嘉兴这边的")
    随机回复[11] = Array("我也是住这里", "我也住这里", "好吧，我也住这边")
    随机回复[12] = Array("好的，待会我去通过", "好的收到，待会我去通过", "恩，待会我去通过")
    随机回复[13] = Array("你玩什么啊？", "你玩什么游戏？", "你玩什么的？")
    随机回复[14] = Array("我叫婷婷", "婷婷", "我叫婷婷")
    随机回复[15] = Array("不告诉你", "现在还不能告诉你，以后熟了可以", "熟悉了再告诉你")
    随机回复[16] = Array("没呢，准备吃了", "准备吃饭了", "正准备吃呢")
    随机回复[17] = Array("在家看电视呢", "在家玩游戏呢", "在家玩游戏呀")
    随机回复[18] = Array("绿肥红瘦", "绿肥红瘦", "绿肥红瘦[花痴]")
    随机回复[19] = Array("确实蛮近的", "是挺近的", "好像确实蛮近的[花痴]")
    随机回复[20] = Array("王者荣耀或者吃鸡这种啊，我会玩玩王者", "我就会玩王者农药", "王者还有吃鸡这种啊，我会玩玩王者")
    随机回复[21] = Array("好吧，那你是做什么的？", "好吧，那你是做什么工作的？", "好吧，那你是干什么的呀？")
    随机回复[22] = Array("166，你呢", "166cm，你呢", "166，你呢多高")
    随机回复[23] = Array("就随便问问，如果不方便说就算了","就随便问问，如果不方便说也没关系","随便问问，如果不方便说就算了")
    随机回复[24] = Array("在呀,怎么了?")
    随机回复[25] = Array("[微笑]","","[大笑]")
    随机回复[26] = Array("同乐同乐","谢谢,","谢谢,同乐")
    随机回复[27] = Array("游戏客服，o(╯□╰)o","游戏客服啦，o(╯□╰)o")
    随机回复[28] = Array("在啊","在呀")
    随机回复[29] = Array("没事,就随便聊下啊")
    for(let a=0;a<关键词.length;a++){
        sleep(10)
        关键词[a].forEach(element => {
            if(消息.indexOf(element) != -1 ){
                回复 = 随机回复[a][random(0,随机回复[a].length-1)]
                关键词回复变量 = 1
                if(a==2||a==4||a==5||a==6||a==7||a==9){
                    引流微信参数 = 1
                }
            } 
        });
    } 
    if(关键词回复变量 == 1){
        return "无关键词回复"
    }
    else{
        return "无关键词回复"
    } 
}
function 输入微信号(){
    延迟=1000
    大延迟 = 3000
    输入判断 = 0
    qq长度 = qq.length
    //str = qq.split("")
    //qq.substring(0,2)
    //qq.substring(3,5)
    //qq.substring(6,8)

    /*setText(qq.substring(0,2));
    sleep(大延迟)
    超级点击("发送")
    sleep(大延迟)
    setText(qq.substring(2,4));
    sleep(大延迟)
    超级点击("发送")
    sleep(大延迟)
    setText(qq.substring(4,6));
    sleep(大延迟)
    超级点击("发送")
    sleep(大延迟)
    if(qq.length>8){
        setText(qq.substring(6,8));
        sleep(大延迟)
        超级点击("发送")
        setText(qq.substring(8,qq.length));
        sleep(大延迟)
        超级点击("发送")
    }
    else{
        setText(qq.substring(6,8));
    }*/
    /*sleep(8000)
    setText(qq)
    sleep(延迟)
    超级点击("发送")
    //sleep(大延迟)
    
    //sleep(延迟)
    //超级点击("发送")
    //sleep(大延迟)
    toastLog("输入微信号结束...")*/
    sleep(3000)
    超级点击("离开")
    超级点击("验证")
    sleep(1000)
    超级点击("确定")
    sleep(2000)
    超级点击("重新开始")
    sleep(1000)
}
function 叔叔不约网站判断(){
    if(textContains("匿名聊天网").exists()||text("点击获取").exists()||desc("点击获取").exists()){}
    else{
        叔叔不约网站判断参数++
        if(叔叔不约网站判断参数>=5){
            toastLog("没有找到叔叔不约网站,准备重新启动...")
            叔叔不约网站判断参数=0
            进入叔叔不约()
        }
    }
}
function 打开流量共享(){
    集成模块.返回主界面();
    toastLog("开始打开流量共享...")
    launchApp("设置")
    sleep(2000)
    if(手机判断参数=="小米系统"){
        封装API.text("个人热点").click();
        sleep(1000)
        封装API.textCon("便携式").click();
        sleep(2500)
        back();
        sleep(1500)
        back();
    }
    else if(手机判断参数=="华为系统"){
        封装API.text("更多").click();
        sleep(1000)
        封装API.text("移动网络共享").click();
        sleep(1000)
        封装API.textCon("便携式").click();
        sleep(1000)
        封装API.idCon("widget_frame").click();
        sleep(3000)
        back();
        sleep(1500)
        back();
        sleep(1500)
        back();
        sleep(1500)
    }
    else{log("暂时还不支持该系统设置热点...")}
}
function 容错(){
    threads.start(function(){
        while(true){
            sleep(1000)
            if(textContains("不可以开多个浏览器").exists()==true||descContains("不可以开多个浏览器").exists()==true){
                超级点击("确定")
            }
        }
    });
}

function 接码模块(){
    for(let a=1;a<12;a++){
        toastLog("第"+a+"次打码")
        封装API.idCon("reload").click()
        sleep(3000)
        打码总数量参数++
        if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
            log("找到滑块,准备拼图...")
            接码成功 = 1
            滑块按钮 = className("android.view.View").idContains("tcaptcha_drag_button").findOne(1000)
            if(滑块按钮!=null){
                滑块按钮坐标 = 滑块按钮.bounds()
                var 滑块按钮坐标X1 = 滑块按钮坐标.left
                var 滑块按钮坐标Y1 = 滑块按钮坐标.top
                    滑块 = className("Image").idContains("slideBg").findOne(1000)
                    if(滑块!=null){
                        滑块图片 = 滑块.bounds()
                        console.log(滑块图片);
                        var X1 = 滑块图片.left
                        var Y1 = 滑块图片.top
                        var X2 = 滑块图片.right
                        var Y2 = 滑块图片.bottom
                        var 联众打码API = require('./联众API');
                        var 联众打码api = new 联众打码API("kstd2016","Wentao1987223");
                        坐标 = 联众打码api.打码(X1,Y1,X2-X1,Y2-Y1,"1318","1","1");
                        if(坐标 != "打码失败"){
                            拼图坐标 = 坐标.split(",");
                            拼图坐标X = parseInt(拼图坐标[0]);
                            拼图坐标Y = parseInt(拼图坐标[1]);
                            log("拼图坐标X===>"+拼图坐标X);
                            if(滑块按钮坐标X1>="100"&&滑块按钮坐标X1<="150"){
                                封装API.swipe(滑块按钮坐标X1+10,滑块按钮坐标Y1+10,拼图坐标X+random(15,25),滑块按钮坐标Y1+10+random(0,10),random(2000,3000));
                            }
                            else{
                                log("没有找到滑块按钮坐标,启用备用坐标...")
                                封装API.swipe(136,1279,拼图坐标X+random(15,25),1279+random(0,10),random(1500,3000))
                            }
                        }
                        else{
                            封装API.idCon("reload").click()//刷新按钮,更换图片
                        }
                    }
                    else{
                        封装API.idCon("reload").click()//刷新按钮,更换图片
                    }
            }
            else{封装API.idCon("reload").click()}
        }
        else if(textContains("请点击").exists()==true||descContains("请点击").exists()==true&&idContains("reload").exists()==true){
            log("找到点击图片验证...")
            滑块 = classNameContains("android.view.View").boundsInside(0,450,1100,1600).idContains("tcaptcha").findOne(1000)
            if(滑块!=null){
                滑块图片 = 滑块.bounds()
                console.log(滑块图片);
                var X1 = 滑块图片.left
                var Y1 = 滑块图片.top
                var X2 = 滑块图片.right
                var Y2 = 滑块图片.bottom
                var 联众打码API = require('./联众API');
                var 联众打码api = new 联众打码API(联众账号,联众密码);
                坐标 = 联众打码api.打码(X1,Y1+35,X2-X1,Y2-Y1-253,"1303","1","5");
                log(坐标)
                拼图坐标 = 坐标.split("|")
                文字点击坐标=[]
                for(let a=0;a<拼图坐标.length;a++){
                    sleep(1000)
                    文字点击坐标[a] = 拼图坐标[a].split(",")
                    封装API.press(X1+parseInt(文字点击坐标[a][0]),Y1+35+parseInt(文字点击坐标[a][1]),200)
                }
                sleep(1000)
            }
        }
        else{break;}
        if(打码总数量参数>=50){
            toastLog("接码超过50次,准备重新进入叔叔不约");
            打码总数量参数 = 0
            if(寻找字符串("叔叔不约","热点共享手机")){
                toastLog("识别为热点共享手机,准备切换IP...");
                集成模块.流量卡切换IP(手机判断参数);
                打开流量共享();
            }
            集成模块.多开分身善后(手机判断参数)
            集成模块.多开分身(切换IP方式,APP)
            集成模块.制作分身(切换IP方式,手机判断参数,地理位置)
            进入叔叔不约();
            return
        }
        else if(a>=8){
            toastLog("连续接码模块失败,准备重新进入叔叔不约");
            打码总数量参数 = 0
            if(寻找字符串("叔叔不约","热点共享手机")){
                toastLog("识别为热点共享手机,准备切换IP...");
                集成模块.流量卡切换IP(手机判断参数);
                打开流量共享();
            }
            集成模块.多开分身善后(手机判断参数)
            集成模块.多开分身(切换IP方式,APP)
            集成模块.制作分身(切换IP方式,手机判断参数,地理位置)
            进入叔叔不约();
            return
        }
        封装API.等待(1000,1500)
    }
}
