let 封装API = require(engines.myEngine().cwd() +"/封装API.js");
let soul注册 = {
    开始:function(){
        log("执行代码开始运行...")
        if(!requestScreenCapture()){
            toast("请求截图失败");
            exit();
        }
        while(true){
            this.全局变量();
            this.手机品牌判断()
            if(this.寻找字符串("清理APP数据")){
                this.清理APP数据()
            }
            if(this.寻找字符串("无极IP")){
                this.无极IP();
            }
            else if(this.寻找字符串("流量卡IP")){
                this.流量卡切换IP()
            }
            else{}
            if(this.寻找字符串("xx抹机")){
                log("开始xx抹机模式")
                this.新建环境();
            }
            else if(this.寻找字符串("多开分身")){
                log("开始多开分身模式")
                this.多开分身();
                this.制作分身();
            }
            this.注册soul();
            if(程序判断=="重新开始"){}
            else{
                this.soul灵魂匹配();
                if(程序判断=="重新开始"){}
                else{this.soul群发消息();}
            }
            if(this.寻找字符串("多开分身")){
                this.多开分身善后()
            }
        }
    },
    清理APP数据:function(){
        清理APP数据 = "清理APP数据"
        if(手机判断参数=="魔趣系统"){
            a = text("多开分身").findOne(1000)
            a.longClick()
            sleep(1000)
            b = className("FrameLayout").clickable(true).drawingOrder(2).findOne(1000)
            b.click()
            sleep(1000)
            封装API.text("存储").click()
            sleep(1000)
            封装API.text("清除数据").click()
            sleep(1000)
            封装API.text("确定").click()
            sleep(1000)
            home();
            sleep(1000)
            a = text("MOMO陌陌").findOne(1000)
            a.longClick()
            sleep(1000)
            b = className("FrameLayout").clickable(true).drawingOrder(2).findOne(1000)
            b.click()
            sleep(1000)
            封装API.text("存储").click()
            sleep(1000)
            封装API.text("清除数据").click()
            sleep(1000)
            封装API.text("确定").click()
            sleep(1000)
            home();
            sleep(1000)
        }
        else if(手机判断参数=="小米系统"){
            toastLog("准备清理Soul数据...")
            launchApp("Soul")
            sleep(1000)
            封装API.text("允许").click();
            sleep(2000)
            recents();
            sleep(2000)
            a = text("Soul").findOne(2000)
            封装API.longClickParent(a)
            sleep(1500)
            while(desc("应用详情").exists()!=true){
                this.返回主界面()
                launchApp("Soul")
                sleep(1000)
                封装API.text("允许").click();
                sleep(2000)
                recents();
                sleep(2000)
                a = text("Soul").findOne(2000)
                if(a!=null){
                    封装API.longClickParent(a)
                    sleep(1500)
                }
            }
            封装API.desc("应用详情").click();
            sleep(500)
            封装API.text("清除数据").click();
            sleep(500)
            封装API.text("清除全部数据").click();
            sleep(500)
            封装API.text("确定").click();
            sleep(500)
            this.返回主界面()
            toastLog("准备清理多开分身数据...")
            launchApp("多开分身")
            sleep(1000)
            封装API.text("允许").click();
            封装API.text("允许").click();
            sleep(2000)
            recents();
            sleep(2000)
            if(text("多开分身").exists()==true){
                a = text("多开分身").findOne(1000)
                封装API.longClickParent(a)
            }
            sleep(1500)
            while(desc("应用详情").exists()!=true){
                this.返回主界面()
                launchApp("多开分身")
                sleep(1000)
                封装API.text("允许").click();
                封装API.text("允许").click();
                sleep(2000)
                recents();
                sleep(2000)
                a = text("多开分身").findOne(2000)
                if(a!=null){
                    封装API.longClickParent(a)
                    sleep(1500)
                }
            }
            封装API.desc("应用详情").click();
            sleep(500)
            封装API.text("清除数据").click();
            sleep(500)
            封装API.text("清除全部数据").click();
            sleep(500)
            封装API.text("确定").click();
            sleep(500)
            this.返回主界面()
        }
        else{}
    },
    寻找字符串 :function(str){
        var i = 0 
        var 同步参数 = new Array()
        var 读取文本 = files.read("/sdcard/脚本/soul参数.txt");
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
    },
    流量卡切换IP:function(){
        this.返回主界面();
        if(手机判断参数== "华为系统"){
            launchApp("设置")
            sleep(500)
            封装API.text("飞行模式").click();
            sleep(5000)
            封装API.text("飞行模式").click();
            for(let a=0;a<10;a++){
                sleep(1000)
                if(text("飞行模式").exists()!=true){back();}
                else{break;}
            }
            this.返回主界面();
        }
        else if(手机判断参数== "小米系统"){
            launchApp("设置")
            for(let a=0;a<15;a++){
                sleep(1000)
                if(text("更多连接方式").exists()==true){
                    封装API.text("更多连接方式").click();
                }
                if(text("飞行模式").exists()==true){
                    封装API.text("飞行模式").click();
                    break;
                }
            }
            sleep(5000)
            封装API.text("飞行模式").click();
            for(let a=0;a<10;a++){
                sleep(1000)
                if(text("飞行模式").exists()!=true){back();}
                else{break;}
            }
            this.返回主界面();
        }
    },
    返回主界面:function(){
        sleep(500)
        while(true){
            封装API.等待(1000,2000);
            if(text("电话").exists()==false&&desc("拨号").exists()==false){
                home();
            }
            else if(text("电话").exists()==true){
                return;
            }
            else if(desc("拨号").exists()==true){
                return;
            }
        }
    },
    全局变量:function(){
        var i = 0;
        var 同步参数 = [];
        var 读取文本 = files.read("/sdcard/脚本/soul参数.txt");
        var 分割文本=读取文本.split("\n");
        分割文本.forEach(element => {
            log(element);
            同步参数[i] = element;
            i++;
        });
        易码账号 = 同步参数[0];
        易码密码 = 同步参数[1];
        联众账号 = 同步参数[2];
        联众密码 = 同步参数[3];
        打招呼话术 = 同步参数[4];
        统一回复话术 = 同步参数[5];
        程序判断 = 0
        获取验证码 = 0
        //分辨率宽度 = device.width
        //if(分辨率宽度=="1080"){分辨率参数=1}
        //else if(分辨率宽度=="720"){分辨率参数=1.5}
        分辨率参数=1
        清理APP数据 = 0
    },
    新建环境:function(){
        home();
        sleep(2000);
        launchApp("xx抹机神器");
        封装API.text("xx抹机神器").click()
        if(手机品牌判断=="华为系统"){
            for(let a=0;a<30;a++){
                sleep(1000);
                if(text("新建环境").exists()==true){
                    封装API.text("新建环境").click();
                    sleep(1000)
                    while(text("新建环境").exists()!=true){
                        sleep(1000)
                    }
                    sleep(1500);
                    图标 = classNameContains("LinearLayout").clickable(true).boundsInside(30,312,195,492).findOne(2000)
                    封装API.setView(图标).click()
                    sleep(1000);
                    封装API.text("启动").click();
                    break;
                }
            }
        }
        else{
            for(let a=0;a<30;a++){
                sleep(1000);
                if(text("新建环境").exists()==true){
                    封装API.idCon("iv_envlist").click();
                    while(idContains("swipelayout").exists()==true){
                        sleep(1000);
                        swipe(800,400,100,400,1000);
                        sleep(1000);
                        封装API.text("删除").click();
                        封装API.press(720/分辨率参数,440/分辨率参数);
                        sleep(500);
                    }
                    back();
                    sleep(1000);
                    break;
                }
            }
            封装API.text("新建环境").click();
            sleep(1000)
            while(text("新建环境").exists()!=true){
                sleep(1000)
            }
            sleep(1500);
            封装API.idCon("iv_icon").click();
            sleep(1000);
            封装API.text("启动").click();
        }
    },
    注册soul:function(){
        soul登陆变量 = 0
        for(let a1=0;a1<120;a1++){
            sleep(1000);
            soul登陆变量++
            if(idContains("btn_newUser").exists()==true){
                封装API.idCon("btn_newUser").click();
                sleep(2000);
            }
            else if(textContains("请输入手机号码").exists()==true){
                易码API = require('./易码API');
                登陆 = 易码API.登陆(易码账号,易码密码);
                sleep(1000);
                获取号码 = 易码API.获取号码(登陆,"9671");
                sleep(1000);
                console.log(获取号码);
                setText(获取号码);
                sleep(1000);
                封装API.text("确定").click();
                break;
            }
            if(soul登陆变量>=60){
                this.新建环境();
                soul登陆变量 = 0;
            }
        }
        for(let a2=0;a2<40;a2++){
            sleep(3000)
            if(textContains("请在下图依次点击").exists()==true||textContains("请按语序依次点击下图文字").exists()==true){
                this.接码模块();
            }
            else if(textContains("请点击").exists()==true&textContains("确认").exists()==true){
                this.接码模块();
            }
            else if(textContains("拖动左边滑块完成上方拼图").exists()==true||descContains("拖动左边滑块完成上方拼图").exists()==true){
                this.接码模块();
            }
            else if(textContains("手机验证码").exists()==true){
                获取验证码 = 易码API.获取验证码(登陆,"9671",获取号码);
                log(获取验证码);
                if(获取验证码=="获取验证码失败"){}
                else if(获取验证码=="3001"){获取验证码 = 易码API.获取验证码(登陆,"9671",获取号码)}
                else{
                    验证码 = 获取验证码.replace(/[^0-9]/ig,"");
                    验证码 = 验证码.replace(/[^0-9]/ig,"");//筛选出内容里面的所有数字
                    验证码 = 验证码.substr(0,4);//截取字符串从0位开始到第三位
                    log(验证码);
                    setText(验证码);//验证码
                    封装API.等待(8000,10000);
                    if(idContains("etPwd").exists()==true){
                        log("找到输入密码页面...")
                        idContains("etPwd").setText("cctv1995");
                        封装API.等待(500,1000);
                        back();
                        封装API.等待(500,1000);
                        封装API.text("确定").click();
                        break;
                    }
                }
            }
            if(idContains("etPwd").exists()==true){
                if(获取验证码 == 0){
                    log("没有找到输入验证码界面直接进入输入密码界面,判断该手机号已经被注册...")
                    程序判断 =  "重新开始"
                    return
                }
            }
            else if(text("重新发送").exists()==true){
                log("找到重新发送...");
                封装API.idCon("rlBack").click();
            }
            else if(idContains("etPhone").exists()==true){
                获取号码 = 易码API.获取号码(登陆,"9671");
                sleep(1000)
                console.log(获取号码);
                setText(获取号码);
                封装API.text("确定").click();
            }
        }
        for(let a3=0;a3<120;a3++){
            log("3号===>"+a3)
            封装API.等待(1000,2000)
            if(idContains("etPwd").exists()==true||idContains("etPhone").exists()==true||textContains("手机验证码").exists()==true){
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
                封装API.press(random(84/分辨率参数,996/分辨率参数),random(297/分辨率参数,1224/分辨率参数));
                封装API.等待(2000,3000);
                封装API.textCon("完成").click();
            }
            else if(textContains("选择头像").exists()==true){
                log("找到选择头像...")
                a = className("Image").boundsInside(60,1068,1020,1440).findOne(2000);
                封装API.等待(2000,3000);
                封装API.setView(a).click();
                封装API.等待(2000,3000);
                封装API.press(random(84/分辨率参数,996/分辨率参数),random(297/分辨率参数,1224/分辨率参数));
                封装API.等待(2000,3000);
                封装API.textCon("完成").click();
                封装API.descCon("完成").click();
            }
            if(textContains("请完善您的信息").exists()==true){
                log("找到请完善您的信息...")
                封装API.idCon("userinfo_brithday").click()
                封装API.等待(1000,2000)
                封装API.textCon("1991").click()
                封装API.等待(1000,2000)
                封装API.textCon("1995").click()
                封装API.等待(1000,2000)
                for(let a=0;a<random(1,10);a++){
                    封装API.desc("下个月").click();
                    封装API.等待(500,1000)
                }
                封装API.等待(1000,2000)
                封装API.press(random(168/分辨率参数,910/分辨率参数),random(959/分辨率参数,1439/分辨率参数))
                封装API.等待(500,1000)
                if(textContains("您的出生日期还没有选择").exists()==true){}
                else{
                    封装API.textCon("确定").click()
                    封装API.等待(1000,2000)
                    setText("人生如梦幻")
                    back()
                    封装API.等待(1000,2000)
                    封装API.textCon("完成").click()
                }
            }
            else if(textContains("您的出生日期还没有选择").exists()==true){
                log("找到您的出生日期还没有选择...")
                封装API.等待(1000,2000)
                封装API.textCon("确定").click()
                封装API.等待(1000,2000)
                封装API.idCon("userinfo_brithday").click()
                封装API.等待(1000,2000)
                封装API.textCon("1991").click()
                封装API.等待(1000,2000)
                封装API.textCon("1995").click()
                封装API.等待(1000,2000)
                for(let a=0;a<random(1,10);a++){
                    封装API.desc("下个月").click();
                    封装API.等待(500,1000)
                }
                封装API.等待(1000,2000)
                封装API.press(random(168/分辨率参数,910/分辨率参数),random(959/分辨率参数,1439/分辨率参数))
            }
            else if(text("1991").exists()==true){
                log("找到1991..")
                封装API.textCon("1991").click()
                封装API.等待(1000,2000)
                封装API.textCon("1995").click()
                封装API.等待(1000,2000)
                for(let a=0;a<random(1,10);a++){
                    封装API.desc("下个月").click();
                    封装API.等待(500,1000)
                }
                封装API.等待(1000,2000)
                封装API.press(random(168/分辨率参数,910/分辨率参数),random(959/分辨率参数,1439/分辨率参数))
                封装API.等待(500,1000)
                封装API.textCon("确定").click()
                封装API.等待(1000,2000)
                setText("人生如梦幻")
                back()
                封装API.等待(1000,2000)
                封装API.textCon("完成").click()
            }
            else if(idContains("etPhone").exists()==true){
                log("找到登陆初始界面,准备结束...")
                程序判断 =  "重新开始"
                return 
            }
            else if(idContains("txtStart").exists()==true&idContains("txtTop").exists()==true){
                log("找到开始鉴定...")
                封装API.idCon("txtStart").click()
                封装API.等待(1000,2000)
                for(let a=0;a<60;a++){
                    封装API.等待(1000,2000)
                    if(textContains("灵魂自测游戏").exists()==true){
                        log("找到灵魂自测游戏...")
                        封装API.press(random(120/分辨率参数,960/分辨率参数),random(744/分辨率参数,1164/分辨率参数))
                    }
                    if(idContains("iv_enter_planet").exists()==true){
                        封装API.idCon("iv_enter_planet").click()
                    }
                    if(text("发现新版本").exists()==true){
                        封装API.text("忽略").click()
                    }
                    if(text("立刻添加").exists()==true){
                        封装API.text("立刻添加").click()
                        封装API.等待(2000,3000)
                        封装API.text("保存").click()
                    }
                    if(text("灵魂匹配").exists()==true){
                        log("找到灵魂匹配...")
                        break;
                    } 
                }
            } 
            else if(text("灵魂匹配").exists()==true){
                log("找到灵魂匹配...")
                break;
            }   
        }
    },
    soul灵魂匹配:function(){
        暂时不在线重复次数 = 0
        log("开始soul灵魂匹配...")
        if(idContains("etPwd").exists()==true||idContains("etPhone").exists()==true||textContains("手机验证码").exists()==true){
            log("判断没有进入该函数界面,准备重新开始")
            程序判断 =  "重新开始"
            return
        }
        封装API.idCon("main_tab_msg").click()
        if(textContains("私聊暂时不给你用了呢").exists()==true){
            log("私聊暂时不给你用了呢...")
        }
        else{
            封装API.idCon("main_tab_planet").click()
            for(let a=0;a<50;a++){
                log("灵魂匹配===>"+a)
                匹配界面重复次数 = 0
                封装API.等待(400,600)
                if(text("趣味测试").exists()==true){
                    log("找到趣味测试,准备返回...")
                    封装API.idCon("img_toolbar_back").click()     
                    封装API.等待(1000,1500)             
                }
                else if(text("发现新版本").exists()==true){
                    封装API.text("忽略").click()
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
                    if(textContains("你要找的人暂时不在线呢").exists()==true){
                        暂时不在线重复次数++
                        log("暂时不在线重复次数===>"+暂时不在线重复次数++)
                        封装API.idCon("titlebar_back_ivbtn").click() 
                        封装API.等待(1000,1500) 
                        if(暂时不在线重复次数>=4){
                            log("暂时不在线次数大于等于4次.退出该循环...")
                            break;
                        }
                        else{封装API.text("灵魂匹配").click()}    
                    }
                    if(idContains("robot_gif").exists()==true){
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
                    setText(打招呼话术);
                    封装API.idCon("btn_send").click();
                    封装API.等待(500,1000);
                    封装API.idCon("left_layout").click();
                }
            }
        }
        封装API.等待(1000,1500)  
        if(textContains("灵魂匹配").exists()==true){
            //随机点击星球好友聊天...
            for(let a=0;a<50;a++){
                log("星球匹配===>"+a)
                封装API.等待(500,1000);
                封装API.press(random(45/分辨率参数,1035/分辨率参数),random(270/分辨率参数,1260/分辨率参数),200)
                sleep(600);
                if(idContains("iv_pass").exists()==true){
                    封装API.idCon("iv_pass").click()
                }
                else if(idContains("iv_video_tip_close").exists()==true){
                    封装API.idCon("iv_video_tip_close").click()
                }
                else if(idContains("user_bottom_chat").exists()==true){
                    封装API.idCon("user_bottom_chat").click()
                    sleep(1000);
                    setText(打招呼话术);
                    sleep(1000);
                    封装API.idCon("btn_send").click();
                    封装API.等待(500,1000);
                    封装API.idCon("left_layout").click();
                    封装API.等待(500,1000);
                    封装API.idCon("titlebar_back_ivbtn").click();
                }
            }
        }
        else{
            log("没有找到灵魂匹配...")
        }
    },
    soul群发消息:function(){
        log("开始群发消息...")
        封装API.等待(1000,1500); 
        封装API.idCon("main_tab_msg").click()
        封装API.等待(1000,1500); 
        if(textContains("允许匹配").exists()==true){}
        else(alert("不在信息界面..."))
        for(let a=0;a<10;a++){
            聊天内容 = 0;
            聊天内容重复次数 = 0;
            let X1 = 封装API.随机数(100,300);
            let Y1 = 1560;
            let X2 = 封装API.随机数(800,1000);
            let Y2 = 300;
            if(idContains("left_layout").exists()==true&&idContains("right_layout").exists()==true){
                封装API.idCon("left_layout").click();
                封装API.等待(500,1000);
            }
            聊天人员集 = idContains("name").find();
            log(a.length);
            if(text("发现新版本").exists()==true){
                封装API.text("忽略").click()
            }
            聊天人员集.forEach(element => {
                if(element.bounds().centerX() >= 0 && element.bounds().centerY() >= 0){
                    封装API.setView(element).click();
                    封装API.等待(1000,1200);
                    聊天内容集 = idContains("tv_chatcontent").find();
                    聊天内容集.forEach(element => {
                        if(element.text()==统一回复话术){
                            聊天内容 = "找到";
                            聊天内容重复次数++;
                        }
                    });
                    if(聊天内容 =="找到"){
                        if(聊天内容重复次数>=4){
                            log("聊天内容重复次数大于等于4次");
                            return "群发结束";
                        }
                        else{
                            log("聊天内容重复次数===>"+聊天内容重复次数);
                            封装API.等待(500,1000);
                            封装API.idCon("left_layout").click();
                            封装API.等待(500,1000);
                            聊天内容 = 0;
                        }
                    }
                    else{
                        if(idContains("setting_back_ivbtn").exists()==true){
                            封装API.idCon("setting_back_ivbtn").click()
                        }
                        else{
                            setText(统一回复话术);
                            封装API.idCon("btn_send").click();
                            封装API.等待(500,1000);
                            封装API.idCon("left_layout").click();
                            封装API.等待(500,1000);
                        }
                    }
                }
                else{
                    log("消息框坐标为负...");
                }
            });
            封装API.等待(1000,1500);
            封装API.swipe(X1,Y1,X2,Y2,1000);
            封装API.等待(1000,1500);
        }
    },
    接码模块:function(){
        //单纯图片ID
        //滑块 = classNameContains("android.view.View").depth(7).boundsInside(90,420,990,1572).findOne(1000)
        for(let a=0;a<30;a++){
            log("接码模块第===》"+a+"次")
            封装API.descCon("javascript").click()
            sleep(5000);
            if(textContains("请在下图依次点击").exists()==true||textContains("请按语序依次点击下图文字").exists()==true){
                滑块 = classNameContains("android.view.View").depth(7).boundsInside(90,420,990,1572).findOne(1000)
                if(滑块!=null){
                    滑块图片 = 滑块.bounds()
                    console.log(滑块图片);
                    var X1 = 滑块图片.left
                    var Y1 = 滑块图片.top
                    var X2 = 滑块图片.right
                    var Y2 = 滑块图片.bottom
                    var 联众打码API = require('./联众API');
                    var 联众打码api = new 联众打码API(联众账号,联众密码);
                    坐标 = 联众打码api.打码(X1,Y1+35/分辨率参数,X2-X1,Y2-Y1-253/分辨率参数,"1303","2","5");
                    log(坐标)
                    拼图坐标 = 坐标.split("|")
                    文字点击坐标=[]
                    for(let a=0;a<拼图坐标.length;a++){
                        sleep(1000)
                        文字点击坐标[a] = 拼图坐标[a].split(",")
                        封装API.press(X1+parseInt(文字点击坐标[a][0]),Y1+35/分辨率参数+parseInt(文字点击坐标[a][1]),200)
                    }
                    sleep(1000)
                    封装API.text("确认").click()
                }
            }
            else if(textContains("请点击").exists()==true&textContains("确认").exists()==true){
                滑块 = classNameContains("android.view.View").depth(7).boundsInside(90,420,990,1572).findOne(1000)
                if(滑块!=null){
                    滑块图片 = 滑块.bounds()
                    console.log(滑块图片);
                    var X1 = 滑块图片.left
                    var Y1 = 滑块图片.top
                    var X2 = 滑块图片.right
                    var Y2 = 滑块图片.bottom
                    var 联众打码API = require('./联众API');
                    var 联众打码api = new 联众打码API(联众账号,联众密码);
                    坐标 = 联众打码api.打码(X1,Y1+35/分辨率参数,X2-X1,Y2-Y1-253/分辨率参数,"1303","1","1");
                    log(坐标)
                    拼图坐标 = 坐标.split("|")
                    文字点击坐标=[]
                    for(let a=0;a<拼图坐标.length;a++){
                        sleep(1000)
                        文字点击坐标[a] = 拼图坐标[a].split(",")
                        封装API.press(X1+parseInt(文字点击坐标[a][0]),Y1+35/分辨率参数+parseInt(文字点击坐标[a][1]),200)
                    }
                    sleep(1000)
                    封装API.text("确认").click()
                }
            }
            else if(textContains("拖动左边滑块完成上方拼图").exists()==true||descContains("拖动左边滑块完成上方拼图").exists()==true){
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
    无极IP地址:function(){
        var 百度识图API = require('./百度识图API');
        var baiduAi = new 百度识图API("aeGK8bG0RCIFcziFI9rYD6Ay","6gGitZOIGOMLFXKIh05RG0gGgsGKMVM2"); 
        var 地理位置控件 = className("LinearLayout").depth(6).drawingOrder(3).findOne(2000)
        if(地理位置控件==null){
            var 地理位置控件 = className("TextView").id("locs").findOne(1000)
            if(地理位置控件!=null){
                地理位置=地理位置控件.text()
                toastLog(地理位置)
            }
            else{
                sleep(1000)
                this.无极IP地址();
                if(地理位置控件!=null){}
                else{alert("没有找到地理位置控件")}
            }
        }
        else{
            地理位置坐标=地理位置控件.bounds()
            var X1 = 地理位置坐标.left
            var Y1 = 地理位置坐标.top
            var X2 = 地理位置坐标.right
            var Y2 = 地理位置坐标.bottom
            地理位置 = baiduAi.getVifCode(X1,Y1,X2-X1,Y2-Y1);
            toastLog(地理位置)
            this.返回主界面();
        }
    },
    无极IP:function(){
        toastLog("开始启动无极IP...")
        launchApp("无极")
        sleep(1000)
        封装API.text("允许").click();
        sleep(1000)
        封装API.text("切换").click();
        sleep(3000)
        this.返回主界面();
        sleep(3000)
        launchApp("无极")
        sleep(1000)
        封装API.text("允许").click();
        sleep(5000)
        if(text("申请失败").exists()==true){
            封装API.text("申请失败").click();
            sleep(3000)
            this.返回主界面();
            sleep(3000)
            launchApp("无极")
            sleep(1000)
            封装API.text("允许").click();
            sleep(5000)
        }
        if(text("报告").exists()==true){
            封装API.text("报告").click();
            sleep(3000)
            this.返回主界面();
            sleep(3000)
            launchApp("无极")
            sleep(1000)
            封装API.text("允许").click();
            sleep(5000)
        }
        this.无极IP地址()
        toastLog("无极IP运行完毕...")
    },
    多开分身:function(){
        sleep(1000)
        launchApp("多开分身")
        sleep(2000)
        封装API.text("允许").click();
        if(清理APP数据=="清理APP数据"){
            for(let a=0;a<10;a++){
                封装API.等待(3000,4000)
                scrollDown()
                if(text("立即体验").exists()==true){
                    break;
                }
                if(text("立即重试").exists()==true){
                    toastLog("网路连接有问题,准备切换IP...")
                    this.返回主界面()
                    if(this.寻找字符串("无极IP")){
                        this.无极IP();
                    }
                    else if(this.寻找字符串("流量卡IP")){
                        this.流量卡切换IP()
                    }
                }        
            }
            封装API.text("立即体验").click()
            sleep(6000)
            封装API.press(500,1750,500)
            sleep(3000)
        }
        var 多开分身添加变量 = 0       
        while(id("iv_btn_create").exists()!=true){
            log("没有找到添加分身的控件ID...,准备返回")
            sleep(1000)
            back();
            sleep(1000)
            if(text("电话").exists()==true){
                log("判断在主页面...,准备重新打开")
                launchApp("多开分身")
                sleep(1000)
                封装API.text("允许").click();
            }
            //N次循环都没有找到,重新打开多开分身
            多开分身添加变量++
            if(多开分身添加变量>30){
                this.返回主界面();
                launchApp("多开分身")
                sleep(1000)
                封装API.text("允许").click();
            }
        }
        封装API.id("iv_btn_create").click();
        for(let a=0;a<8;a++){
            sleep(1000)
            封装API.随机上滑()
            sleep(1000)
            if(text("Soul").exists()==true){
                var 陌陌分身坐标 = text("Soul").findOne(1000).parent().bounds()
                var X1 = 陌陌分身坐标.left
                var Y1 = 陌陌分身坐标.top
                var X2 = 陌陌分身坐标.right
                var Y2 = 陌陌分身坐标.bottom
                console.log(陌陌分身坐标);
                if(text("制作分身").boundsInside(X1,Y1,X2,Y2).exists() == true){
                    log("制作分身1号代码")
                    let a =text("制作分身").boundsInside(X1,Y1,X2,Y2).findOne(1000);
                    封装API.setView(a).click();
                    break;
                }
                else{
                    log("制作分身2号代码")
                    var 陌陌分身坐标 = text("Soul").findOne(1000).parent().parent().bounds()
                    var X1 = 陌陌分身坐标.left
                    var Y1 = 陌陌分身坐标.top
                    var X2 = 陌陌分身坐标.right
                    var Y2 = 陌陌分身坐标.bottom
                    if(text("制作分身").boundsInside(X1,Y1,X2,Y2).exists() == true){
                        let a =text("制作分身").boundsInside(X1,Y1,X2,Y2).findOne(1000);
                        封装API.setView(a).click();
                        break;
                    }
                }
            }
        }
        sleep(1000)
    },
    制作分身:function(){
        sleep(1000)
        while(text("开始制作").exists()!=true){
            this.返回主界面()
            this.多开分身()
        }
        封装API.text("去LOGO水印").click();
        sleep(500)
        封装API.text("高级选项").click();
        sleep(500)
        封装API.text("虚拟化SD卡").click();
        var 机型伪装坐标 = text("机型伪装").findOne(1000).parent().parent().bounds()
        var X1 = 机型伪装坐标.left
        var Y1 = 机型伪装坐标.top
        var X2 = 机型伪装坐标.right
        var Y2 = 机型伪装坐标.bottom
        if(text("设置").boundsInside(X1,Y1,X2,Y2).exists() == true){
            text("设置").boundsInside(X1,Y1,X2,Y2).findOne(1000).click();
        }
        sleep(1000)
        this.机型伪装设置();
        sleep(1000)
        var 虚拟位置坐标 = text("虚拟定位").findOne(1000).parent().parent().bounds()
        var X1 = 虚拟位置坐标.left
        var Y1 = 虚拟位置坐标.top
        var X2 = 虚拟位置坐标.right
        var Y2 = 虚拟位置坐标.bottom
        if(text("设置").boundsInside(X1,Y1,X2,Y2).exists() == true){
            text("设置").boundsInside(X1,Y1,X2,Y2).findOne(1000).click();
        }
        sleep(1000)
        this.虚拟定位设置();
        sleep(1000)
        if(text("开始制作").exists()==true){封装API.text("开始制作").click();}
        else{
            this.返回主界面()
            if(this.寻找字符串("无极IP")){
                this.无极IP();
            }
            else if(this.寻找字符串("流量卡IP")){
                this.流量卡切换IP()
            }
            this.多开分身();
            this.制作分身();
            return
        }
        if(手机判断参数=="华为系统"){
            while(textContains("我已充分了解该风险").exists()!=true){
                sleep(500);
            }
            封装API.textCon("我已充分了解该风险").click();
            sleep(500)
            封装API.textCon("继续安装").click();
            toastLog("多开分身运行完毕...")
            while(text("打开").exists()!=true){
                sleep(500);
            }
            封装API.text("打开").click();
        }
        else if(手机判断参数=="魔趣系统"){
            threads.start(function(){
                for(let a=0;a<12;a++){
                    sleep(5000)
                    log("开始寻找安装控件")
                    封装API.text("安装").click();
                }
            });
            while(text("打开").exists()!=true){
                sleep(500);
            }
            封装API.text("打开").click();
            threads.shutDownAll()
        } 
        else if(手机判断参数=="小米系统"){
            for(let a=0;a<150;a++){
                sleep(1000)
                if(text("安装").exists()==true){
                    封装API.text("安装").click();
                }
                if(text("打开").exists()==true){
                    封装API.text("打开").click();
                }
                if(text("允许").exists()==true){
                    封装API.text("允许").click();
                    break;
                }
                if(idContains("btn_newUser").exists()==true){
                    break;
                }
                else if(textContains("请输入手机号码").exists()==true){
                    break;
                } 
            }
        }
    },
    机型伪装设置:function(){
        /*var 手机品牌坐标 = text("手机品牌：").findOne(1000).parent().bounds()
        var X1 = 手机品牌坐标.left
        var Y1 = 手机品牌坐标.top
        var X2 = 手机品牌坐标.right
        var Y2 = 手机品牌坐标.bottom
        if(className("LinearLayout").boundsInside(X1,Y1,X2,Y2).exists() == true){
            var 手机品牌 = className("LinearLayout").boundsInside(X1,Y1,X2,Y2).findOne(1000)
            封装API.setView(手机品牌).click()
            sleep(1000)
            封装API.text("小米").click()
        }
        sleep(1000)
        var 手机型号坐标 = text("手机型号：").findOne(1000).parent().bounds()
        var X1 = 手机型号坐标 .left
        var Y1 = 手机型号坐标 .top
        var X2 = 手机型号坐标 .right
        var Y2 = 手机型号坐标 .bottom
        if(className("LinearLayout").boundsInside(X1,Y1,X2,Y2).exists() == true){
            var 手机型号 = className("LinearLayout").boundsInside(X1,Y1,X2,Y2).findOne(1000)
            封装API.setView(手机型号).click()
            sleep(1000)
            封装API.text("小米6").click()
        }*/
        封装API.id("spinnerBrand").click()
        sleep(1500)
        封装API.text("小米").click()
        sleep(1500)
        封装API.id("spinnerModel").click()
        sleep(1500)
        机型选择 = id("text1").find()
        if(机型选择!=null){id("text1").findOnce(random(0,8)).click();}
        else{
            sleep(1500)
            机型选择 = id("text1").find()
            id("text1").findOnce(random(0,8)).click();
        }
        sleep(1500)
        for(let a=0;a<5;a++){
            封装API.text("换一换").click()
            sleep(300)
        }
        封装API.text("启用机型伪装").click()
    },
    虚拟定位设置:function(){
        sleep(1000);
        if(text("请打开GPS").exists()==true){
            back();
            sleep(500)
        }
        封装API.id("tv_search").click()
        sleep(1000)
        //setText("嘉兴中学")//测试位置
        if(this.寻找字符串("流量卡IP")){
            地理位置 = Array("浙江嘉兴","浙江湖州","浙江杭州","浙江绍兴","浙江宁波","浙江丽水","浙江台州","浙江温州","浙江金华","浙江衢州","浙江舟山")
            setText(地理位置[random(0,地理位置.length-1)]+"中学")
        }
        else if(this.寻找字符串("无极IP")){
            setText(地理位置+"中学")
        }
        for(let a=0;a<15;a++){
            sleep(1000)
            封装API.text("搜索").click();
            sleep(1000)
            if(text("搜索").exists() == true){
                var 定位地址 = className("TextView").clickable(false).find()
                if(定位地址==null){}
                else{
                    封装API.setView(className("TextView").findOnce(random(0,18))).click();
                    sleep(1000)
                    if(text("定位到此").exists() == true){
                        封装API.text("定位到此").click()
                        break;
                    }
                }
            } 
            else{sleep(1000)}  
        }
        //此控件点击不稳定,出现莫名卡死
        /*for(let a=0;a<15;a++){
            if(text("搜索").exists() == true){
                var 定位地址 = className("LinearLayout").clickable(true).find()
                if(定位地址==null){}
                else{
                    className("LinearLayout").findOnce(random(0,定位地址.length-1)).click();
                    sleep(1000)
                    if(text("定位到此").exists() == true){
                        封装API.text("定位到此").click()
                        break;
                    }
                }
            } 
            else{sleep(1000)}  
        }*/
    },
    手机品牌判断:function(){
        sleep(500)
        for(let a=0;a<5;a++){
            if(text("电话").exists()==false&&desc("拨号").exists()==false){
                home();
                sleep(1000)
            }
            else{break;}
        }
        if(text("电话").exists()==true){
            if(text("电话").findOne(1000).packageName()=="com.miui.home"){
                toastLog("鉴定为小米系统")
                封装API.等待(800,1200);
                手机判断参数= "小米系统"
            }
            else if(text("电话").findOne(1000).packageName()=="com.bbk.launcher2"){
                toastLog("鉴定为VIVO系统")
                封装API.等待(800,1200);
                手机判断参数= "VIVO系统"
            }
            else if(text("电话").findOne(1000).packageName()=="org.mokee.lawnchair"){
                toastLog("鉴定为魔趣系统系统")
                封装API.等待(800,1200);
                手机判断参数= "魔趣系统"
            }
        }
        else if(desc("拨号").exists()==true){
            if(desc("拨号").findOne(1000).packageName()=="com.huawei.android.launcher"){
                toastLog("鉴定为华为系统")
                封装API.等待(800,1200);
                手机判断参数= "华为系统"
            }
        }
    },
    多开分身善后:function(){
        this.返回主界面();
        if(手机品牌判断=="小米系统"){
            launchApp("多开分身")
            for(let a=0;a<10;a++){
                sleep(1000)
                if(text("管理").exists()==true){
                    封装API.text("管理").click();
                    break;
                }
            }
            封装API.等待(2000,3000)
            封装API.text("清理缓存").click() 
            for(let a=0;a<5;a++){
                if(text("完成").exists()==true){
                    封装API.text("完成").click() 
                    break;
                }
                else{封装API.等待(2000,3000)}
            }
            封装API.等待(1000,2000)
            封装API.text("删除分身").click() 
            封装API.等待(1000,2000)
            封装API.text("确定").click() 
            封装API.等待(3000,5000)
            封装API.text("立即清理").click() 
            for(let a=0;a<30;a++){
                if(textContains("清理选中垃圾").exists()==true){
                    封装API.textCon("清理选中垃圾").click();
                    break
                }
                else{sleep(2000)}
            }
            for(let a=0;a<30;a++){
                if(text("清理完成").exists()==true){
                    封装API.text("清理完成").click();
                    break
                }
                else{sleep(2000)}
            }
        }
        else{
            launchApp("多开分身")
            for(let a=0;a<10;a++){
                sleep(1000)
                if(text("管理").exists()==true){
                    封装API.text("管理").click();
                    break;
                }
            }
            封装API.等待(2000,3000)
            封装API.text("清理缓存").click() 
            for(let a=0;a<5;a++){
                if(text("完成").exists()==true){
                    封装API.text("完成").click() 
                    break;
                }
                else{封装API.等待(2000,3000)}
            }
            封装API.等待(1000,2000)
            封装API.text("删除分身").click() 
            封装API.等待(1000,2000)
            封装API.text("确定").click() 
            封装API.等待(3000,5000)
        }
        this.返回主界面();
    }
}
module.exports = soul注册
