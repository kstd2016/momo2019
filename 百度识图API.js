urls = {
    "通用识别":"https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic",
};
token = null;
//API Key:"aeGK8bG0RCIFcziFI9rYD6Ay"
//Secret Key:"6gGitZOIGOMLFXKIh05RG0gGgsGKMVM2"
let 百度识图API = function(APIKey,SecretKey){
    this.token = null;
    this.getImgBase64 = function(a,b,c,d){
        captureScreen("/sdcard/1.png");
        var img = images.read("/sdcard/1.png");
        clip = images.clip(img,a,b,c,d);
        return images.toBase64(clip);
    }   
    this.getToken = function(){
        if(token == null){
            let url = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id="+APIKey+"&client_secret=" + SecretKey;
            try{
                let ret = http.get(url);
                this.token = ret.body.json().access_token;
            }catch(e){
                console.log(e);
                return this.getToen();
            }
            
        }
        return this.token;
    }
    this.ocr =function(a,b,c,d,e){
        let base64 = this.getImgBase64(a,b,c,d);
        console.log(base64);
        if(e == null){
            e = "通用识别";
        }
        let surl = urls[e];
        console.log(surl);
        //token
        let tokenUrl = surl += "?access_token=" + this.getToken();
        console.log(tokenUrl);

        let ret = http.post(tokenUrl,{
            image:base64
        },{
            headers:[
                {"Content-Type":"application/x-www-form-urlencoded"}
            ]
        });

        return ret.body.json();
    }
    this.getVifCode = function(a,b,c,d,e){
        return this.ocr(a,b,c,d,e).words_result[0].words;
    }

}

//console.log(new object("aeGK8bG0RCIFcziFI9rYD6Ay","6gGitZOIGOMLFXKIh05RG0gGgsGKMVM2").getToken());
/*

if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
console.log(new object("wfET1IMgTaQZetK9Bx9SCKc3","3pHyEOtIjRUkhMygCTk5QgddALHFKeSY").getVifCode(0,0,250,250));

*/
module.exports = 百度识图API
