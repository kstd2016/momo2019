let 封装API = require(engines.myEngine().cwd() +"/封装API.js");
let 集成模块 = require(engines.myEngine().cwd() +"/集成模块.js");
//恋爱零 判断id("iv_toast_text"),恋爱零 点击爱心id("iv_first_heart") id("rl_heart") 
//恋爱零关闭id("iv_match_close")
let soul注册 ={
    开始:function(){
        log("执行代码开始运行...")
        if(!requestScreenCapture()){
            toast("请求截图失败");
            exit();
        }
        this.全局变量();
        if(手机判断参数 == "逍遥模拟器"){this.光子IP();}
        else{手机判断参数 = 集成模块.手机品牌判断();}
        for(let a=0;a<99;a++){
            this.循环变量();
            if(手机判断参数 == "逍遥模拟器"){}
            else{集成模块.流量卡切换IP(手机判断参数)}//
            this.新建环境();
            this.注册soul();
            if(程序判断=="重新开始"){}
            else{this.soul灵魂匹配();}
        }
    },
    全局变量:function(){
        封装API.等待(1000)
        if(text("逍遥市场").exists()){
            手机判断参数 = "逍遥模拟器"
        }
        else{手机判断参数 = 0}
        易码账号 = "kstd2016";
        易码密码 = "1987223";
        联众账号 = "kstd2016";
        联众密码 = "Wentao1987223";
        soul密码 = Array("cctv1995","aabb1995","cctv1996","aabb1996")
        setScreenMetrics(1080, 1920);//屏幕宽度不一致会自动放缩坐标。
        签名 = Array("稚与最初","风吹向你","遥林静居","柠檬爱恋","懒懒的幸福","各自安好","情定无名指","怀念小时候","悲情剧里的暖色系"
        ,"空心人","花开花落终不悔","飞逝的流水","拾起回忆","让眼泪倒流","亦久亦旧","生命的韧度","流哖中的浅夏","繁华的梦境","说好了再见"
        ,"给不起的温柔","一味执着的爱情","低调要沉默","不奢求爱情","太冷的回忆","四十五度的想念","却老了容颜","暖风撩人醉","TE听闻余生"
        ,"未尝没想过","庸人自扰梦","惜醉颜","忆挽离笙歌","落花时节又逢君","无梦相赠","空景孤扰人心","竹笙锦瑟","独留清风醉"
        ,"落日海湾","夏日浅笑","随梦而飞")
        第一句 = Array("你好","你好呀","你好,小哥哥","你好哦,小哥哥","你好呀,小哥哥","hi~","嗨","hello","嗨喽")
        招呼话术 =["现在有点无聊，我们连麦聊天吧  ","网恋吗小哥哥？现在就视频连麦得那种 +我","处对象吗 现在能视频连麦得那种 加我",
        "连麦吗 通宵的那种 +威 ","处对象吗 天天连麦视频的那种？ 加我V","处对象吗我超甜 伽我威","网恋吗我超甜 伽我威鸭","连麦吗小哥哥 笳我微",
        "交个朋友吧 我也刚玩 不常用 加个微吧","不常用 V聊吧","不常玩这个，换个地方聊吧 +我","老公不在家我一个人好怕啊 你能陪我语音吗 加我",
        "小哥哥 接受网恋吗 割脉那种，加我","心情不好 又被妈妈骂了 你能陪我聊聊天吗 我发给你","男朋友把我绿了 好难受 能陪我聊聊吗 我薇",
        "这个不常用，加个微聊吧","这个怎么发消息都收不到的，我们换个地方聊吧 我薇","这个不常用，薇聊吧 我发给你","今天家里没人 可以大胆点了 你来看吗 加我",
        " ↓面痒死了 来给你看吧 笳我V","连麦睡觉的来 加我V","连麦睡觉觉吗小哥哥,来加我聊","老公不在家，好想有个人聊天 你加我微信吧","来到了陌生的城市好想哭 你可以跟我交朋友吗 加下我",
        ,"妹妹好痒 哥哥来帮我 +V给你看","哥哥在干嘛 我有个好东西给你看 +我微信"," 小哥哥 给你个东西你要吗 微说吧","聊大胆的敢来吗 加我","我超甜 想要个对象 加我威信","处对象 坐标广州 有意向卫星",
        "坐标湖南，18岁处对象超甜的那种，有意向威信","坐标北京，18岁 萝莉控 有意威信+","坐标海南，萌妹子18岁 有意+V","坐标上海，18岁萝莉控 有意加卫星"];
        表情 = Array("😁","😊","😘","😍","😳","😱","😂","😭","😅","😓","😎","😑","🙄","🤔","😉","😆","😡","😤","😨","😈","🌚","🌝","😒","😔","🙂","🙃","💋","🌹","👍🏼","🎉","😩","😕","😐","😠","😴","😌","😋","😝","👋🏼","🙏🏼","💪🏼","🤢","🤪","😷","😲","🤮","🤩","🤤","🤑","🤗","🤓","😇","🤠","🤯","😪","😵","🤒","🤧","🤫","🤨","🧐","🖕🏼","👌🏼","✌🏼","🤙🏼","🤝","🐷","🙈","🙉","🙊","😹","😻","🙀","🐶","🎁","💖","💔","💩","💯","👀","💀","👻","👴🏻","👵🏻","👶🏻","🤡","🕺🏻","💃🏻","🦊","🐱","🦄","🌈","✨","💤","👫","👯‍","♀","️💚","💕","🍀","🌸","💐","💍")
        微信 = Array("шēī✘","шēī♥","шēī❤","徽✘","徵♥","徾❤","幑♡","徴♡","шēī信","薇❤","薇♡","薇✘")
        引流号 = Array("ССЬЬ¹995º²","ССЬЬ¹995º²")
        qq = 引流号[random(0,引流号.length-1)]

        APP = "Soul"
        切换IP方式 = "流量卡IP"
        地理位置 = "0"
        华为键盘图标保存路径 = "/sdcard/脚本图片/华为键盘图标.png"
        华为键盘图标下载地址 = "http://m.qpic.cn/psb?/V13HoQ6D224qoC/ZYVXYRGT3N*Nfc2Ad2xKnu817QucIkc0sNQCvP0dmcs!/b/dFQBAAAAAAAA&bo=KQAbACkAGwADCSw!&rf=viewer_4"
        华为键盘图标 = 集成模块.网络图片下载(华为键盘图标下载地址,华为键盘图标保存路径)
        灵魂性别女保存路径 = "/sdcard/脚本图片/灵魂性别女.png"
        灵魂性别女下载地址 = "http://m.qpic.cn/psb?/V13HoQ6D224qoC/OMBLLaRd1eiUbKU4IW2TrjSuzDccV5gnY.SsE1p51JA!/b/dLYAAAAAAAAA&bo=KAArACgAKwADCSw!&rf=viewer_4"
        灵魂性别女 = 集成模块.网络图片下载(灵魂性别女下载地址,灵魂性别女保存路径)
        灵魂性别男保存路径 = "/sdcard/脚本图片/灵魂性别男.png"
        灵魂性别男下载地址 = "http://m.qpic.cn/psb?/V13HoQ6D224qoC/1KcIq.txXlLUTbBt9Xp3UFpywtOpL8DUCdPudiaF0Ck!/b/dLsAAAAAAAAA&bo=JQAoACUAKAADCSw!&rf=viewer_4"
        灵魂性别男 = 集成模块.网络图片下载(灵魂性别男下载地址,灵魂性别男保存路径)
    },
    循环变量:function(){
        程序判断 = 0
        获取验证码 = 0
        清理APP数据 = 0
        定制头像参数 = 0
        智能验证检测参数=0
    },
    光子IP:function(){
        launchApp("光子·安卓变版");
        for(let a=0;a<30;a++){
            封装API.等待(1000)
            if(text("退出账号").exists()){
                封装API.id("apv_switch").click()
                封装API.等待(9999)
                break;
            } 
        }
    },
    新建环境:function(){
        home();
        sleep(2000);
        launchApp("xx抹机神器");
        封装API.text("xx抹机神器").click()
        if(手机判断参数=="华为系统"){
            for(let a=0;a<30;a++){
                sleep(1000);
                if(text("新建环境").exists()){
                    封装API.text("新建环境").click();
                    sleep(1000)
                    while(text("新建环境").exists()!=true){
                        sleep(1000)
                    }
                    this.上传云环境()
                    sleep(1500);
                    封装API.text("虚拟定位").click();
                    sleep(1000);
                    封装API.press(500,1700,300)
                    sleep(5000);
                    for(let b=0;b<30;b++){
                        sleep(1000);
                        if(textContains("系统繁忙").exists()){
                            封装API.text("确定").click()
                        }
                        else{
                            var 图标 = classNameContains("LinearLayout").clickable(true).boundsInside(30,312,195,492).findOne(2000)
                            if(图标!=null){
                                封装API.setView(图标).click()
                                break;
                            }
                        }
                    }
                    sleep(2000);
                    启动 = text("启动").findOne(1000)
                    封装API.clickParent(启动)
                    break;
                }
            }
        }
        else if(手机判断参数=="逍遥模拟器"){
            for(let a=0;a<30;a++){
                sleep(1000);
                if(text("新建环境").exists()){
                    封装API.text("新建环境").click();
                    sleep(1000)
                    while(text("新建环境").exists()!=true){
                        sleep(1000)
                    }
                    sleep(1500);
                    图标 = classNameContains("LinearLayout").clickable(true).boundsInside(18,176,117,270).findOne(2000)
                    封装API.setView(图标).click()
                    sleep(2000);
                    启动 = text("启动").findOne(1000)
                    封装API.clickParent(启动)
                    break;
                }
            }
        }
    },
    上传云环境:function(){
        封装API.等待(1000)
        封装API.idCon("iv_envlist").click()
        封装API.等待(1500)
        环境 = idContains("swipelayout").findOnce(1)
        封装API.setView(环境).click()
        封装API.等待(1000)
        封装API.text("上传到云").click()
        for(let b=0;b<90;b++){
            封装API.等待(1000)
            if(text("上传完成").exists()&&text("确定").exists()){
                封装API.text("确定").click()
                封装API.等待(1000)
                封装API.idCon("iv_envlist").click()
                break;
            }
        }
    },
    注册soul:function(){
        soul登陆变量 = 0
        this.注册第一循环();
        this.注册第二循环();
        this.注册第三循环();
    },
    注册第一循环:function(){
        for(let a1=0;a1<120;a1++){
            log("注册第一循环"+a1)
            sleep(1000);
            soul登陆变量++
            if(text("始终允许").exists()){
                封装API.text("始终允许").click()
            }
            if(idContains("btn_newUser").exists()){
                封装API.idCon("btn_newUser").click();
                sleep(2000);
            }
            else if(textContains("请输入手机号码").exists()){
                易码API = require('./易码API');
                登陆 = 易码API.登陆(易码账号,易码密码);
                sleep(1000);
                获取号码 = 易码API.获取号码(登陆,"9671");
                sleep(1000);
                console.log(获取号码);
                setText(获取号码);
                sleep(1000);
                if(手机判断参数 == "逍遥模拟器"){}
                else{                
                    back()
                    封装API.等待(500,1000)
                }
                封装API.idCon("rlConfirm").click();//主页确定按钮ID
                break;
            }
            if(soul登陆变量>=60){
                this.新建环境();
                soul登陆变量 = 0;
            }
        }
    },
    注册第二循环:function(){
        for(let a2=0;a2<45;a2++){
            log("注册第二循环"+a2)
            sleep(3000)
            if(textContains("智能验证检测中").exists()){
                log("找到智能验证检测中...")
                智能验证检测参数++
                if(智能验证检测参数>=10){
                    back()
                    封装API.等待(1000)
                    智能验证检测参数=0
                }            
            }
            if(desc("确认").clickable(true).boundsInside(657,1443,972,1554).exists()||text("确认").clickable(true).boundsInside(657,1443,972,1554).exists()){
                this.接码模块();
            }
            else if(textContains("请点击").exists()&textContains("确认").exists()){
                this.接码模块();
            }
            else if(textContains("拖动左边滑块完成上方拼图").exists()||descContains("拖动左边滑块完成上方拼图").exists()){
                this.接码模块();
            }
            else if(textContains("请在下图依次点击").exists()||descContains("请在下图依次点击").exists()){
                this.接码模块();
            }
            else if(textContains("手机验证码").exists()){
                获取验证码 = 易码API.获取验证码(登陆,"9671",获取号码);
                log(获取验证码);
                if(获取验证码=="获取验证码失败"){}
                else if(获取验证码=="3001"){获取验证码 = 易码API.获取验证码(登陆,"9671",获取号码)}
                else{
                    验证码 = 获取验证码.replace(/[^0-9]/ig,"");
                    验证码 = 验证码.replace(/[^0-9]/ig,"");//筛选出内容里面的所有数字
                    验证码 = 验证码.substr(0,4);//截取字符串从0位开始到第三位
                    log("验证码为===>"+验证码);
                    setText(验证码);//验证码
                    封装API.等待(8000,10000);
                    if(idContains("etPwd").exists()){
                        log("找到输入密码页面...")
                        soul随机密码 = soul密码[random(0,soul密码.length)]
                        idContains("etPwd").setText(soul随机密码);
                        封装API.等待(500,1000);
                        if(手机判断参数 == "逍遥模拟器"){}
                        else{                
                            back()
                            封装API.等待(500,1000);
                        }
                        封装API.text("确定").click();
                        封装API.等待(2000)
                        break;
                    }
                }
            }
            if(idContains("etPwd").exists()){
                if(获取验证码 == 0){
                    log("没有找到输入验证码界面直接进入输入密码界面,判断该手机号已经被注册...")
                    拉黑手机号 = 易码API.拉黑手机号(登陆,"9671",获取号码);
                    程序判断 =  "重新开始"
                    return
                }
            }
            else if(text("重新发送").exists()){
                log("找到重新发送...");
                封装API.idCon("rlBack").click();
            }
            else if(idContains("etPhone").exists()){
                获取号码 = 易码API.获取号码(登陆,"9671");
                sleep(1000)
                console.log(获取号码);
                setText(获取号码);
                封装API.text("确定").click();
            }
        }
    },
    注册第三循环:function(){
        for(let a3=0;a3<120;a3++){
            log("注册第三循环"+a3)
            封装API.等待(1000)
            if(手机判断参数 == "逍遥模拟器"){}
            else{                
                集成模块.找图点击(华为键盘图标保存路径,910,950,170,400)
            }
            if(textContains("智能验证检测中").exists()){
                log("注册第三循环找到智能验证检测中...")
                    back()
                    封装API.等待(1000)          
            }
            if(desc("确认").clickable(true).boundsInside(657,1443,972,1554).exists()||textContains("请输入手机号码").exists()){
                log("还在第一循环页面...")
                    this.注册第一循环();
                    this.注册第二循环();
            }
            else if(textContains("手机验证码").exists()){
                log("还在第二循环页面...")
                    this.注册第二循环();
            }
            保存号码 = 获取号码
            if(text("语音权限").exists()&&text("相机权限").exists()){
                封装API.等待(500)
                封装API.text("位置权限").click()
                封装API.等待(500)
                封装API.text("始终允许").click()
                封装API.等待(500)
                封装API.text("语音权限").click()
                封装API.等待(500)
                封装API.text("始终允许").click()
                封装API.等待(500)
                封装API.text("相机权限").click()
                封装API.等待(500)
                封装API.text("始终允许").click()
                封装API.等待(500)
                封装API.text("存储权限").click()
                封装API.等待(500)
                封装API.text("始终允许").click()
            }
            if(className("android.widget.LinearLayout").clickable(true).boundsInside(16,1737,1064,1828).exists()){
                var 男 = className("android.widget.LinearLayout").clickable(true).boundsInside(16,1737,1064,1828).findOne(1000)
                封装API.setView(男).click()
                封装API.等待(1000,2000)
                设置年 = random(1992,1999)
                设置月 = random(2,12)
                设置日 = random(2,28)
                for(let 年=1992;年<设置年;年++){
                    let 生日 = text(年).findOne(500)
                    封装API.setView(生日).click()
                    封装API.等待(200)
                }
                for(let 月=2;月<设置月;月++){
                    let 生日 = text(月).findOne(500)
                    封装API.setView(生日).click()
                    封装API.等待(200)
                }
                for(let 日=2;日<设置日;日++){
                    if(日<10){
                        let 生日 = text("0"+日).findOne(500)
                        封装API.setView(生日).click()
                        封装API.等待(200)
                    }
                    else{
                        let 生日 = text(日).findOne(500)
                        封装API.setView(生日).click()
                        封装API.等待(200)
                    }
                }
                封装API.等待(500)
                封装API.text("确定").click()
                封装API.等待(1000,2000)
                setText("槑槑")
                封装API.等待(500,1000)
                封装API.textCon("完成").click()
            }
            if(集成模块.找图点击(灵魂性别男保存路径,450,1450,175,470)=="找图成功"){
                封装API.等待(1000,2000)
                设置年 = random(1992,1999)
                设置月 = random(2,12)
                设置日 = random(2,28)
                for(let 年=1992;年<设置年;年++){
                    let 生日 = text(年).findOne(500)
                    封装API.setView(生日).click()
                    封装API.等待(200)
                }
                for(let 月=2;月<设置月;月++){
                    let 生日 = text(月).findOne(500)
                    封装API.setView(生日).click()
                    封装API.等待(200)
                }
                for(let 日=2;日<设置日;日++){
                    if(日<10){
                        let 生日 = text("0"+日).findOne(500)
                        封装API.setView(生日).click()
                        封装API.等待(200)
                    }
                    else{
                        let 生日 = text(日).findOne(500)
                        封装API.setView(生日).click()
                        封装API.等待(200)
                    }
                }
                封装API.等待(500)
                封装API.text("确定").click()
                封装API.等待(1000,2000)
                setText(签名[random(0,签名.length-1)])
                封装API.等待(500,1000)
                封装API.textCon("完成").click()
            }
            if(idContains("etPwd").exists()||idContains("etPhone").exists()||textContains("手机验证码").exists()){
                log("判断没有进入该函数界面,准备重新开始")
                程序判断 =  "重新开始"
                return
            }
            a = className("LinearLayout").boundsInside(27,1564,1053,1715).clickable(true).findOne(2000)
            if(a!=null){
                封装API.setView(a).click();
                封装API.等待(2000,3000);
                a = className("Image").boundsInside(60,1068,1020,1440).findOne(2000);
                封装API.等待(2000,3000);
                封装API.setView(a).click();
                封装API.等待(2000,3000);
                封装API.press(random(84,996),random(297,1224));
                封装API.等待(2000,3000);
                封装API.textCon("完成").click();
            }
            else if(textContains("选择头像").exists()){
                log("找到选择头像...")
                a = className("Image").boundsInside(60,1068,1020,1450).findOne(2000);
                封装API.等待(2000,3000);
                封装API.setView(a).click();
                封装API.等待(2000,3000);
                封装API.press(random(84,996),random(297,1224));
                封装API.等待(2000,3000);
                封装API.textCon("完成").click();
                封装API.descCon("完成").click();
            }
            if(textContains("请设置头像").exists()){
                封装API.idCon("userinfo_bg").click()
                封装API.等待(1000)
                if(手机判断参数 == "逍遥模拟器"){
                    var 男 = className("android.widget.LinearLayout").clickable(true).boundsInside(16,1737,1064,1828).findOne(1000)
                    封装API.setView(男).click()
                }
                else{                
                    集成模块.找图点击(灵魂性别男保存路径,450,1450,175,470)
                }
                封装API.等待(2000,3000);
                a = className("Image").boundsInside(60,1068,1020,1350).findOne(2000);
                封装API.等待(2000,3000);
                封装API.setView(a).click();
                封装API.等待(2000,3000);
                封装API.press(random(84,996),random(297,1224));
                封装API.等待(2000,3000);
                封装API.textCon("完成").click();
            }
            if(textContains("请完善您的信息").exists()){
                log("找到请完善您的信息...")
                this.完善您的信息()
            }
            else if(textContains("您的出生日期还没有选择").exists()){
                log("找到您的出生日期还没有选择...")
                封装API.text("确定").click()
                封装API.等待(500,1000)
                this.完善您的信息()
            }
            else if(idContains("button1").text("确定").exists()){
                log("button1确定按钮..")
                封装API.text("取消").click()
                this.完善您的信息()
            }
            else if(idContains("etPhone").exists()){
                log("找到登陆初始界面,准备结束...")
                程序判断 =  "重新开始"
                break;
            }
            else if(idContains("txtStart").exists()){
                log("找到开始鉴定...")
                封装API.idCon("txtStart").click()
                封装API.等待(1000,2000)
                if(手机判断参数 == "逍遥模拟器"){}
                else{                
                    集成模块.找图点击(华为键盘图标保存路径,910,950,170,400)
                }
                for(let a=0;a<60;a++){
                    封装API.等待(1000,2000)
                    if(textContains("先逛逛").exists()){
                        封装API.textCon("先逛逛").click();
                    }
                    if(textContains("灵魂自测游戏").exists()){
                        log("找到灵魂自测游戏...")
                        封装API.press(random(120,960),random(744,1164))
                    }
                    if(idContains("iv_enter_planet").exists()){
                        封装API.idCon("iv_enter_planet").click()
                    }
                    if(text("发现新版本").exists()){
                        封装API.text("忽略").click()
                    }
                    if(text("点我签到").exists()){
                        log("找到点击签到框,准备关闭...")
                        封装API.idCon("img_close").click()
                        break;
                    }
                    if(text("立刻添加").exists()){
                        封装API.text("立刻添加").click()
                        封装API.等待(2000,3000)
                        封装API.text("保存").click()
                    }
                    if(text("灵魂匹配").exists()){
                        log("找到灵魂匹配...")
                        break;
                    } 
                    if(idContains("main_tab_msg").exists()&&idContains("main_tab_planet").exists()){
                        log("找到灵魂首页面...");
                        break;
                    }
                }
            } 
            if(textContains("灵魂匹配").exists()){
                log("找到灵魂匹配了...")
                break;
            }
            if(idContains("main_tab_msg").exists()&&idContains("main_tab_planet").exists()){
                log("找到灵魂首页面...");
                break;
            }
            if(text("点我签到").exists()){
                log("找到点击签到框,准备关闭...")
                封装API.idCon("img_close").click()
                break;
            }
        }
    },
    soul灵魂匹配:function(){
        暂时不在线重复次数 = 0
        log("开始soul灵魂匹配...")
        if(idContains("etPwd").exists()||idContains("etPhone").exists()||textContains("手机验证码").exists()){
            log("判断没有进入该函数界面,准备重新开始")
            程序判断 =  "重新开始"
        }
        this.更改性别()
        for(let a=0;a<2;a++){
            log("灵魂匹配===>"+a)
            匹配界面重复次数 = 0
            封装API.等待(500)
            if(程序判断 == "重新开始"){
                log("找到重新开始判断...")
                break;
            }
            if(text("点我签到").exists()){
                log("soul灵魂匹配找到点击签到框,准备关闭...")
                封装API.idCon("img_close").click()
            }
            if(text("趣味测试").exists()){
                log("找到趣味测试,准备返回...")
                封装API.idCon("img_toolbar_back").click()     
                封装API.等待(1000,1500)             
            }
            else if(text("发现新版本").exists()){
                封装API.text("忽略").click()
                封装API.等待(500)
            }
            封装API.idCon("soul_match").click()
            while(idContains("right_layout").exists()!=true){
                sleep(1000)
                匹配界面重复次数++
                if(匹配界面重复次数>=15){
                    log("在匹配界面超过15秒,准备返回...")
                    暂时不在线重复次数++
                    log("暂时不在线重复次数===>"+暂时不在线重复次数++)
                    break;
                }
                if(textContains("你要找的人暂时不在线呢").exists()){
                    暂时不在线重复次数++
                    log("暂时不在线重复次数===>"+暂时不在线重复次数++)
                    封装API.idCon("titlebar_back_ivbtn").click() 
                    封装API.等待(1000) 
                    if(暂时不在线重复次数>=4){
                        log("暂时不在线次数大于等于4次.退出该循环...")
                        封装API.idCon("titlebar_back_ivbtn").click() 
                        break;
                    }
                    else{封装API.text("灵魂匹配").click()}    
                }
                if(idContains("robot_gif").exists()){
                    //log("找到robot_gif...");//暂时不做处理            
                }
            }
            if(暂时不在线重复次数>=4){
                log("暂时不在线次数大于等于4次.退出该循环...")
                封装API.idCon("titlebar_back_ivbtn").click() 
                break;
            }
            else if(匹配界面重复次数>=15){
                匹配界面重复次数 = 0
                封装API.idCon("titlebar_back_ivbtn").click() 
            }
            else{
                if(textContains("被多人举报").exists()){
                    toastLog("账号异常...")
                    程序判断 = "重新开始"
                    break;
                }
                setText(第一句[random(0,第一句.length-1)]);
                封装API.idCon("btn_send").click();
                封装API.等待(500)
                封装API.idCon("left_layout").click();
                封装API.等待(500)
            }
        }
        封装API.等待(1000,1500)  
        if(textContains("灵魂匹配").exists()){
            //随机点击星球好友聊天...
            for(let a=0;a<2;a++){
                log("星球匹配===>"+a)
                if(程序判断 == "重新开始"){
                    log("找到重新开始判断...")
                    break;
                }
                封装API.等待(500);
                封装API.press(random(45,1035),random(270,1260),200)
                封装API.等待(500);
                if(idContains("iv_pass").exists()){
                    封装API.idCon("iv_pass").click()
                }
                else if(idContains("iv_video_tip_close").exists()){
                    封装API.idCon("iv_video_tip_close").click()
                }
                else if(idContains("user_bottom_chat").exists()){
                    封装API.idCon("user_bottom_chat").click()
                    for(let b=0;a<10;b++){
                        封装API.等待(500)
                        if(idContains("menu_tab_phone").exists()&&idContains("menu_tab_img").exists()){
                            log("找到电话按钮和图片按钮...")
                            封装API.等待(500)
                            if(textContains("对方因违反").exists()){
                                封装API.text("确定").click()
                                break;
                            }
                            else{
                                setText(第一句[random(0,第一句.length-1)]);
                                封装API.等待(500) 
                                if(idContains("btn_send").exists()){
                                    封装API.idCon("btn_send").click();
                                }
                                else{
                                    封装API.等待(500)
                                    setText(第一句[random(0,第一句.length-1)]);
                                    封装API.等待(500) 
                                    封装API.idCon("btn_send").click();
                                }
                                break;
                            }
                        }
                        else if(textContains("被多人举报").exists()){
                            toastLog("账号异常...")
                            程序判断 = "重新开始"
                            break;
                        }
                    }
                    封装API.等待(500)
                    封装API.idCon("left_layout").click();
                    封装API.等待(500)
                    封装API.idCon("titlebar_back_ivbtn").click();
                }
            }
        }
        else{
            log("没有找到灵魂匹配...")
        }
    },
    更改性别:function(){
        封装API.idCon("main_tab_me").click()
        封装API.等待(1000)
        封装API.text("设置").click()
        封装API.等待(1000)
        封装API.text("更改个人信息").click()
        封装API.等待(1000)
        封装API.textCon("更改性").click()
        封装API.等待(1000)
        封装API.text("男").click()
        封装API.等待(2000)
        集成模块.找图点击(灵魂性别女保存路径,450,1450,175,470)
        封装API.等待(2000)
        if(text("女").exists()){
            log("更改性别完成...")
            封装API.text("完成").click()
            封装API.等待(1000)
            封装API.text("确定").click()
        }
        封装API.等待(1000)
        if(text("我的信息").exists()){
            log("在我的信息页面...")
            封装API.idCon("more_back_ivbtn").click()
            封装API.等待(1000)
            封装API.text("超萌捏脸").click()
        }
        for(let a=0;a<30;a++){
            封装API.等待(1000)
            if(descContains("捏脸").exists()){
                封装API.descCon("捏脸").click()
                if(1==random(1,5)){
                    封装API.等待(1000)
                    封装API.desc("完成").click()
                    封装API.等待(1000)
                    封装API.desc("保存头像").click()
                    break;
                }
            }
        }
        for(let a=0;a<30;a++){
            封装API.等待(1000)
            if(idContains("main_tab_msg").exists()&&idContains("main_tab_planet").exists()){
                log("找到灵魂首页面...");
                封装API.等待(1000)
                封装API.idCon("main_tab_planet").click()
                封装API.等待(1000)
                封装API.idCon("soul_match_filter").click()
                封装API.等待(1000)
                封装API.text("男").click()
                封装API.等待(1000)
                封装API.text("确定").click()
                封装API.等待(1000)
                break;
            }
        }
    },
    完善您的信息:function(){
        if(定制头像参数==0){
            定制头像参数++
            封装API.idCon("userinfo_bg").click()
            封装API.等待(1000)
            var 男 = className("android.widget.LinearLayout").clickable(true).boundsInside(16,1737,1064,1828).findOne(1000)
            封装API.setView(男).click()
            //集成模块.找图点击(灵魂性别男保存路径,450,1450,175,470)
            封装API.等待(2000,3000);
            a = className("Image").boundsInside(60,1068,1020,1450).findOne(2000);
            封装API.等待(2000,3000);
            封装API.setView(a).click();
            封装API.等待(2000,3000);
            封装API.press(random(84,996),random(297,1224));
            封装API.等待(2000,3000);
            封装API.textCon("完成").click();
        }
        封装API.idCon("userinfo_brithday").click()
        封装API.等待(1000,2000)
        设置年 = random(1992,1999)
        设置月 = random(2,12)
        设置日 = random(2,28)
        for(let 年=1992;年<设置年;年++){
            let 生日 = text(年).findOne(500)
            封装API.setView(生日).click()
            封装API.等待(200)
        }
        for(let 月=2;月<设置月;月++){
            let 生日 = text(月).findOne(500)
            封装API.setView(生日).click()
            封装API.等待(200)
        }
        for(let 日=2;日<设置日;日++){
            if(日<10){
                let 生日 = text("0"+日).findOne(500)
                封装API.setView(生日).click()
                封装API.等待(200)
            }
            else{
                let 生日 = text(日).findOne(500)
                封装API.setView(生日).click()
                封装API.等待(200)
            }
        }
        封装API.等待(500)
        封装API.text("确定").click()
        封装API.等待(1000,2000)
        setText(签名[random(0,签名.length-1)])
        封装API.等待(500,1000)
        封装API.textCon("完成").click()
    },
    容错:function(){
        thread = threads.start(function(){
            while(true){
                sleep(1000)
                if(textContains("恋爱铃上线啦").exists()&&textContains("知道了").exists()){
                    封装API.textCon("知道了").click()
                }
                if(text("发现新版本").exists()==true){
                    封装API.text("忽略").click();
                }
                if(textContains("温馨提示").exists()){
                    封装API.text("确定").click()
                }
                if(id("iv_match_close").exists()){
                    封装API.id("iv_match_close").click()
                }
                if(textContains("被多人举报").exists()){
                    toastLog("被多人举报...");
                    程序判断 = "重新开始";
                    封装API.text("确定").click()
                }
            }
        });
    },
    接码模块:function(){
        //单纯图片ID
        //滑块 = classNameContains("android.view.View").depth(7).boundsInside(90,420,990,1572).findOne(1000)
        for(let a=0;a<30;a++){
            log("接码模块第===》"+a+"次")
            //封装API.descCon("javascript").click()
            sleep(5000);
            //if(textContains("请在下图依次点击").exists()||textContains("请按语序依次点击下图文字").exists()){
            if(desc("确认").clickable(true).boundsInside(657,1443,972,1554).exists()||text("确认").clickable(true).boundsInside(657,1443,972,1554).exists()){
                log("找到接码模块确认按钮...")
                滑块 = classNameContains("android.view.View").boundsInside(90,420,990,1572).findOne(1000)
                if(滑块!=null){
                    滑块图片 = 滑块.bounds()
                    console.log(滑块图片);
                    var X1 = 滑块图片.left
                    var Y1 = 滑块图片.top
                    var X2 = 滑块图片.right
                    var Y2 = 滑块图片.bottom
                    var 联众打码API = require('./联众API');
                    var 联众打码api = new 联众打码API(联众账号,联众密码);
                    坐标 = 联众打码api.打码(X1,Y1+35,X2-X1,Y2-Y1-253,"1303","2","5");
                    log(坐标)
                    拼图坐标 = 坐标.split("|")
                    文字点击坐标=[]
                    for(let a=0;a<拼图坐标.length;a++){
                        sleep(1000)
                        文字点击坐标[a] = 拼图坐标[a].split(",")
                        封装API.press(X1+parseInt(文字点击坐标[a][0]),Y1+35+parseInt(文字点击坐标[a][1]),200)
                    }
                    sleep(1000)
                    var 确认按钮 = desc("确认").clickable(true).boundsInside(657,1443,972,1554).findOne(1000)
                    if(确认按钮==null){
                        var 确认按钮 = text("确认").clickable(true).boundsInside(657,1443,972,1554).findOne(1000)
                    }
                    封装API.setView(确认按钮).click()
                }
            }
            if(textContains("请在下图依次点击").exists()||descContains("请在下图依次点击").exists()){
                log("找到逍遥游接码模块...")
                滑块 = classNameContains("WebView").boundsInside(220,575,860,1385).findOne(1000)
                if(滑块!=null){
                    滑块图片 = 滑块.bounds()
                    console.log(滑块图片);
                    var X1 = 滑块图片.left
                    var Y1 = 滑块图片.top
                    var X2 = 滑块图片.right
                    var Y2 = 滑块图片.bottom
                    var 联众打码API = require('./联众API');
                    var 联众打码api = new 联众打码API(联众账号,联众密码);
                    坐标 = 联众打码api.打码(X1,Y1,X2-X1,Y2-Y1-100,"1303","2","5");
                    log(坐标)
                    拼图坐标 = 坐标.split("|")
                    文字点击坐标=[]
                    for(let a=0;a<拼图坐标.length;a++){
                        sleep(1000)
                        文字点击坐标[a] = 拼图坐标[a].split(",")
                        封装API.press(X1+parseInt(文字点击坐标[a][0]),Y1+35+parseInt(文字点击坐标[a][1]),200)
                    }
                    sleep(1000)
                    var 确认按钮 = desc("确认").clickable(true).boundsInside(615,1290,850,1370).findOne(1000)
                    if(确认按钮==null){
                        var 确认按钮 = text("确认").clickable(true).boundsInside(615,1290,850,1370).findOne(1000)
                    }
                    封装API.setView(确认按钮).click()
                }
            }
            else if(textContains("请点击").exists()&textContains("确认").exists()){
                滑块 = classNameContains("android.view.View").boundsInside(90,420,990,1572).findOne(1000)
                if(滑块!=null){
                    滑块图片 = 滑块.bounds()
                    console.log(滑块图片);
                    var X1 = 滑块图片.left
                    var Y1 = 滑块图片.top
                    var X2 = 滑块图片.right
                    var Y2 = 滑块图片.bottom
                    var 联众打码API = require('./联众API');
                    var 联众打码api = new 联众打码API(联众账号,联众密码);
                    坐标 = 联众打码api.打码(X1,Y1+35,X2-X1,Y2-Y1-253,"1303","1","1");
                    log(坐标)
                    拼图坐标 = 坐标.split("|")
                    文字点击坐标=[]
                    for(let a=0;a<拼图坐标.length;a++){
                        sleep(1000)
                        文字点击坐标[a] = 拼图坐标[a].split(",")
                        封装API.press(X1+parseInt(文字点击坐标[a][0]),Y1+35+parseInt(文字点击坐标[a][1]),200)
                    }
                    sleep(1000)
                    封装API.text("确认").click()
                }
            }
            else if(textContains("拖动左边滑块完成上方拼图").exists()||descContains("拖动左边滑块完成上方拼图").exists()){
                滑块 = classNameContains("FrameLayout").boundsInside(90,420,990,1572).findOne(1000)
                if(滑块!=null){
                    滑块图片 = 滑块.bounds()
                    console.log(滑块图片);
                    var X1 = 滑块图片.left
                    var Y1 = 滑块图片.top
                    var X2 = 滑块图片.right
                    var Y2 = 滑块图片.bottom
                    var 联众打码API = require('./联众API');
                    var 联众打码api = new 联众打码API(联众账号,联众密码);
                    坐标 = 联众打码api.打码(X1,Y1+35,X2-X1,Y2-Y1-300,"1303","1","1");
                    log(坐标)
                    拼图坐标 = 坐标.split("|")
                    文字点击坐标=[]
                    滑块按钮 = classNameContains("View").clickable(true).boundsInside(59,1037,365,1353).findOne(2000)
                    滑块按钮坐标 = 滑块按钮.bounds()
                    var 滑块按钮坐标X1 = 滑块按钮坐标.left
                    var 滑块按钮坐标Y1 = 滑块按钮坐标.top
                    console.log(滑块按钮坐标X1);
                    for(let a=0;a<拼图坐标.length;a++){
                        sleep(1000)
                        文字点击坐标[a] = 拼图坐标[a].split(",")
                        log(parseInt(文字点击坐标[a][0])+15)
                        var ra = new RootAutomator();
                        ra.swipe(滑块按钮坐标X1+10,滑块按钮坐标Y1+10,parseInt(文字点击坐标[a][0])+10,滑块按钮坐标Y1+10,2000)
                        sleep(1000)
                        ra.exit()
                    }
                }
            }
            else{break;}
        }
    },
}
module.exports = soul注册
