let 封装API = require(engines.myEngine().cwd() +"/封装API.js");
let 集成模块 = require(engines.myEngine().cwd() +"/集成模块.js");
let soul星球匹配 = {
    开始:function(){
        log("执行代码开始运行...")
        files.ensureDir("/sdcard/脚本参数/灵魂账号已死.txt");
        if(!requestScreenCapture()){
            toast("请求截图失败");
            exit();
        }
        分身起始 = rawInput("你输入你要开始的第一个分身")
        分身结束 = rawInput("你输入你要结束的最后一个分身")
        this.全局变量();
        this.容错()
        手机判断参数 = 集成模块.手机品牌判断();
        for(let a=0;a<自定义名字.length;a++){
            this.循环变量()
            集成模块.流量卡切换IP(手机判断参数)
            //this.光子IP()
            if(引流方式 == "XX抹机"){
                this.XX抹机()
            }
            else if(引流方式 == "多开分身"){
                封装API.等待(500);
                toastLog("准备删除目录文件夹")
                path = "/sdcard/Android/data"
                log(files.removeDir(path))
                path = "/sdcard/dk_sdcard"
                log(files.removeDir(path))
                封装API.等待(500);
                集成模块.文件清理("soul")
                运行程序 = 自定义名字[a]
                launchApp(运行程序);
                this.发表动态();
            }
            for(let b=0;b<4;b++){
                if(程序判断 == "重新开始"){log("找到程序判断重新开始...");}
                else{
                    this.soul灵魂匹配();
                    this.soul回复消息();
                }
            }
            集成模块.关闭应用(运行程序)
            集成模块.返回主界面()
            封装API.等待(1000)
        }
    },
    全局变量:function(){
        引流方式 = "多开分身"
        文档判断 = 0
        程序判断 = 0
        第一句 = Array("你好","你好呀","你好,小哥哥","你好哦,小哥哥","你好呀,小哥哥","hi~","嗨","hello"
        ,"嗨喽","hi~,小哥哥","嗨喽,小哥哥","嗨,小哥哥","hello,小哥哥")
        表情 = Array("😁","😊","😘","😍","😳","😅","😓","😎","😑","🙄","🤔","😉","🕺🏻"
        ,"😆","😤","😨","😈","🌝","😒","😔","🙂","🙃","💋","🌹","👍🏼","🎉","😩","😕","😐"
        ,"😠","😴","😌","😋","😝","👋🏼","🙏🏼","💪🏼","🤢","🤪","😷","😲","🤩","🤤","🤗"
        ,"😇","🤠","🤯","😪","😵","🤒","🤧","🤫","🤨","🧐","🖕🏼","👌🏼","✌🏼","🤙🏼","🤝","🐷","🙈","🙉"
        ,"🙊","😹","😻","🙀","🐶","🎁","💖","💔","💩","💯","👀","💀","👻","👴🏻","👵🏻","👶🏻","🤡"
        ,"💃🏻","🦊","🐱","🦄","🌈","✨","💤","👫","👯‍","♀","️💚","💕","🍀","🌸","💐","💍","🤓")
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

        语音要不微信聊吧 = Array("语音要不微信聊吧1","语音要不微信聊吧2","语音要不微信聊吧3","语音要不微信聊吧4")
        语音微信 = Array("语音微信1","语音微信2","语音微信3","语音微信4","语音微信5","语音微信6")
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
                    套路回复[c].push(组合A[c][a].concat(组合B[c][b]))
                }
            }
        }
        APP = "Soul"
        自定义名字 = Array()
        for(let a=分身起始;a<分身结束+1;a++){
            自定义名字.push(APP+"分身"+a)
        }
    },
    循环变量:function(){
        主界面判断 = 0
        昵称数组 = Array()
        程序判断 = 0
    },
    光子IP:function(){
        launchApp("光子·安卓变版")
        for(let a=1;a<30;a++){
            if(text("立即登录").exists()){
                封装API.text("立即登录").click()
            }
        }
    },
    XX抹机:function(){
        launchApp("xx抹机神器");
        for(let a=0;a<30;a++){
            sleep(1000);
            if(text("新建环境").exists()){
                sleep(1000)
                if(程序判断 == "重新开始"){
                    this.XX抹机更换环境()
                }
                图标 = classNameContains("LinearLayout").clickable(true).boundsInside(30,312,195,492).findOne(2000)
                封装API.setView(图标).click()
                sleep(1000);
                if(textContains("当前无环境").exists()){
                    封装API.text("确定").click()
                    封装API.等待(1000)
                    this.XX抹机更换环境()
                    图标 = classNameContains("LinearLayout").clickable(true).boundsInside(30,312,195,492).findOne(2000)
                    封装API.setView(图标).click()
                    sleep(1000);
                }
                封装API.text("启动").click();
                break;
            }
            else if(text("网络连接失败").exists()){
                封装API.text("确定").click();
                封装API.等待(1000)
                launchApp("设置")
                封装API.等待(2000)
                if(手机判断参数=="华为系统"){
                    封装API.text("飞行模式").click();
                    封装API.等待(2000)
                    launchApp("xx抹机神器");
                    封装API.等待(2000)
                }
                else{toastLog("没有找到该手机判断参数")}
            }
        }
    },
    XX抹机更换环境:function(){
        程序判断 = 0
        封装API.idCon("iv_envlist").click();
        sleep(2000)
        Swipe(700,400,100,400)
        sleep(2000)
        封装API.text("删除").click()
        sleep(2000)
        封装API.idCon("iv_envlist").click();
        sleep(2000)
        封装API.text("云环境管理").click()
        sleep(2000)
        云环境 = id("tv_name").textContains("环境").findOne(1000)
        封装API.setView(云环境).click()
        sleep(2000)
        封装API.text("下载").click()
        for(let a=0;a<90;a++){
            封装API.等待(1000)
            if(textContains("环境不存在").exists()||textContains("下载失败").exists()){
                封装API.text("确定").click()
                sleep(2000)
                封装API.desc("转到上一层级").click()
                sleep(2000)
                封装API.text("云环境管理").click()
                sleep(2000)
                云环境 = id("tv_name").textContains("环境").findOne(1000)
                封装API.setView(云环境).click()
                sleep(2000)
                封装API.text("下载").click()
            }
            if(textContains("切换为当前环境").exists()){
                封装API.textCon("切换为当前环境").click()
            }
            if(textContains("已切换为当前环境").exists()){
                封装API.textCon("确定").click()
                break;
            }
        }
        sleep(2000)
        Swipe(800,420,200,420)
        sleep(2000)
        封装API.text("删除").click()
        sleep(3000)
        封装API.desc("转到上一层级").click()
        sleep(2000)
    },
    打开当前soul:function(){
        if(引流方式 == "XX抹机"){
            launchApp("xx抹机神器");
            for(let a=0;a<30;a++){
                sleep(1000);
                if(text("新建环境").exists()){
                    图标 = classNameContains("LinearLayout").clickable(true).boundsInside(30,312,195,492).findOne(2000)
                    封装API.setView(图标).click()
                    sleep(1000);
                    封装API.text("启动").click();
                    break;
                }
            }
        }
        else if(引流方式 == "多开分身"){
            launchApp(运行程序);
        }
    },
    发表动态:function(){
        for(let a=0;a<60;a++){
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
        封装API.等待(1000)
        封装API.idCon("main_tab_center").click()
        for(let a=0;a<30;a++){
            封装API.等待(1000)
            if(textContains("发表瞬间").exists()){
                封装API.text("发表瞬间").click();
            }
            if(text("发布").exists()){
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
        for(let a=0;a<10;a++){
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
            for(let a=0;a<10;a++){
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
        封装API.等待(6000,10000)
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
                /*if(textContains("被多人举报").exists()){
                    toastLog("被多人举报...");
                    程序判断 = "重新开始";
                    封装API.text("确定").click()
                }*/
                if(idContains("close_dialog").exists()){
                    toastLog("搜狗输入法升级提示");
                    封装API.idCon("close_dialog").click()
                }
            }
        });
    }
}
module.exports = soul星球匹配
