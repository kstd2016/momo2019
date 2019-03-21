let url = "http://openapi.tuling123.com/openapi/api/v2";
let 图灵API = {
    apiKey:"096bc8761da34ee393690b2c42deb649",
    userId:"335496",
    获取回复:function(text){
        let res = http.postJson(url,{
            "perception": {
                "inputText": {
                    "text": text
                },  
            },
            "userInfo": {
                "apiKey": this.apiKey,
                "userId": this.userId
            }
        });
        let ret = res.body.json();
        console.log(ret.results[0].values.text);
        return ret.results[0].values.text;
    }
}
图灵API.获取回复("嗨");
module.exports = 图灵API;
