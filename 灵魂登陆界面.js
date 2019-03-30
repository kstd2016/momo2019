"ui";
var PrefCheckBox = require('./保存勾选框模块.js');
ui.layout(
    <vertical>
        <appbar>
            <toolbar id="toolbar"  title="soul引流参数设定 :"/>
            <tabs id="tabs"/>
        </appbar>
        <viewpager id="viewpager">
        <frame>
            <vertical padding="20"> 
            <horizontal>
            <text  textSize="16sp" textStyle="bold" text="请输入易码的账号与密码 :"/>
            </horizontal>
            <horizontal>
                <input w="110" id="易码账号"  hint="易码账号 :"/>
                <input w="110" id="易码密码"  hint="易码密码 :"/>
            </horizontal>  
            <horizontal>
            <text  textSize="16sp" textStyle="bold" text="请输入联众的账号与密码 :"/>
            </horizontal>  
            <horizontal>
                <input w="110" id="联众账号"  hint="联众账号 :"/>
                <input w="110" id="联众密码"  hint="联众密码 :"/>
            </horizontal>  
            <horizontal>
                <input w="*" id="打招呼话术"  hint="打招呼话术..."/>
            </horizontal>
            <horizontal>
                <input w="*" id="统一回复话术"  hint="统一回复话术..."/>
            </horizontal>
            <horizontal>
                <pref-checkbox id="无极IP" textSize="16sp" textStyle="bold" text="开启无极IP切换模式"/>
            </horizontal> 
            <horizontal>
                <pref-checkbox id="流量卡IP" textSize="16sp" textStyle="bold" text="开启流量卡IP切换模式"/>
            </horizontal> 
            <horizontal>
                <pref-checkbox id="xx抹机" textSize="16sp" textStyle="bold" text="开启xx抹机模式"/>
            </horizontal> 
            <horizontal>
                <pref-checkbox id="多开分身" textSize="16sp" textStyle="bold" text="开启流多开分身模式"/>
            </horizontal> 
                <button  id="原有参数设定" w="*" text="加载原有设置" textColor="red"/>                         
                <button id="完成并启动配置" w="*" text="完成并启动配置" textColor="red"/>
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
    var 读取文本 = files.read("/sdcard/脚本/灵魂参数.txt");
    var 分割文本=读取文本.split("\n");
    分割文本.forEach(element => {
        log(element);
        同步参数[i] = element
        i++
    });
    易码账号参数 = 同步参数[0];
    易码密码参数 = 同步参数[1];
    联众账号参数 = 同步参数[2];
    联众密码参数 = 同步参数[3];
    打招呼话术参数 = 同步参数[4];
    统一回复话术参数 = 同步参数[5];
    ui.易码账号.setText(易码账号参数)
    ui.易码密码.setText(易码密码参数)
    ui.联众账号.setText(联众账号参数)
    ui.联众密码.setText(联众密码参数)
    ui.打招呼话术.setText(打招呼话术参数)
    ui.统一回复话术.setText(统一回复话术参数)
    toastLog("参数加载完成...");
});
ui.完成并启动配置.on("click", ()=>{
    var 打招呼话术=ui.打招呼话术.text()
    var 统一回复话术=ui.统一回复话术.text()
    var 易码账号=ui.易码账号.text()
    var 易码密码=ui.易码密码.text()
    var 联众账号=ui.联众账号.text()
    var 联众密码=ui.联众密码.text()
    var 无极IP参数 = PrefCheckBox.getPref().get("无极IP")
    var 流量卡IP参数 = PrefCheckBox.getPref().get("流量卡IP")
    var xx抹机参数 = PrefCheckBox.getPref().get("xx抹机")
    var 多开分身参数 = PrefCheckBox.getPref().get("多开分身")
    if(无极IP参数){无极IP参数 = "无极IP"}
    if(流量卡IP参数){流量卡IP参数 = "流量卡IP"}
    if(xx抹机参数){xx抹机参数 = "xx抹机"}
    if(多开分身参数){多开分身参数 = "多开分身"}
    files.ensureDir("/sdcard/脚本/灵魂参数.txt");
    files.write("/sdcard/脚本/灵魂参数.txt",易码账号);
    files.append("/sdcard/脚本/灵魂参数.txt","\n"); 
    files.append("/sdcard/脚本/灵魂参数.txt",易码密码);
    files.append("/sdcard/脚本/灵魂参数.txt","\n"); 
    files.append("/sdcard/脚本/灵魂参数.txt",联众账号);
    files.append("/sdcard/脚本/灵魂参数.txt","\n"); 
    files.append("/sdcard/脚本/灵魂参数.txt",联众密码);
    files.append("/sdcard/脚本/灵魂参数.txt","\n"); 
    files.append("/sdcard/脚本/灵魂参数.txt",打招呼话术);
    files.append("/sdcard/脚本/灵魂参数.txt","\n"); 
    files.append("/sdcard/脚本/灵魂参数.txt",统一回复话术);
    files.append("/sdcard/脚本/灵魂参数.txt","\n"); 
    if(无极IP参数!=null){
        files.append("/sdcard/脚本/灵魂参数.txt",无极IP参数);
        files.append("/sdcard/脚本/灵魂参数.txt","\n");   
    }
    else if(流量卡IP参数!=null){
        files.append("/sdcard/脚本/灵魂参数.txt",流量卡IP参数);
        files.append("/sdcard/脚本/灵魂参数.txt","\n");  
    }
    if(xx抹机参数!=null){
        files.append("/sdcard/脚本/灵魂参数.txt",xx抹机参数);
        files.append("/sdcard/脚本/灵魂参数.txt","\n");   
    }
    else if(多开分身参数!=null){
        files.append("/sdcard/脚本/灵魂参数.txt",多开分身参数);
        files.append("/sdcard/脚本/灵魂参数.txt","\n");  
    }
    //=====启动脚本分割线=====
    console.setGlobalLogConfig({
        "file": "/sdcard/脚本/日志.txt"
    }); 
    toastLog("完成并启动脚本...");
    onClick("灵魂执行器")
    ui.finish();
});
