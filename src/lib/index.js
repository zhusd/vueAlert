// import Vue from 'vue'
import AlertComponet from './index.vue'

let Alert = {}

Alert.install = function(Vue,opts){

   

	let option = {            
		 btnTpye:'btn1',                           //弹窗按钮类型  btn1--一个按钮铺满
	   	 btnText:['确定'],                         //按钮字符  
	   	 tipsText:'这是提示',                      //提示框内容
	   	 colorType:'#009bff',                     //背景主题
	   	 diaphaneity:'rgba(255,255,255,.2)',      //透明度
	   	 maskLayer:true,                          //遮罩层
	   	 fonSize:'14',
	   	 fontColor:'#666',
	   	 icon:true,
	     iconsrc:require('./img/tips (14).png'),
	     showType:'box-scale',
	     callback:function(index){
	        
	     }

	}

    for(let key in opts){
     	option[key] = opts[key];
     }

    Vue.prototype.$alert = function(opt){
    	if(typeof opt == 'object'){
        	for(let key in opt){
		     	option[key] = opt[key]
		     }
        }

        let LoaderController = Vue.extend(AlertComponet)

       let instance = new LoaderController().$mount(document.createElement("div"))
       instance.btnTpye = option.btnTpye
       instance.btnText = option.btnText
       instance.tipsText = option.tipsText
       instance.fonSize = option.fonSize
       instance.fontColor = option.fontColor
       instance.iconsrc = option.iconsrc
       instance.icon = option.icon
       instance.showType = option.showType
       instance.colorType = option.colorType
       instance.diaphaneity = option.diaphaneity
       instance.maskLayer = option.maskLayer

       document.body.appendChild(instance.$el);
       setTimeout(()=>{
	       let btnlist = document.querySelectorAll("."+option.btnTpye)
	       for(let i=0;i<btnlist.length;i++){
	       	 let bo = btnlist[i]
	       	 bo.addEventListener('click',function(){
	       	 	option.callback(i)
	       	 	document.body.removeChild(instance.$el);
	       	 })
	       	 if(option.btnTpye =="btn2"){
	       	 	 bo.addEventListener('mouseover',function(){
		       	 	bo.style.background = option.colorType
		       	 	bo.style.color = "#fff"
		       	 })
		       	 bo.addEventListener('mouseout',function(){
		       	 	bo.style.background = "#fff"
		       	 	bo.style.color = "#666"
		       	 })
	       	 }
	       	 
	       }
       },400)
    }

    Vue.prototype.$alert["show"] = function(opt){
    	Vue.prototype.$alert(opt)
    }

}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Alert)
}


export default Alert;