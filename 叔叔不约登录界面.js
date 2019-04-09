"ui";
ui.layout(
    <vertical>
        <appbar>
            <toolbar id="toolbar"  title="叔叔不约引流参数设定 :"/>
            <tabs id="tabs"/>
        </appbar>
        <viewpager id="viewpager">
        <frame>
            <vertical padding="20"> 
            <horizontal>
                <text  textSize="18sp" textStyle="bold" text="请输入要引流的微信账号名称 :"/>
            </horizontal>            
            <horizontal>
                <input w="110" id="微信1"  hint="微信名称① :"/>
                <input w="110" id="微信2"  hint="微信名称② :"/>
                <input w="110" id="微信3"  hint="微信名称③ :"/>
            </horizontal>
            <horizontal>
            <text  textSize="18sp" textStyle="bold" text="请输入易码的账号与密码 :"/>
            </horizontal>
            <horizontal>
                <input w="110" id="易码账号"  hint="易码账号 :"/>
                <input w="110" id="易码密码"  hint="易码密码 :"/>
            </horizontal>  
            <horizontal>
            <text  textSize="18sp" textStyle="bold" text="请输入联众的账号与密码 :"/>
            </horizontal>  
            <horizontal>
                <input w="110" id="联众账号"  hint="联众账号 :"/>
                <input w="110" id="联众密码"  hint="联众密码 :"/>
            </horizontal>  
            <text text="话术文本名称必须为叔叔不约话术,话术文本必须放在根目录下否则不能运行,每一个话术必须用|分割,每一段话术必须用回车分割" textColor="red" textSize="16sp"/>
                <button  id="原有参数设定" w="*" text="加载原有设置" textColor="red"/>                         
                <button id="启动配置" w="*" text="完成并启动配置" textColor="red"/>
            </vertical>
        </frame>
        </viewpager>
    </vertical>
);
function onClick(脚本名称){
    var path = engines.myEngine().cwd()+"/"+脚本名称+".js";
    engines.execScriptFile(path);
 }
 ui.原有参数设定.on("click", ()=>{
    var i = 0
    var 同步参数 = []
    var 读取文本 = files.read("/sdcard/叔叔不约参数.txt");
    var 分割文本=读取文本.split("\n");
    分割文本.forEach(element => {
        log(element);
        同步参数[i] = element
        i++
    });
    var 微信1加载参数 = 同步参数[0]
    var 微信2加载参数 = 同步参数[1]
    var 微信3加载参数 = 同步参数[2]
    var 易码账号加载参数 = 同步参数[3]
    var 易码密码加载参数 = 同步参数[4]
    var 联众账号加载参数 = 同步参数[5]
    var 联众密码加载参数 = 同步参数[6]
    ui.微信1.setText(微信1加载参数)
    ui.微信2.setText(微信2加载参数)
    ui.微信3.setText(微信3加载参数)
    ui.易码账号.setText(易码账号加载参数)
    ui.易码密码.setText(易码密码加载参数)
    ui.联众账号.setText(联众账号加载参数)
    ui.联众密码.setText(联众密码加载参数)
    toastLog("参数加载完成...");
});
ui.启动配置.on("click", ()=>{
    var 微信1=ui.微信1.text()
    var 微信2=ui.微信2.text()
    var 微信3=ui.微信3.text()
    var 易码账号=ui.易码账号.text()
    var 易码密码=ui.易码密码.text()
    var 联众账号=ui.联众账号.text()
    var 联众密码=ui.联众密码.text()
    files.ensureDir("/sdcard/叔叔不约参数.txt");
    files.write("/sdcard/叔叔不约参数.txt",微信1);
    files.append("/sdcard/叔叔不约参数.txt","\n");
    files.append("/sdcard/叔叔不约参数.txt",微信2);
    files.append("/sdcard/叔叔不约参数.txt","\n"); 
    files.append("/sdcard/叔叔不约参数.txt",微信3);
    files.append("/sdcard/叔叔不约参数.txt","\n"); 
    files.append("/sdcard/叔叔不约参数.txt",易码账号);
    files.append("/sdcard/叔叔不约参数.txt","\n"); 
    files.append("/sdcard/叔叔不约参数.txt",易码密码);
    files.append("/sdcard/叔叔不约参数.txt","\n"); 
    files.append("/sdcard/叔叔不约参数.txt",联众账号);
    files.append("/sdcard/叔叔不约参数.txt","\n"); 
    files.append("/sdcard/叔叔不约参数.txt",联众密码);
    //=====启动脚本分割线=====
    toastLog("开始启动脚本...");
    onClick("叔叔不约执行代码")
    ui.finish();
});
