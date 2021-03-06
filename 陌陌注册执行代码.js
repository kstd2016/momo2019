//1.0.3,增加了多开分身没有网络的解决办法,优化了一些小细节，增加了完成进入后的等待时间，增加了无极停止运行的处理方案
//1.0.4,修复加载头像函数错误的问题，修复694行错误,修复清理内存失败的问题,增加了跳过等待时长
//1.0.5增加小米双击清理任务,增加了整体循环代码,增加了没有定位地址的解决办法,增加了设置头像时间
//1.0.6修改了TW短信API的一些设置,修复了时间不显示，优化了一些细节,修复了陌陌返回主页卡死的情况
//1.0.7增加了多线程报告.修改了验证码输入方式,优化整体效率,增加了Q跳登陆
let 封装API = require(engines.myEngine().cwd() +"/封装API.js");
let 陌陌注册 = {
    开始:function(){
        if(!requestScreenCapture()){
            toast("请求截图失败");
            exit();
        }
        while(true){
            this.综合变量();
            this.打开报告();
            this.手机品牌判断();
            this.返回主界面();
            this.清理APP数据();
            this.返回主界面();
            this.文件清理();
            this.返回主界面();
            this.清理内存();
            if(this.寻找字符串("无极IP")){
                this.无极IP();
            }
            else if(this.寻找字符串("流量卡IP")){
                this.流量卡切换IP()
            }
            this.返回主界面();
            this.多开分身();
            this.制作分身();
            if(this.寻找字符串("接码注册")){
                this.陌陌接码注册();
            }
            else if(this.寻找字符串("Q跳注册")){
                this.陌陌Q跳注册()
            }
            this.陌陌注册善后()
            toastLog("准备下一个账号...")
            sleep(5000)
        }
    },
    寻找字符串 :function(str){
        var i = 0 
        var 同步参数 = new Array()
        var 读取文本 = files.read("/sdcard/陌陌注册参数.txt");
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
    综合变量:function(){
        陌陌账号参数=0
        陌陌账号判断 = 0
        联众账号 = "kstd2016"
        联众密码 = "Wentao1987223"
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
    返回主界面:function(){
        sleep(500)
        while(true){
            封装API.等待(1000,2000);
            if(text("电话").exists()==false&&desc("拨号").exists()==false){
                home();
            }
            else if(text("电话").exists()==true){
                if(手机判断参数 == "魔趣系统"){
                    if(text("FM 电台").exists()!=true){
                        return;
                        }
                    else{home()}
                }
                else{return;}
            }
            else if(desc("拨号").exists()==true){
                return;
            }
        }
    },
    清理内存:function(){
        sleep(500)
        recents();
        sleep(2000);
        log(手机判断参数)
        if(手机判断参数=="小米系统"){
            封装API.descCon("双击清理全部任务").click()
            封装API.descCon("双击清理全部任务").click()
            log("===清理手机系统内存===");
            sleep(2000);
        }
        if(手机判断参数=="VIVO系统"){
            封装API.text("关闭全部").click();
            log("===清理手机系统内存===");
            sleep(2000);
        }
        else if(手机判断参数=="华为系统"){
            封装API.id("recent_igmbutton_clear_all").click();
            log("===清理手机系统内存===");
            sleep(2000);
        }
        else if(手机判断参数=="魔趣系统"){
            封装API.text("全部清除").click();
            log("===清理手机系统内存===");
            sleep(2000);
        }
    },
    清理APP数据:function(){
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
            toastLog("准备清理MOMO陌陌数据...")
            launchApp("MOMO陌陌")
            sleep(1000)
            封装API.text("允许").click();
            sleep(2000)
            recents();
            sleep(2000)
            a = text("MOMO陌陌").findOne(2000)
            封装API.longClickParent(a)
            sleep(1500)
            while(desc("应用详情").exists()!=true){
                this.返回主界面()
                launchApp("MOMO陌陌")
                sleep(1000)
                封装API.text("允许").click();
                sleep(2000)
                recents();
                sleep(2000)
                a = text("MOMO陌陌").findOne(2000)
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
    },
    多开分身:function(){
        sleep(1000)
        launchApp("多开分身")
        sleep(2000)
        var 多开分身添加变量 = 0 
        封装API.text("允许").click();
        for(let a=0;a<20;a++){
            多开分身添加变量++
            sleep(3000)
            scrollDown()
            if(text("立即体验").exists()==true){
                封装API.text("立即体验").click()
                sleep(6000)
                封装API.press(500,1750,500)
                sleep(3000)
            }
            if(id("iv_btn_create").exists()==true){
                封装API.id("iv_btn_create").click();
                break;
            }   
            if(textContains("选择应用").exists()==true){
                log("找到选择应用...")
                break;
            } 
            if(text("立即重试").exists()==true){
                toastLog("网路连接有问题,准备切换IP...")
                封装API.text("立即重试").click();
                sleep(5000)
                if(text("立即重试").exists()==true){
                    this.返回主界面()
                    if(this.寻找字符串("无极IP")){
                        this.无极IP();
                    }
                    else if(this.寻找字符串("流量卡IP")){
                        this.流量卡切换IP()
                    }
                    this.多开分身();
                    break;  
                }
            }
            else  if(text("电话").exists()==true){
                log("判断在主页面...,准备重新打开")
                this.多开分身();
                break;  
            }
            if(多开分身添加变量>=15){
                sleep(1000)
                back();
                sleep(1000) 
            }
            if(多开分身添加变量>=20){
                this.返回主界面();
                this.多开分身();
                break; 
            }
        }     
        for(let a=0;a<5;a++){
            sleep(1000)
            封装API.随机上滑()
            sleep(2000)
            if(text("MOMO陌陌").exists()==true){
                var 陌陌分身坐标 = text("MOMO陌陌").findOne(1000).parent().bounds()
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
                    var 陌陌分身坐标 = text("MOMO陌陌").findOne(1000).parent().parent().bounds()
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
                if(text("手机号登录注册").exists()==true){
                    封装API.id("img_qq").click();
                    break;
                } 
                else if(text("账号登录").exists==true){
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
    陌陌Q跳注册:function(){
        登陆失败变量 = 0
        登录中参数 = 0
        for(let a=0;a<100;a++){
            sleep(3000)
            if(text("注册/登录").exists()==true){封装API.text("注册/登录").click();}
            if(text("账号登录").exists()==true){封装API.text("手机号登录注册").click()}
            if(text("手机号登录注册").exists()==true){
                封装API.id("img_qq").click();
            }
            if(text("新用户").exists()==true&text("登 录").exists()==true){
                封装API.text("登 录").click()
                break;
            }
        };
        this.Q跳账号();
        QQ账号 = Q跳数据[0].replace(/\s+/g,"");
        log("QQ账号===>"+QQ账号);
        QQ密码 = Q跳数据[1].replace(/\s+/g,"");
        log("QQ密码===>"+QQ密码);
        /*分割验证码 =num.split("")
        for(let a=0;a<6;a++){
            input(分割验证码[a])
            封装API.等待(300,500)
        }*/
        for(let a=0;a<120;a++){
            sleep(1000);
            log("判断检测===>"+a);
            if(text("新用户注册").exists()==true){
                setText(QQ账号);
                sleep(500);
                id("password").setText(QQ密码);
                sleep(500);
                封装API.id("login").click();
                sleep(2000);
            }
            if(textContains("拖动下方滑块完成拼图").exists()==true||descContains("拖动下方滑块完成拼图").exists()==true){
                this.接码模块();
            }
            else if(text("手机号登录注册").exists()==true){
                封装API.id("img_qq").click();
            }
            else if(text("匹配手机通讯录").exists()==true){
               封装API.text("关闭").click();
            }
            else if(text("登录失败").exists()==true){
                登陆失败变量++;
                封装API.text("确定").click();
                if(登陆失败变量>=3){
                    toastLog("连续3次登陆失败,判断为失败");
                    陌陌账号参数="已被使用";
                    break;
                }
            }
            else if(textContains("等待WLAN").exists()==true){
                封装API.textCon("等待WLAN").click();
            }
            else if(text("授权并登录").exists()==true){
                封装API.text("授权并登录").click();
            }
            else if(textContains("提升自身魅力").exists()==true){
                toastLog("找到填写资料页面");
                sleep(10000)
                break;
            }
            else if(text("登录").exists()==true&&text("QQ登录").exists()==true){
                toastLog("找到QQ登录&&登录控件...")
                封装API.text("登录").click();
            }
            if(text("绑定手机").exists()==true){
                陌陌账号参数="已被使用";
                toastLog("找到绑定手机,该QQ号已被使用...");
                break;
            }
            else if(text("首页").exists()==true){
                陌陌账号参数="已被使用";
                toastLog("该QQ号已被使用...");
                break;
            }
            else if(text("同步到动态").exists()==true){
                toastLog("该QQ号已被使用...");
                封装API.text("同步到动态").click();
                陌陌账号参数 = "已被使用";
                break;
            }
            else if(text("去安全中心").exists()==true||desc("去安全中心").exists()==true){
                toastLog("该账号涉嫌违规注册...");
                陌陌账号参数 = "已被使用";
                break;
            }
            else if(text("完善资料").exists()==true&&text("性别").exists()==true){
                home();
                封装API.等待(2000,3000);
                launchApp("MOMO陌陌分身");
                封装API.等待(2000,3000);
            }
            if(text("登录中").exists()==true){
                登录中参数++
                if( 登录中参数>=30){
                    log("登录中时间超过30秒,准备返回...")
                    登录中参数 = 0
                    back();
                }
            }
        };
        if(陌陌账号参数!="已被使用"){
            for(let a=0;a<90;a++){
                sleep(1000);
                if(textContains("提升自身魅力").exists()==true){
                    toastLog("找到填写资料页面");
                    封装API.id("rl_birth").click();//设置选择生日
                    break;
                }
            }
            this.陌陌填写资料();
        };
        //id = auth_module_dialog_iv_close//绑定手机提示ID       
    },
    陌陌接码注册:function(){
        //var TW短信API = require('./TW短信API');
        //var 登陆 = TW短信API.登陆();
        //var 获取项目 = TW短信API.获取项目(登陆);
        //var 获取号码 = TW短信API.获取号码(登陆,"8","144");
        //var 获取验证码 = TW短信API.获取验证码(登陆,获取号码);
        //var 释放号码 = TW短信API.释放号码(登陆,获取号码);
        //var 心跳 = TW短信API.心跳(登陆);
        //token="5894503cc8c5d2f05ee3000b66f1a6f6"
        this.打开允许();
        TW短信API = require('./TW短信API');
        登陆 = TW短信API.登陆();
        log(登陆)
        sleep(1000)
        获取号码 = TW短信API.获取号码(登陆,"8","144");
        for(let a=0;a<20;a++){
            if(text("注册/登录").exists()==true){封装API.text("注册/登录").click();}
            if(text("账号登录").exists()==true){封装API.text("手机号登录注册").click()}
            if(textContains("拖动下方滑块完成拼图").exists()==true||descContains("拖动下方滑块完成拼图").exists()==true){
                this.接码模块()
            }
            if(text("手机号登录注册").exists()==true){
                if(获取号码!=null){
                    sleep(1000)
                    text("输入手机号码").setText(获取号码)
                    break;
                }
                else{
                    sleep(3000)
                    获取号码 = TW短信API.获取号码(登陆,"8","144");
                }
            }
            sleep(3000)
        }
        sleep(1000)
        封装API.text("获取验证码").click();
        for(let a=0;a<3;a++){
            sleep(5000)
            if(text("获取验证码").exists()==true){
                封装API.text("获取验证码").click();
            }
            else{break;}
        }
        for(let a=0;a<6;a++){
            sleep(10000)
            获取验证码 = TW短信API.获取验证码(登陆,获取号码);
            if(获取验证码.indexOf("获取验证码失败")!=-1 ){toastLog(获取验证码)}
            else{break;}
        }
        if(获取验证码.indexOf("获取验证码失败")!=-1 ){
            for(let a=0;a<5;a++){
                封装API.等待(1000,2000)
                if(text("手机号登录注册").exists()==true){break;}
                else{back();封装API.等待(500,1000)}
            }
            封装API.等待(500,1000)
            封装API.id("login_account_clear").click()
            释放号码 = TW短信API.释放号码(登陆,获取号码);
            log(释放号码)
            封装API.等待(500,1000)
            this.获取手机号验证码();
        }
        封装API.等待(500,100)
        num= 获取验证码.replace(/[^0-9]/ig,"");
        /*分割验证码 =num.split("")
        for(let a=0;a<6;a++){
            input(分割验证码[a])
            封装API.等待(300,500)
        }*/
        setText(num)
        封装API.等待(500,600)
        释放号码 = TW短信API.释放号码(登陆,获取号码);
        log(释放号码)
        threads.shutDownAll()
        for(let a=0;a<10;a++){
            封装API.等待(3000,4000)
            if(id("rl_birth").exists()==true){
                封装API.id("rl_birth").click();//设置选择生日
                break;
            }
            if(text("首页").exists()==true){
                陌陌账号参数="已被使用"
                break;
            }
            else if(text("同步到动态").exists()==true){
                log("同步到动态...")
                封装API.text("同步到动态").click()
                陌陌账号参数 == "已被使用"
                break;
            }
        }
        if(陌陌账号参数!="已被使用"){
            this.陌陌填写资料();
        }
        else if(陌陌账号参数=="已被使用"){
            alert("该账号已被使用")
        }
    },
    账号已被使用处理:function(){
        封装API.等待(2000,3000)
        封装API.text("更多").click();
        封装API.等待(1000,2000)
        封装API.id("simple_user_layout").click();
        封装API.等待(1000,2000)
        if(textContains("账号存在异常").exists()==true){
            this.返回主界面();
            alert("该账号已被使用,该账号存在异常")
        }
        else{}//暂时无处理
    },
    陌陌填写资料:function(){
        封装API.等待(500,1000)
        for(let a=0;a<random(1,2);a++){
            this.年龄滑动_年()
            封装API.等待(500,1000)
        }
        for(let a=0;a<random(1,5);a++){
            this.年龄滑动_月()
            封装API.等待(500,1000)
        }
        for(let a=0;a<random(1,5);a++){
            this.年龄滑动_日()
            封装API.等待(500,1000)
        }
        //华为6X确定按钮位置找色
        for(let a=0;a<6;a++){
            captureScreen("/sdcard/A.png");
            封装API.等待(1000,2000)
            var point = findColor(images.read("/sdcard/A.png"), "#000000", {
                region: [590,1100,350,350],
                threads: 25
            });
            if(point){封装API.press(point.x,point.y);break;}
        }
        //华为6X确定按钮位置找色
        封装API.等待(500,1000)
        昵称=this.获取昵称()
        id("et_name").setText(昵称)
        封装API.等待(500,1000)
        封装API.text("女生").click()
        封装API.等待(500,1000)
        封装API.text("下一步").click()
        sleep(2000)
        for(let a=0;a<5;a++){
            sleep(2000)
            if(textContains("提升自身魅力").exists()==true){
                toastLog("还在填写资料页面")
                if(text("填写昵称").exists()==true){
                    text("填写昵称").setText(昵称)
                }
                if(text("填写生日").exists()==true){
                    封装API.id("rl_birth").click();
                    封装API.等待(500,1000)
                    for(let a=0;a<random(1,2);a++){
                        this.年龄滑动_年()
                        封装API.等待(500,1000)
                    }
                    for(let a=0;a<random(1,5);a++){
                        this.年龄滑动_月()
                        封装API.等待(500,1000)
                    }
                    for(let a=0;a<random(1,5);a++){
                        this.年龄滑动_日()
                        封装API.等待(500,1000)
                    }
                    for(let a=0;a<6;a++){
                        captureScreen("/sdcard/A.png");
                        封装API.等待(1000,2000)
                        var point = findColor(images.read("/sdcard/A.png"), "#000000", {
                            region: [590,1100,350,350],
                            threads: 25
                        });
                        if(point){封装API.press(point.x,point.y);break;}
                    }
                }
                封装API.text("女生").click()
                封装API.text("下一步").click()
                封装API.等待(500,1000)
            }
            else{break;}
        }
        sleep(2000)
        if(text("绑定手机").exists()==true){
            封装API.text("跳过").click();
        }
        else{
            this.加载头像();
            if(text("完成进入").exists()==true){封装API.text("完成进入").click()}
            else{this.加载头像()}
            封装API.等待(1000,2000)
            if(id("img_photo").exists()==true){
                this.加载头像()
            }
            //封装API.text("屏蔽").click()
            //封装API.等待(500,1000)
            //封装API.text("确认").click()
            封装API.等待(1000,2000)
            封装API.text("完成进入").click()
            sleep(12000)
            if(text("完成进入").exists()==true){
                back();
                封装API.等待(1000,2000)
                封装API.text("完成进入").click()
            }
        }
        for(let a=0;a<28;a++){
            if(id("auth_module_dialog_iv_close").exists()==true){
                封装API.id("auth_module_dialog_iv_close").click()
            }          
            if(text("跳过").exists()==true){
                封装API.text("跳过").click();
                break;
            }
            else if(text("消息").exists()==true){
                break;
            }
            else{
                sleep(6000);
            }
        }
        封装API.id("citycard_close").click()
        封装API.等待(1000,2000)  
        if(text("注册/登录").exists()==true){
            toastLog("找到注册/登录控件,准备返回清理重新登陆...")
            this.返回主界面();
            this.清理内存(); 
            封装API.等待(1000,2000)               
            launchApp("多开分身")
            for(let a=0;a<5;a++){
                封装API.等待(1000,2000)
                封装API.text("允许").click();
                if(id("iv_logo").exists()==true){
                    封装API.id("iv_logo").click()
                    sleep(1000)
                    封装API.text("允许").click();
                    break;
                }
                else{封装API.等待(1000,2000)}
            }
        }
        else{toastLog("没有找到注册/登录控件...")}
        this.陌陌留痕();
    },
    加载头像:function(){
        for(let a=0;a<20;a++){
            sleep(2000)
            if(id("img_photo").exists()==true){
                封装API.id("img_photo").click();
                封装API.等待(1000,2000)
                for(let a=0;a<random(1,20);a++){
                    封装API.快速上滑();
                    封装API.等待(500,1000);
                }
            }
            if(text("相册").exists()==true){
                封装API.等待(500,1000)
                a = className("android.widget.ImageView").find()
                图片控件 = className("android.widget.ImageView").findOnce(random(0,a.length))
                封装API.setView(图片控件).click()
                封装API.等待(1000,2000)
                if(text("确认").exists()==true){
                    封装API.text("确认").click()
                    break;
                }
            }
        }
        sleep(3000)
        while(text("正在为你下载素材包，请稍等").exists()==true){
            sleep(1000)
        }
        封装API.text("确认").click()
        封装API.等待(500,1000)
        封装API.textCon("完成").click()
        封装API.等待(1000,2000)
    },
    保存账号:function(){
        toastLog("开始保存账号...")
        时间 = this.中文时间()
        if(this.寻找字符串("接码注册")){
            files.ensureDir("/sdcard/陌陌账号.txt");
            files.append("/sdcard/陌陌账号.txt",获取号码);
        }
        else if(this.寻找字符串("Q跳注册")){
            files.ensureDir("/sdcard/陌陌账号.txt");
            files.append("/sdcard/陌陌账号.txt",QQ账号);
            files.append("/sdcard/陌陌账号.txt","===>");
            files.append("/sdcard/陌陌账号.txt",QQ密码);
        }
        files.append("/sdcard/陌陌账号.txt","===>");
        files.append("/sdcard/陌陌账号.txt",昵称);
        files.append("/sdcard/陌陌账号.txt","===>");
        files.append("/sdcard/陌陌账号.txt",时间);
        files.append("/sdcard/陌陌账号.txt","\n");
    },
    获取昵称:function(){
        读取文本 = files.read("/sdcard/昵称专用.txt");
        分割文本=读取文本.split("\n");
        return 分割文本[random(0,分割文本.length-1)]
    },
    获取手机号验证码:function(){
        登陆 = TW短信API.登陆();
        sleep(1000)
        获取号码 = TW短信API.获取号码(登陆,"8","144");
        封装API.idCon("login_account_clear").click()
        sleep(1000)
        for(let a=0;a<10;a++){
            if(text("手机号登录注册").exists()==true){
                if(获取号码!=null){
                    sleep(1000)
                    text("输入手机号码").setText(获取号码)
                    break;
                }
                else{
                    sleep(5000)
                    获取号码 = TW短信API.获取号码(登陆,"8","144");
                }
            }
            sleep(3000)
        }
        sleep(1000)
        封装API.text("获取验证码").click();
        for(let a=0;a<3;a++){
            sleep(5000)
            if(text("获取验证码").exists()==true){
                封装API.text("获取验证码").click();
            }
            else{break;}
        }
        for(let a=0;a<5;a++){
            sleep(12000)
            获取验证码 = TW短信API.获取验证码(登陆,获取号码);
            if(获取验证码.indexOf("获取验证码失败")!=-1 ){toastLog(获取验证码)}
            else{break;}
        }
    },
    年龄滑动_日:function () {
        let X1 = 封装API.随机数(650,850);
        let Y1 = 封装API.随机数(1000,1200);
        let X2 = 封装API.随机数(650,850);
        let Y2 = 封装API.随机数(500,700);
        let time = 封装API.随机数(500,2000)
        封装API.swipe(X1,Y1,X2,Y2,time);
    },
    年龄滑动_月:function() {
        let X1 = 封装API.随机数(430,630);
        let Y1 = 封装API.随机数(1000,1200);
        let X2 = 封装API.随机数(430,630);
        let Y2 = 封装API.随机数(500,700);
        let time = 封装API.随机数(500,2000)
        封装API.swipe(X1,Y1,X2,Y2,time);
    },
    年龄滑动_年:function() {
        let X1 = 封装API.随机数(170,400);
        let Y1 = 封装API.随机数(1000,1200);
        let X2 = 封装API.随机数(170,400);
        let Y2 = 封装API.随机数(500,700);
        let time = 封装API.随机数(500,2000)
        封装API.swipe(X1,Y1,X2,Y2,time);
    },
    打开允许:function(){
        threads.start(function(){
            while(true){
                sleep(1000)
                if(text("允许").exists()==true){
                    log("找到允许,开始点击...")
                    封装API.text("允许").click();
                }
            }
        });
    },
    打开报告:function(){
        threads.start(function(){
            while(true){
                sleep(1000)
                if(text("报告").exists()==true){
                    log("找到报告,开始点击...")
                    封装API.text("报告").click();
                }
            }
        });
    },
    陌陌留痕:function(){
        toastLog("开始陌陌留痕...")
        封装API.等待(5000,10000)
        if(idContains("auth_module_dialog_iv_close").exists()==true){
            toastLog("找到目前账号存在安全隐患...")
            封装API.idCon("auth_module_dialog_iv_close").click()
        }
        封装API.等待(3000,5000)
        while(text("消息").exists()!=true){
            sleep(6000)
            back();
            //判断是否在主界面，如果在主界面则从新打开陌陌分身
            if(text("电话").exists()==true){
                封装API.等待(1000,2000)               
                launchApp("多开分身")
                for(let a=0;a<5;a++){
                    封装API.等待(1000,2000)
                    封装API.text("允许").click();
                    if(id("iv_logo").exists()==true){
                        封装API.id("iv_logo").click()
                        sleep(1000)
                        封装API.text("允许").click();
                        this.陌陌留痕();
                        break;
                    }
                    else{封装API.等待(1000,2000)}
                }
            }
        }
        封装API.text("消息").click()
        封装API.等待(3000,5000)
        封装API.id("action_jump_contact").click();
        封装API.等待(3000,5000)
        封装API.id("friend_action_add").click();
        封装API.等待(3000,5000)
        if(text("首页").exists()==true){
            this.返回主界面();
            this.清理内存(); 
            封装API.等待(1000,2000)               
            launchApp("多开分身")
                封装API.等待(1000,2000)
                封装API.text("允许").click();
                if(id("iv_logo").exists()==true){
                    封装API.id("iv_logo").click()
                    sleep(1000)
                    封装API.text("允许").click();
                    this.陌陌留痕();
                }
        }
        else{
            封装API.text("搜索").click()
            封装API.等待(3000,5000)
            setText("482438947")
            封装API.等待(2000,4000)
            封装API.text("搜索用户：").click();
            for(let a=0;a<10;a++){
                if(text("迷失在地球的超人").exists()==true){
                    sleep(10000)
                    break;
                }
                else{封装API.等待(2000,3000)}
            }
            for(let a=0;a<10;a++){
                if(text("首页").exists()==true){break;}
                else{back();封装API.等待(500,1500)}
            }
            封装API.等待(10000,15000)
            this.动态浏览()
        }
    },
    动态浏览:function(){
        toastLog("===开始浏览动态===");
        封装API.等待(2000,5000)
        封装API.text("首页").click()
        封装API.等待(2000,5000)
        var 陌陌首页变量 = 0
        while(!this.是否在主页面()){
            toastLog("未进入首页界面...");
            封装API.等待(1000,3000)
            back();
            封装API.等待(1000,3000)
            封装API.text("首页").click()
            封装API.等待(1000,3000)
            陌陌首页变量++
            if(陌陌首页变量>20){
                this.返回主界面();
                this.清理内存(); 
                封装API.等待(1000,2000)               
                launchApp("多开分身")
                for(let a=0;a<5;a++){
                    封装API.等待(1000,2000)
                    封装API.text("允许").click();
                    if(id("iv_logo").exists()==true){
                        封装API.id("iv_logo").click()
                        sleep(1000)
                        封装API.text("允许").click();
                        break;
                    }
                    else{封装API.等待(1000,2000)}
                }
            }
        }
        封装API.text("附近动态").click(); 
        封装API.等待(2000,5000)
        //判断是否在附近动态页面
        while((id("com.immomo.momo:id/btn_feed_more").exists()!=true)){
            封装API.text("附近动态").click(); 
            封装API.等待(2000,5000)
        }
        for(let a=0;a<random(5,10);a++){
            封装API.随机上滑();
            封装API.等待(2000,6000);
        }
        封装API.text("消息").click();
        封装API.等待(2000,5000)
        for(let a=0;a<10;a++){
            sleep(15000)
            if(textContains("系统检测你的设备").exists()==true){
                toastLog("找到系统检测,判断为死号")
                陌陌账号判断 = "死号"
                封装API.等待(3000,6000);
                break;
            }
            else if(textContains("MOMO礼物").exists()==true){
                toastLog("收到礼物,判断为活号")
                陌陌账号判断 = "活号"
                封装API.等待(3000,6000);
                break;
            }
            else if(text("有礼物").exists()==true){
                toastLog("收到礼物,判断为活号")
                陌陌账号判断 = "活号"
                封装API.等待(3000,6000);
                break;
            }
            else if(textContains("迷失在地球的超人").exists()==true){
                toastLog("找到本尊,判断为活号")
                陌陌账号判断 = "活号"
                封装API.等待(3000,6000);
                break;
            }
        }
        if(陌陌账号判断=="活号"){
            //this.斗地主()
            封装API.等待(3000,6000);
            this.陌陌修改密码()
            this.保存账号();
        }
        else{
            陌陌账号判断 = "死号"
        }
    },
    斗地主:function(){
        toastLog("===开始斗地主===");
        封装API.等待(2000,5000)
        封装API.text("首页").click()
        封装API.等待(2000,5000)
        var 陌陌首页变量 = 0
        while(!this.是否在主页面()){
            toastLog("未进入首页界面...");
            封装API.等待(1000,3000)
            back();
            封装API.等待(1000,3000)
            封装API.text("首页").click()
            封装API.等待(1000,3000)
            陌陌首页变量++
            if(陌陌首页变量>20){
                this.返回主界面();
                this.清理内存(); 
                封装API.等待(1000,2000)               
                launchApp("多开分身")
                for(let a=0;a<5;a++){
                    封装API.等待(1000,2000)
                    封装API.text("允许").click();
                    if(id("iv_logo").exists()==true){
                        封装API.id("iv_logo").click()
                        sleep(1000)
                        封装API.text("允许").click();
                        break;
                    }
                    else{封装API.等待(1000,2000)}
                }
            }
        }
        封装API.等待(2000,4000);
        封装API.text("首页").click();
        封装API.text("首页").click();
        封装API.等待(2000,4000);
        封装API.text("全部").click();
        封装API.等待(2000,4000);
        封装API.text("斗地主").click();
        封装API.等待(10000,15000);
        if(text("首页").exists()==true){
            陌陌账号判断 ="死号"
        }
        else{
            back();
            封装API.等待(2000,4000);
            封装API.text("斗地主").click();
            封装API.等待(10000,15000)
            if(text("首页").exists()==true){
                陌陌账号判断 ="死号"
            }
            else{陌陌账号判断 ="活号"}
        }
        if(陌陌账号判断=="活号"){
            toastLog("该陌陌账号为活号...")
            back();
            封装API.等待(3000,6000);
            this.保存账号();
            this.Q跳更换头像();
            this.退出账号();
        }
    },
    陌陌修改密码:function(){
        封装API.等待(2000,3000)
        封装API.text("更多").click()
        for(let a=0;a<10;a++){
            封装API.等待(3000,5000)
            封装API.随机上滑()
            封装API.等待(500,1000)
            封装API.text("设置").click();
            if(text("帐号与安全").exists()==true){
                封装API.text("帐号与安全").click();
                break;
            }
        }
        封装API.等待(3000,5000)
        for(let a=0;a<15;a++){
            封装API.等待(2000,3000)
            if(text("设置密码").exists()==true){
                封装API.text("密码修改").click();
                封装API.等待(2000,3000)
                setText("cctv1995")
            }
            if(text("修改").exists()==true){
                封装API.text("修改").click();
                封装API.等待(2000,3000)
                封装API.text("确认").click();
                封装API.等待(2000,3000)
                break;
            }
        }
    },
    是否在主页面:function(){
        return text("全部").exists() == true; 
    },
    是否在更多页面:function(){
        return text("我的动态").exists() == true; 
    },
    Q跳更换头像:function(){
        toastLog("===开始更换头像===");
        封装API.等待(2000,3000)
        封装API.text("更多").click()
        封装API.等待(2000,3000)
        封装API.idCon("simple_user_name").click()
        封装API.等待(2000,3000)
        封装API.descCon("修改资料").click()
        封装API.等待(2000,3000)
        封装API.idCon("editephoto_layout_add").click()
        封装API.等待(2000,3000)
        for(let a=0;a<60;a++){
            sleep(1000)
            if(id("img_photo").exists()==true){
                封装API.id("img_photo").click();
                封装API.等待(1000,2000)
                for(let a=0;a<random(1,10);a++){
                    封装API.快速上滑();
                    封装API.等待(500,1000);
                }
            }
            if(text("相册").exists()==true){
                封装API.等待(500,1000)
                a = className("android.widget.ImageView").find()
                图片控件 = className("android.widget.ImageView").findOnce(random(0,a.length))
                封装API.setView(图片控件).click()
                封装API.等待(1000,2000)
                if(text("确认").exists()==true){
                    封装API.text("确认").click()
                    break;
                }
            }
        }
        封装API.等待(2000,3000)
        while(text("正在为你下载素材包，请稍等").exists()==true){
            sleep(1000)
            if(textContains("完成").exists()==true){
                toastLog("找到完成控件...")
                封装API.textCon("完成").click()
                break;
            }
        }
        封装API.text("确认").click()
        封装API.等待(1000,2000)
        封装API.textCon("完成").click()
        封装API.等待(3000,4000)
        if(text("编辑资料").exists()==true){
            封装API.idCon("avatar_imageview").click()
            封装API.等待(500,1000)
            封装API.text("删除").click()
            封装API.等待(500,1000)
            封装API.text("保存").click()
            for(let a=0;a<10;a++){
                sleep(1000)
                if(text("提示").exists()==true&&text("取消").exists()==true){
                    封装API.text("取消").click()
                    break;
                }
            }
        }
        封装API.等待(1000,2000)
        back()
        封装API.等待(1000,2000)
    },
    退出账号:function(){
        if(是否在更多页面){
            for(let a=0;a<20;a++){
                封装API.等待(2000,3000)
                if(text("设置").exists()==true&&text("退出陌陌").exists()!=true){
                    封装API.text("设置").click();
                }
                else if(text("退出陌陌").exists()==true){
                    封装API.text("退出陌陌").click();
                }
                else if(text("暂不绑定").exists()==true){
                    封装API.text("暂不绑定").click()
                }
                else if(text("退出当前帐号").exists()==true){
                    封装API.text("退出当前帐号").click()
                }
                else if(text("退出").exists()==true){
                    封装API.text("退出").click()
                    break;
                }
                else{
                    封装API.随机上滑()
                    封装API.等待(500,1000)
                }
            }
        }
    },
    陌陌注册善后:function(){
        封装API.等待(2000,3000)
        this.返回主界面();
        launchApp("多开分身")
        封装API.等待(3000,4000)
        if(id("iv_btn_create").exists()==true&&text("推荐").exists()==true){
            if(手机判断参数=="华为系统"){
                log("没有找到管理控件...准备重新打开多开分身")
                this.返回主界面();
                sleep(1000);
                recents();
                sleep(2000);
                封装API.id("recent_igmbutton_clear_all").click();
                log("===清理手机系统内存===");
                sleep(2000);
                this.陌陌注册善后();
                return
            }
        }
        封装API.text("管理").click() 
        封装API.等待(2000,3000)
        封装API.text("清理缓存").click() 
        for(let a=0;a<5;a++){
            if(text("完成").exists()==true){
                封装API.text("完成").click() 
                break;
            }
            else{封装API.等待(2000,3000)}
        }
        if(手机判断参数=="小米系统"){
            toastLog("小米系统")
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
        else if(手机判断参数=="华为系统"){
            toastLog("华为系统")
            封装API.等待(1000,2000)
            封装API.text("删除分身").click() 
            封装API.等待(1000,2000)
            封装API.text("卸载").click() 
            封装API.等待(3000,5000)
        }
        this.返回主界面();
    },
    文件清理:function(){
        sleep(1500)
        封装API.text("ES文件浏览器").click();
        封装API.textCon("点击跳过").click()
        sleep(500)
        if(text("ES文件浏览器").exists()==true){
            封装API.text("ES文件浏览器").click();
            封装API.textCon("点击跳过").click()   
        }
        for(let a=0;a<5;a++){
            if(idContains("main_tab_right_btn_parent_ll").exists()==true){
                封装API.idCon("main_tab_right_btn_parent_ll").click()
                break;
            }
            else{sleep(1000);back()}
        }
        sleep(1500)
        setText("momo")
        for(let a=0;a<3;a++){
            sleep(1000)
            captureScreen("/sdcard/A.png");
            sleep(1000)
            var point = findColor(images.read("/sdcard/A.png"), "#FF642B", {
                region: [880,1720,200,200],
                threads: 25
            });
            if(point){封装API.press(point.x,point.y);break;}
        }
        for(let a=0;a<5;a++){
            sleep(2000)
            if(textContains("momo").exists()==true){
                let widget = textContains("momo").findOne(2000)
                sleep(1000)
                if(widget.bounds().centerX() >= 0 && widget.bounds().centerY() >= 0){
                    封装API.press(widget.bounds().centerX(), widget.bounds().centerY(),1000);
                    sleep(500)
                    封装API.text("全选").click()
                    sleep(500)
                    封装API.text("删除").click()
                    sleep(500)
                    封装API.text("确定").click()
                    break;
                }
            }
            if(text("文件夹为空").exists()==true){
                toastLog("没有找到任何文件夹，准备返回...")
                break;
            }
        }
        sleep(1000)
        back();
        sleep(1000)
        back();
        back();
        sleep(1000)
    },
    中文时间:function(){
        var da = new Date().getTime()
        da = new Date(da);
        var year = da.getFullYear()+'年';
        var month = da.getMonth()+1+'月';
        var date = da.getDate()+'日';
        var hour = da.getHours()+'时'
        var minute = da.getMinutes()+'分'
        return [year,month,date,hour,minute].join('-')
    },
    Q跳账号:function(){
        Q跳数据 = []
        var 读取文本 = files.read("/sdcard/脚本/Q跳文件.txt");
        var 分割文本=读取文本.split("\n");
        var copyList=分割文本.slice(0);
        读取文本.split("\n").some(line=>{
            Q跳数据 = line.split("----")
            //对复制的副本做删除操作
            copyList.shift();
            //将新的数据写入
            files.write("/sdcard/脚本/Q跳文件.txt",copyList.join("\n"));
            return true//此代码的作用是让some只运行一次
        })
    },
    流量卡切换IP:function(){
        this.返回主界面();
        launchApp("设置")
        sleep(500)
        if(手机判断参数=="小米系统"){
            封装API.text("更多连接方式").click();
            sleep(500)
            封装API.text("飞行模式").click();
            sleep(5000)
            封装API.text("飞行模式").click();
            for(let a=0;a<10;a++){
                sleep(1000)
                if(text("飞行模式").exists()!=true){back();}
                else{break;}
            }
        }
        else if(手机判断参数=="华为系统"){
            封装API.text("飞行模式").click();
            sleep(5000)
            封装API.text("飞行模式").click();
            sleep(2000)
            封装API.text("飞行模式").click();
            sleep(5000)
            封装API.text("飞行模式").click();
        }

        this.返回主界面();
    },
    退出账号:function (){
        if(是否在更多页面){
            for(let a=0;a<20;a++){
                封装API.等待(2000,3000)
                if(text("设置").exists()==true&&text("退出陌陌").exists()!=true){
                    封装API.text("设置").click();
                }
                else if(text("退出陌陌").exists()==true){
                    封装API.text("退出陌陌").click();
                }
                else if(text("暂不绑定").exists()==true){
                    封装API.text("暂不绑定").click()
                }
                else if(text("退出当前帐号").exists()==true){
                    封装API.text("退出当前帐号").click()
                }
                else if(text("退出").exists()==true){
                    封装API.text("退出").click()
                    break;
                }
                else{
                    封装API.随机上滑()
                    封装API.等待(500,1000)
                }
            }
        }
    },
    接码模块:function(){
        for(let a=0;a<10;a++){
            sleep(2000)
            if(desc("拖动下方滑块完成拼图").exists()==true||text("拖动下方滑块完成拼图").exists()==true){
                toastLog("找到滑块准备拼图...")
                接码成功 = 1
                滑块按钮 = className("android.view.View").idContains("tcaptcha_drag_button").findOne(1000)
                if(滑块按钮!=null){
                    滑块按钮坐标 = 滑块按钮.bounds()
                    var 滑块按钮坐标X1 = 滑块按钮坐标.left
                    log(滑块按钮坐标X1)
                    var 滑块按钮坐标Y1 = 滑块按钮坐标.top
                    log(滑块按钮坐标Y1)
                    if(滑块按钮坐标X1>="100"){
                        log("1号方案")
                        滑块 = className("Image").idContains("slideBg").findOne(1000)
                        if(滑块!=null){
                            滑块图片 = 滑块.bounds()
                            console.log(滑块图片);
                            var X1 = 滑块图片.left
                            var Y1 = 滑块图片.top
                            var X2 = 滑块图片.right
                            var Y2 = 滑块图片.bottom
                            var 联众打码API = require('./联众API');
                            var 联众打码api = new 联众打码API(联众账号,联众密码);
                            坐标 = 联众打码api.打码(X1,Y1,X2-X1,Y2-Y1,"1318","1","1");
                            if(坐标 != "打码失败"){
                                拼图坐标 = 坐标.split(",")
                                拼图坐标X = parseInt(拼图坐标[0])
                                拼图坐标Y = parseInt(拼图坐标[1])
                                log("拼图坐标X===>"+拼图坐标X);
                                log("拼图坐标X===>"+拼图坐标Y);
                                封装API.swipe(滑块按钮坐标X1+10,滑块按钮坐标Y1+10,拼图坐标X+random(0,20),滑块按钮坐标Y1+10,random(1000,2000))
                            }
                            else{封装API.idCon("reload").click();}//刷新按钮更换图片
                        }
                        else{封装API.idCon("reload").click();}//刷新按钮更换图片
                    }
                    else{封装API.idCon("reload").click();}//刷新按钮更换图片
                }
                else{封装API.idCon("reload").click()}
            }
            else{
                log("没有找到文字拖动下方滑块完成拼图...")
                break;
            }
        }
    }
}
module.exports = 陌陌注册
