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
        功能选择 = dialogs.singleChoice("请选择所需要的功能", ["灵魂引流","注册并引流","灵魂注册"], 2);
        if(功能选择==0){
            分身起始 = rawInput("你输入你要开始的第一个分身")
            分身结束 = rawInput("你输入你要结束的最后一个分身")
        }
        else if(功能选择==1){
            分身起始 = rawInput("你输入你要创建的起始")
            分身结束 = rawInput("你输入你要创建的结束")
        }
        this.全局变量();
        手机判断参数 = 集成模块.手机品牌判断();
        for(let a=0;a<自定义名字.length;a++){
            this.循环变量();
            if(分身判断 == 1){
                if(切换IP方式 == "光子切换IP"){集成模块.光子IP()}
                else if(切换IP方式 == "流量卡切换IP"){集成模块.流量卡切换IP(手机判断参数)}
                封装API.等待(500);
                toastLog("准备删除目录文件夹");
                path = "/sdcard/Android/data";
                log(files.removeDir(path));
                path = "/sdcard/dk_sdcard";
                log(files.removeDir(path));
                封装API.等待(500);
            }
            else if(分身判断 == -1){}
            if(功能选择==0){
                运行程序 = 自定义名字[a]
                if(launchApp(运行程序)==true){
                    log("存在该分身,准备启动");
                    分身判断 = 1;
                }
                else{
                    分身判断 = -1;
                    log("该分身不存在...");
                }
            }
            else if(功能选择==1){
                if(注册方式 == "XX抹机"){
                    运行程序 = "Soul"
                    log("准备启动XX抹机注册")
                    this.新建环境();
                    this.注册soul();
                }
                else if(注册方式 == "多开分身"){
                    集成模块.文件清理("soul");
                    log("准备启动多开分身注册")
                    集成模块.多开分身(切换IP方式,APP,"不善后")
                    集成模块.制作分身(切换IP方式,手机判断参数,地理位置,自定义名字[a])
                    this.注册soul();
                }
            }
            if(分身判断 == 1){
                this.发表动态();
                for(let b=0;b<循环次数;b++){
                    if(程序判断 == "重新开始"){log("找到程序判断重新开始...");}
                    else{
                        this.soul灵魂匹配();
                        this.soul回复消息();
                    }
                }
                if(程序判断 == "重新开始"){}
                //else{this.保存账号();}
                集成模块.关闭应用(运行程序)
            }
            else if(分身判断 == -1){}
        }
    },
    全局变量:function(){
        封装API.等待(1000)
        切换IP方式 = "流量卡切换IP"
        注册方式 = "XX抹机"
        易码账号 = "kstd2016";
        易码密码 = "1987223";
        联众账号 = "kstd2016";
        联众密码 = "Wentao1987223";
        soul密码 = Array("cctv1995","aabb1995","cctv1996","aabb1996")
        setScreenMetrics(1080, 1920);//屏幕宽度不一致会自动放缩坐标。
        分身判断 = 1

        第一句 = Array("你好","你好呀","你好,小哥哥","你好哦,小哥哥","你好呀,小哥哥","hi~","嗨","hello"
        ,"嗨喽","hi~,小哥哥","嗨喽,小哥哥","嗨,小哥哥","hello,小哥哥")
        表情 = Array("😁","😊","😘","😍","😳","😅","😓","😎","😑","🙄","🤔","😉","🕺🏻"
        ,"😆","😤","😨","😈","🌝","😒","😔","🙂","🙃","💋","🌹","👍🏼","🎉","😩","😕","😐"
        ,"😠","😴","😌","😋","😝","👋🏼","🙏🏼","💪🏼","🤢","🤪","😷","😲","🤩","🤤","🤗"
        ,"😇","🤠","🤯","😪","😵","🤒","🤧","🤫","🤨","🧐","🖕🏼","👌🏼","✌🏼","🤙🏼","🤝","🐷","🙈","🙉"
        ,"🙊","😹","😻","🙀","🐶","🎁","💖","💔","💩","💯","👀","💀","👻","👴🏻","👵🏻","👶🏻","🤡"
        ,"💃🏻","🦊","🐱","🦄","🌈","✨","💤","👫","👯‍","♀","️💚","💕","🍀","🌸","💐","💍","🤓")
        签名 = Array("稚与最初","风吹向你","遥林静居","柠檬爱恋","懒懒的幸福","各自安好","情定无名指","怀念小时候","悲情剧里的暖色系"
        ,"空心人","花开花落终不悔","飞逝的流水","拾起回忆","让眼泪倒流","亦久亦旧","生命的韧度","流哖中的浅夏","繁华的梦境","说好了再见"
        ,"给不起的温柔","一味执着的爱情","低调要沉默","不奢求爱情","太冷的回忆","四十五度的想念","却老了容颜","暖风撩人醉","TE听闻余生"
        ,"未尝没想过","庸人自扰梦","你算什么","你颠倒衣裳","第一眼沦陷","走失葵花海-","我的怪脾气","伤城离歌","森屿微央","风华燃尽指尖砂"
        ,"浅笑、念伊人","此城无心忘少年","沫离伤花","南城荒凉北城伤","楠木青城°","回眸","只為尔一笑","栀璃鸢年","花落微凉梦清幽","红尘几度欢颜笑"
        ,"凉辰梦瑾空人心","夏槿凉安","倚窗听花落","往事清秋濯","恋梦红尘","蝶无需花恋","倾听梦里花落声","清风归客","只倾心不倾城","久醉绕心弦","墨染傾城"
        ,"嘴角的樱桃汁","Cookie","性子野","喝了酱油耍酒疯","喝可乐的猫","甚是乖巧","娇软甜","日光倾城未必温暖","凉柚","官方小可爱√","你列表最软的妹","睡美人的小仙女"
        ,"今天小雨转甜","章鱼小肉丸","攒一口袋星星","吐个泡泡","蘸点软妹酱","试卷是一张微凉的遗书","沉世","素颜","静谧","鹤隐","吟殇","耀月","简慕"
        ,"岑寂","灼热","浅亡","梦你","矫情","独瘾","皱眉","温婉","挽发","诱惑","囚鸟","叛逆","漠念","言初","孤身","孤刺","浪姬","酒客","如歌","念白"
        ,"暖暖","温软","初心","南鸢","温茶","初遇","阑珊","花栀","遣心","落墨")
        标点符号 = Array("?","~","~~","~~~",".","..","...","。","。。","。。。")
        动态 = Array("自己不努力，谁也帮不了你；你得有足够的实力，你的原则和底线才会被人尊重！"
        ,"有时候，我们必须闭上嘴，放下骄傲，承认是自己错了。这不是认输，而是成长。"
        ,"一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。"
        ,"如果一个人足够想你，他绝对会忍不住思念来找你，而不总是你理他，他才理你。友情也好，爱情也罢，这之间没有腼腆一说。"
        ,"有时候觉得世界很小，不想见的人逛个超市都能碰见。有时候又觉得世界很大，想见的人却真的没有再见。"
        ,"大部分的痛苦，都是不肯离场的结果，没有命定的不幸，只有死不放手的执着。"
        ,"当你手中抓住一件东西不放时，你只能拥有一件东西，如果你肯放手，你就有机会选择更多"
        ,"我们对年龄的恐惧，其实并不在于年龄增长所带来的苍老，而是恐惧随着年龄的增长，我们仍然一无所得"
        ,"人生，有多少计较，就有多少烦恼；有多少包容，就有多少欢乐。心若贪着，念念维系；心若淡泊，清新洒脱"
        ,"醉别西楼醒不记，春梦秋云，聚散真容易。"
        ,"夜幕拉开，每一扇窗口就是一个舞台，你看不到别人的表演，但你已把别人的生活在自己的窗口里演过。"
        ,"曾以为遥远的某天，原来已经出现。"
        ,"我愿岁月深处，每一天，都能与你，与美好，在朴素而珍重的一笔里，温暖相遇，相宜静好。"
        ,"忽然觉得，一生仿佛在一本书里，隐在一行，落在一字。然后，被一个人，一场清风，将我翻开。"
        ,"人世本就是一场游戏，你若已然输了，便不要再让对手赢了。成全没有任何意义，成全让恨意滋生，爱自己是活着的唯一意义，灰烬之后，才是田园斜径，白云出岫。"
        ,"恋爱可以慢慢谈，肉必须趁热吃"
        ,"人生就是要吃吃吃！穿穿穿！"
        ,"不开心睡一觉，就让它过去吧。伤心还好，伤胃就不好了。"
        ,"当吃货挺好的，吃着吃着什么都忘了。"
        ,"吃货都是善良的，因为每天只想着吃，没时间去算计别人"
        ,"宁可做个善良的人，坦荡一辈子。也不做个虚伪的人，算计一辈子。人活一世，睡能睡得舒坦，笑能笑得灿烂。就是赢了一辈子。"
        ,"怎么把脑子里的钱转到银行卡里，在线等，挺急的"
        ,"明明是出门夜跑的，拐弯遇到烧烤的"
        ,"钞票不是万能的，有时候还是需要用信用卡。"
        ,"如果我老了，那些广场舞看起来好难。"
        ,"我是一个隐形富豪，所以至今还没找到自己的钱。"
        ,"生活很糟糕 还好我可爱"
        ,"想让你爸妈开心吗 带我回家"
        ,"别对我忽冷忽热的，毕竟我抵抗力不好容易感冒。"
        ,"经常被自己蠢哭 但又不能揍自己")

        语音要不微信聊吧 = Array("要不微信聊吧1","要不微信聊吧2","要不微信聊吧3","要不微信聊吧4")
        语音微信 = Array("微信1","微信2","微信3","微信4","微信5","微信6")
        套路回复=[]
        组合A = []
        组合B = []
        组合A[0] = Array("小哥哥~","嘻嘻~","O(∩_∩)O","(*╹▽╹*)")
        组合B[0] = Array("   你多大呀","   你多少岁啊","   你几岁呀","   你什么年龄呀")
        组合A[1] = Array("我21","我22","我23","我24","我25","嘻嘻~我21","嘻嘻~我22","嘻嘻~我23","嘻嘻~我24","嘻嘻~我25")
        组合B[1] = Array(",你是哪里的呀",",你是什么地方的麽",",你是哪儿的啊",",你是哪个省的呀",",你是哪儿地方人麽",",你是哪个地区呀")
        组合A[2] = Array("我是浙江的","我是上海的","我是江苏的","我是福建的","我是山东的","我是武汉的","我是重庆的","我是北京的")
        组合B[2] = Array("，你经常玩这个吗","，你玩这个APP多久啦","，这个soul你经常玩吗","，你玩这个soul多久啦","，这个APP你经常玩吗")
        //组合A[3] = Array("我是刚下这个APP","我空的时候才看一下","我刚玩这个没多久","我才刚注册这个没多久","我蛮少上这个的","这个我不常玩")
        //组合B[3] = Array("","O(∩_∩)O","(*╹▽╹*)","┗( ▔, ▔ )┛","(￣ェ￣;)","(。-ω-)zzz")
        套路回复[0]  = Array()
        套路回复[1] = Array()
        套路回复[2] = Array()
        //套路回复[3] = Array()
        for(let c=0;c<套路回复.length;c++){
            sleep(200)
            for(let a=0;a<组合A[c].length;a++){
                for(let b=0;b<组合B[c].length;b++){
                    套路回复[c].push(组合A[c][a].concat(组合B[c][b])
                    )
                }
            }
        }
        APP = "Soul"
        自定义名字 = Array()
        分身起始 = parseInt(分身起始)
        分身结束 = parseInt(分身结束)
        for(let a=分身起始;a<分身结束+1;a++){
            自定义名字.push(APP+"分身"+a)
        }
        log(自定义名字)
        if(功能选择==2){
            循环次数 = 4
            匹配次数 = 10  
        }
        else{
            循环次数 = 1
            匹配次数 = 3
        }


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
        主界面判断 = 0
        昵称数组 = Array()
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
                    if(程序判断=="重新开始"){程序判断=0}
                    else{
                        if(功能选择==2){
                            this.上传云环境()
                        }
                    }
                    sleep(1500);
                    随机虚拟定位
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
    切换SDK:function(){
        sleep(9999);
        launchApp("xx抹机神器");
        if(手机判断参数=="逍遥模拟器"){
            for(let a=0;a<30;a++){
                sleep(1000);
                if(text("新建环境").exists()){
                    封装API.text("新建环境").click();
                    sleep(1000)
                    while(text("新建环境").exists()!=true){
                        sleep(1000)
                    }
                }
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
                back()
                封装API.等待(500,1000)
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
                        back()
                        封装API.等待(500,1000);
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
            集成模块.找图点击(华为键盘图标保存路径,910,950,170,400)
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
            if(集成模块.找图点击(灵魂性别女保存路径,450,1450,175,470)=="找图成功"){
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
                break;
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
                //集成模块.找图点击(灵魂性别男保存路径,450,1450,175,470)           
                集成模块.找图点击(灵魂性别女保存路径,450,1450,175,470)
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
                集成模块.找图点击(华为键盘图标保存路径,910,950,170,400)
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
                    if(textContains("进入星球").exists()){
                        封装API.textCon("进入星球").click()
                        break;
                    }
                    else if(descContains("进入星球").exists()){
                        封装API.descCon("进入星球").click()
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
            //this.切换SDK()
        }
    },
    打开当前soul:function(){
        if(注册方式 == "XX抹机"){
            log("打开当前soul_XX抹机")
            launchApp(APP);
        }
        else if(注册方式 == "多开分身"){
            log("打开当前soul_多开分身")
            launchApp(运行程序);
        }
    },
    发表动态:function(){
        toastLog("开始发表动态")
        for(let a=0;a<60;a++){
            if(程序判断 == "重新开始"){
                log("发表动态函数找到重新开始判断...")
                return
            }
            封装API.等待(1000)
            if(text("星球").exists()&&text("广场").exists()){
                log("找到灵魂首页面...")
                break;
            }
            else if(text("点我签到").exists()==true){
                log("找到点击签到框,准备关闭...")
                封装API.idCon("img_close").click()
            }
            else if(text("立刻添加").exists()==true){
                log("找到立刻添加框,准备关闭...")
                封装API.idCon("img_close").click()
            }
            else if(textContains("跳过").exists()){
                log("找到跳过...")
                封装API.textCon("跳过").click()
            }
            else if(idContains("etPhone").exists()||idContains("btn_newUser").exists()){
                log("该账号已死,准备开始下一个...")
                文档判断++
                files.ensureDir("/sdcard/脚本图片/灵魂异常账号.txt");
                if(文档判断==1){
                    files.write("/sdcard/脚本图片/灵魂异常账号.txt",运行程序);
                    files.append("/sdcard/脚本图片/灵魂异常账号.txt","\n"); 
                }
                else{
                    files.append("/sdcard/脚本图片/灵魂异常账号.txt",运行程序);
                    files.append("/sdcard/脚本图片/灵魂异常账号.txt","\n"); 
                }
                程序判断 = "重新开始"
                break;
            }
            else if(desc("拨号").exists()){
                主界面判断++
                if(主界面判断>=10){
                    log("该分身号已删除,准备开始下一个...");
                    主界面判断 = 0
                    清理判断 = 0;
                    程序判断 = "重新开始"
                    break;
                }
            }
        }
        封装API.idCon("main_tab_square").click()
        for(let a=0;a<random(5,10);a++){
            封装API.等待(1000);
            封装API.随机上滑();
            封装API.等待(1000);
        }
        封装API.等待(1000)
        封装API.idCon("main_tab_center").click()
        for(let a=0;a<30;a++){
            封装API.等待(1000)
            if(textContains("发表瞬间").exists()){
                封装API.text("发表瞬间").click();
            }
            if(textContains("发布").exists()){
                封装API.等待(1000)
                setText(动态[random(0,动态.length-1)])
                封装API.等待(1000)
                封装API.text("发布").click();
                封装API.等待(9999)
                break;
            }

        }
    },
    soul灵魂匹配:function(){
        暂时不在线重复次数 = 0
        log("开始soul灵魂匹配...")
        封装API.等待(1000) 
        for(let a=0;a<60;a++){
            封装API.等待(1000)
            if(text("星球").exists()&&text("广场").exists()){
                log("找到灵魂首页面...")
                break;
            }
            else if(textContains("被多人举报").exists()){
                toastLog("账号异常...")
                程序判断 = "重新开始"
                break;
            }
            else{
                back();
                封装API.等待(1000)
            }
        }
        //星球页面ID...
        封装API.idCon("main_tab_planet").click()
        封装API.等待(1000)
        封装API.idCon("soul_match_filter").click()
        封装API.等待(1000)
        封装API.text("男").click()
        封装API.等待(1000)
        封装API.text("确定").click()
        封装API.等待(1000)
        for(let a=0;a<匹配次数;a++){
            log("灵魂匹配===>"+a)
            匹配界面重复次数 = 0
            封装API.等待(500)
            if(程序判断 == "重新开始"){
                log("找到重新开始判断...")
                break;
            }
            if(id("iv_match_close").exists()){
                封装API.id("iv_match_close").click()
            }
            if(text("趣味测试").exists()==true){
                log("找到趣味测试,准备返回...")
                封装API.idCon("img_toolbar_back").click()     
                封装API.等待(1000,1500)             
            }
            else if(text("发现新版本").exists()==true){
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
                if(textContains("你要找的人暂时不在线呢").exists()==true){
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
                if(idContains("robot_gif").exists()==true){
                    //log("找到robot_gif...");//暂时不做处理            
                }
            }
            if(暂时不在线重复次数>=4){
                log("暂时不在线次数大于等于4次.退出该循环...")
                封装API.idCon("titlebar_back_ivbtn").click() 
                程序判断 = "重新开始"
                break;
            }
            else if(匹配界面重复次数>=15){
                匹配界面重复次数 = 0
                封装API.idCon("titlebar_back_ivbtn").click() 
            }
            else{
                if(textContains("对方因违反").exists()){
                    封装API.text("确定").click()
                    封装API.等待(500)
                    封装API.idCon("left_layout").click();
                    封装API.等待(500)
                }
                else{
                    setText(第一句[random(0,第一句.length-1)]);
                    封装API.idCon("btn_send").click();
                    封装API.等待(500)
                    封装API.idCon("left_layout").click();
                    封装API.等待(500)
                }
            }
        }
        封装API.等待(1000)  
        
        
        if(textContains("灵魂匹配").exists()==true){
            //随机点击星球好友聊天...
            for(let a=0;a<匹配次数;a++){
                log("星球匹配===>"+a)
                封装API.等待(500);
                封装API.press(random(45,1035),random(270,1260),200)
                封装API.等待(500);
                if(程序判断 == "重新开始"){
                    log("找到重新开始判断...")
                    break;
                }
                else if(textContains("对方因违反").exists()){
                    封装API.text("确定").click()
                    break;
                }
                else if(textContains("被多人举报").exists()){
                    toastLog("账号异常...")
                    程序判断 = "重新开始"
                    break;
                }
                if(id("iv_match_close").exists()){
                    封装API.id("iv_match_close").click()
                }
                if(idContains("iv_pass").exists()==true){
                    封装API.idCon("iv_pass").click()
                }
                else if(idContains("iv_video_tip_close").exists()==true){
                    封装API.idCon("iv_video_tip_close").click()
                }
                else if(idContains("user_bottom_chat").exists()==true){
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
                            else if(textContains("被多人举报").exists()){
                                toastLog("账号异常...")
                                程序判断 = "重新开始"
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
                        else if(idContains("etPhone").exists()||idContains("btn_newUser").exists()){
                            log("该账号已死,准备开始下一个...")
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
    soul回复消息:function(){
        新消息参数 = 0
        log("开始回复消息...");
        //首页底部菜单栏聊天ID与星球ID
        if(idContains("main_tab_msg").exists()&&idContains("main_tab_planet").exists()){
            log("找到灵魂首页面...");
        }
        封装API.等待(1000,1500); 
        封装API.idCon("main_tab_msg").click();
        封装API.等待(1000,1500); 
        if(textContains("允许匹配").exists()==true){}
        else{
            while(!idContains("main_tab_msg").exists()&&!idContains("main_tab_planet").exists()){
                log("不在信息界面...");
                集成模块.返回主界面();
                this.打开当前soul();
                封装API.等待(9999)
                if(text("点我签到").exists()==true){
                    log("找到点击签到框,准备关闭...");
                    封装API.idCon("img_close").click();
                }
                else if(idContains("etPhone").exists()||idContains("btn_newUser").exists()){
                    log("该账号已死,准备开始下一个...")
                    程序判断 = "重新开始"
                    break;
                }
                else if(textContains("被多人举报").exists()){
                    toastLog("账号异常...")
                    程序判断 = "重新开始"
                    break;
                }
                封装API.等待(1000);
                if(idContains("main_tab_msg").exists()&&idContains("main_tab_planet").exists()){
                    log("找到灵魂首页面...");
                    封装API.等待(1000,1500); 
                    封装API.idCon("main_tab_msg").click();
                    封装API.等待(1000,1500); 
                    if(textContains("允许匹配").exists()==true){break;}
                }
            }
        };
        if(text("Soul官方").exists()){log("找到Soul官方...");}
        else{};
        for(let a=0;a<200;a++){
            log("soul回复消息===>"+a)
            封装API.等待(1000);
            if(程序判断 == "重新开始"){
                return;
            }
            else if(desc("拨号").exists()){
                log("回复界面找到拨号,准备开始下一个...");
                程序判断 = "重新开始"
                break;
            }
            if(id("iv_match_close").exists()){
                封装API.id("iv_match_close").click()
            }
            if(idContains("left_layout").exists()&&idContains("right_layout").exists()&&idContains("menu_tab_voice").exists()){
                log("找到聊天页面...")
                封装API.idCon("left_layout").click();
                封装API.等待(1000);
            }
            if(idContains("titlebar_setting_ivbtn").textContains("设置").exists()){
                log("找到自己页面...")
                封装API.idCon("main_tab_msg").click();
                封装API.等待(1000);
            }      
            if(idContains("systemNotice").exists()){
                log("找到soul官方新消息。。。")
                封装API.idCon("systemNotice").click()
                封装API.等待(1000);
                封装API.idCon("setting_back_ivbtn").click();
                封装API.等待(1000);
            }    
            var 新消息 = classNameContains("TextView").idContains("unread_msg_number").findOne(1000)
            if(新消息!=null&&新消息.bounds().centerY() < 1770){
                封装API.setView(新消息).click()
                新消息参数 = 0
            }
            else if(新消息==null){
                新消息参数++
                if(新消息参数>=5){
                    return
                }
            }
            封装API.等待(3000);
            if(idContains("left_layout").exists()&&idContains("right_layout").exists()&&idContains("menu_tab_voice").exists()){
                log("找到聊天页面...")
                if(textContains("对方因违反").exists()){
                    封装API.text("确定").click()
                    封装API.等待(500)
                    封装API.idCon("left_layout").click();
                }
                else{
                    var 昵称控件 = classNameContains("TextView").id("title").findOne(1000)
                    var 昵称 = 昵称控件.text()
                    console.log(昵称);
                    if(昵称数组.indexOf(昵称) != -1){
                        log("找到该昵称...")
                    }
                    else{
                        this.回复话术();
                    }
                    封装API.等待(500)
                }
            }
            else{
                封装API.等待(2000,5000)
                封装API.idCon("main_tab_msg").click();
                封装API.等待(10,50)
                封装API.idCon("main_tab_msg").click();
                封装API.等待(500)
                if(1==random(1,2)){
                    封装API.随机下滑()
                    封装API.等待(1000)
                }
            }
        }
    },
    回复话术:function(){
        封装API.等待(1000)
        if(idContains("setting_back_ivbtn").exists()==true){
            log("setting_back_ivbtn...")
            封装API.idCon("setting_back_ivbtn").click();
        }
        回复消息 = this.色粉套路话术()
        if(回复消息=="输入微信"){
            setText("可以,那我报给你~");
            封装API.等待(1000);
            封装API.idCon("btn_send").click();
            封装API.等待(1000);
            this.录制语音(语音要不微信聊吧[random(0,语音要不微信聊吧.length-1)]);
            this.录制语音(语音微信[random(0,语音微信.length-1)]);           
            封装API.等待(1000);
            封装API.idCon("left_layout").click();//聊天界面返回控件ID
        }
        else if(回复消息=="引流结束"){
            setText(表情[random(0,表情.length-1)]+回复消息+标点符号[random(0,标点符号.length-1)]);
            封装API.等待(1000);
            封装API.idCon("btn_send").click();
        }
        else{
            setText(表情[random(0,表情.length-1)]+回复消息+标点符号[random(0,标点符号.length-1)]);
            封装API.等待(1000);
            封装API.idCon("btn_send").click();
            if(引流参数==1){
                封装API.等待(1000);
                var 昵称控件 = classNameContains("TextView").id("title").findOne(1000)
                var 昵称 = 昵称控件.text()
                console.log(昵称);
                昵称数组.push(昵称)
                this.录制语音(语音要不微信聊吧[random(0,语音要不微信聊吧.length-1)]);
                this.录制语音(语音微信[random(0,语音微信.length-1)]);         
                封装API.等待(500);
            }
            封装API.等待(500)
            封装API.idCon("left_layout").click();//聊天界面返回控件ID
        }
    },
    色粉套路话术: function(){
        套路回复深度 =  new Array();
        引流参数 = -1
        聊天内容集 = idContains("tv_chatcontent").find();
        聊天内容集.forEach(聊天内容 => {
            sleep(100)
            if(聊天内容.text().indexOf("可以,那我报给你~") != -1){
                套路回复深度.push(99)
            }
            if(聊天内容.text().indexOf("微信") != -1){
                return "输入微信";
            }
            for(let a=0;a<套路回复.length;a++){
                套路回复[a].forEach(套路内容 => {
                    if(聊天内容.text().indexOf(套路内容) != -1){
                        套路回复深度.push(a)
                    }
                });
            }   
        });
        console.log(套路回复深度);
        if(套路回复深度==""){套路回复深度.push(-1)}
        var max = Math.max.apply(null,套路回复深度);//获取套路回复深度数组的最大值,
        log("max的值等于===>"+max)
        if(max>=套路回复.length-1){
            console.log("全部套路回复完毕...")
            封装API.idCon("left_layout").click();//聊天界面返回控件ID
            封装API.等待(1000)
            return "引流结束"
        }
        else if(max==套路回复.length-2){
            console.log("准备回复套路回复最后一句.")
            引流参数 = 1
            return 套路回复[max+1][random(0,套路回复[max+1].length-1)]
        }
        else if(max == "Infinity"){
            log("max等同无穷...")
            return 套路回复[4][random(0,套路回复[max+1].length-1)]
        }
        else if(max == "-1"){
            log("没有找到套路回复,准备回复第一句...")
            return 套路回复[0][random(0,套路回复[max+1].length-1)]
        }
        else{
            return 套路回复[max+1][random(0,套路回复[max+1].length-1)]
        }
    },
    昵称判断:function(){
        if(idContains("left_layout").exists()&&idContains("right_layout").exists()&&idContains("menu_tab_voice").exists()){
            var 昵称控件 = classNameContains("TextView").id("title").findOne(1000)
            var 昵称 = 昵称控件.text()
            console.log(昵称);
            if(昵称数组.indexOf(昵称) != -1){
                log("找到该昵称...")
                return false
            }
            else{
                昵称数组.push(昵称)
                return true
            }
        }
        else{
            log("不在聊天界面...");
            return "不在聊天界面"
        }
    },
    录制语音:function(语音文件){
        //语音图标ID
        this.替换语音(语音文件)
        封装API.等待(1000)
        封装API.idCon("menu_tab_voice").click()
        封装API.等待(3000)
        //录音录制ID
        封装API.idCon("status").click()
        封装API.等待(5000,8000)
        封装API.idCon("status").click()
        封装API.等待(2000,4000)
        if(text("录音中").exists()){
            log("找到录音中...")
            封装API.idCon("status").click()
        }
        封装API.等待(1000)
        封装API.等待(1000)
        封装API.idCon("confirm").click()//发送语音控件ID
        封装API.等待(1000)
    },
    替换语音:function(语音文件){
        log("开始替换语音文件")
        var dir = "/data/local/tmp";
        var 替换路径 = "/sdcard/脚本图片/"+语音文件+".pcm";
        log(files.copy(替换路径,dir+"/"+"2.pcm"));
    },
    语音文件:function(){
        jsFiles = files.listDir(dir, function(name){
            return name.endsWith(".wav") && files.isFile(files.join(dir, name));
        });
    },
    容错:function(){
        thread = threads.start(function(){
            while(true){
                sleep(1000)
                if(textContains("知道了").exists()){
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
                /*if(textContains("被多人举报").exists()){
                    toastLog("被多人举报...");
                    程序判断 = "重新开始";
                    封装API.text("确定").click()
                }*/
                if(idContains("close_dialog").exists()){
                    toastLog("搜狗输入法升级提示");
                    封装API.idCon("close_dialog").click()
                }
                if(textContains("返回星球").exists()){
                    toastLog("找到返回星球");
                    封装API.textCon("返回星球").click()
                }
                if(textContains("确定离开").exists()){
                    toastLog("找到确定离开");
                    封装API.textCon("确定离开").click()
                }
            }
        });
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
            //var 男 = className("android.widget.LinearLayout").clickable(true).boundsInside(16,1737,1064,1828).findOne(1000)
            //封装API.setView(男).click()
            //集成模块.找图点击(灵魂性别男保存路径,450,1450,175,470)
            集成模块.找图点击(灵魂性别女保存路径,450,1450,175,470)
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
    保存账号:function(){
        toastLog("开始保存账号...");
        时间 = this.中文时间();
        files.ensureDir("/sdcard/脚本参数/灵魂账号.txt")
        files.append("/sdcard/脚本参数/灵魂账号.txt",保存号码);
        files.append("/sdcard/脚本参数/灵魂账号.txt","----");
        files.append("/sdcard/脚本参数/灵魂账号.txt",soul随机密码);
        files.append("/sdcard/脚本参数/灵魂账号.txt","----");
        files.append("/sdcard/脚本参数/灵魂账号.txt",时间);
        files.append("/sdcard/脚本参数/灵魂账号.txt","\n");
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
