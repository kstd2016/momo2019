"ui";
var PrefCheckBox = require('./保存勾选框模块.js');
ui.layout(
    <vertical>
        <appbar>
            <toolbar id="toolbar"  title="陌陌注册登陆界面"/>
            <tabs id="tabs"/>
        </appbar>
        <viewpager id="viewpager">
            <vertical padding="20"> 
            <horizontal>
                <pref-checkbox id="Q跳注册" textSize="18sp" textStyle="bold" text="开始陌陌Q跳注册"/>
            </horizontal> 
            <horizontal>
                <pref-checkbox id="接码注册" textSize="18sp" textStyle="bold" text="开始陌陌接码注册"/>
            </horizontal> 
            <horizontal>
                <pref-checkbox id="语音注册" textSize="18sp" textStyle="bold" text="开始陌陌语音注册"/>
            </horizontal>   
            <horizontal>
                <pref-checkbox id="微信注册" textSize="18sp" textStyle="bold" text="开启陌陌微信注册"/>
            </horizontal> 
            <horizontal>
                <pref-checkbox id="无极IP" textSize="18sp" textStyle="bold" text="开启无极IP切换模式"/>
            </horizontal> 
            <horizontal>
                <pref-checkbox id="流量卡IP" textSize="18sp" textStyle="bold" text="开启流量卡IP切换模式"/>
            </horizontal> 
            <button id="启动配置" w="*" text="完成并启动配置" textColor="red"/>
            </vertical>
        </viewpager>
    </vertical>
);
function onClick(脚本名称){
    var path = engines.myEngine().cwd()+"/"+脚本名称+".js";
    engines.execScriptFile(path);
 }
 //////////第一页内容//////////
function onClick(脚本名称){
    var path = engines.myEngine().cwd()+"/"+脚本名称+".js";
    engines.execScriptFile(path);
 }
 ui.启动配置.on("click", ()=>{
    toastLog("完成配置,开始启动脚本...");
    var Q跳注册参数 = PrefCheckBox.getPref().get("Q跳注册")
    var 接码注册参数 = PrefCheckBox.getPref().get("接码注册")
    var 语音注册参数 = PrefCheckBox.getPref().get("语音注册")
    var 微信注册参数 = PrefCheckBox.getPref().get("微信注册")
    var 无极IP参数 = PrefCheckBox.getPref().get("无极IP")
    var 流量卡IP参数 = PrefCheckBox.getPref().get("流量卡IP")
    if(Q跳注册参数){Q跳注册参数 = "Q跳注册"}
    if(接码注册参数){接码注册参数 = "接码注册"}
    if(语音注册参数){语音注册参数 = "语音注册"}
    if(微信注册参数){微信注册参数 = "微信注册"}
    if(无极IP参数){无极IP参数 = "无极IP"}
    if(流量卡IP参数){流量卡IP参数 = "流量卡IP"}
    files.ensureDir("/sdcard/陌陌注册参数.txt");
    if(Q跳注册参数=="Q跳注册"){
        files.write("/sdcard/陌陌注册参数.txt",Q跳注册参数);
        files.append("/sdcard/陌陌注册参数.txt","\n");
    }
    else if(接码注册参数=="接码注册"){
        files.write("/sdcard/陌陌注册参数.txt",接码注册参数);
        files.append("/sdcard/陌陌注册参数.txt","\n");  
    }
    else if(语音注册参数=="语音注册"){
        files.write("/sdcard/陌陌注册参数.txt",语音注册参数);
        files.append("/sdcard/陌陌注册参数.txt","\n");  
    }
    else if(微信注册参数=="微信注册"){
        files.write("/sdcard/陌陌注册参数.txt",微信注册参数);
        files.append("/sdcard/陌陌注册参数.txt","\n"); 
    }
    if(无极IP参数=="无极IP"){
        files.append("/sdcard/陌陌注册参数.txt",无极IP参数);
        files.append("/sdcard/陌陌注册参数.txt","\n");   
    }
    else if(流量卡IP参数=="流量卡IP"){
        files.append("/sdcard/陌陌注册参数.txt",流量卡IP参数);
        files.append("/sdcard/陌陌注册参数.txt","\n");  
    }
    onClick("陌陌注册执行器")
    ui.finish();
});
