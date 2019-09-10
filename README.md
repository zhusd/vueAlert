# vue-alert-win

> Popover test package upload NPM

## 使用 (How Usage)

import alertWin from 'vuealertdemo'

Vue.use(alertWin)

this.$alert.show({
		         btnTpye:'btn1',                           //弹窗按钮类型  btn1--一个按钮铺满  btn2--两个按钮
			   	 btnText:['确定'],                         //按钮字符      
			   	 tipsText:'这是提示',                      //提示框内容     
			   	 colorType:'#009bff',                     //背景主题
			   	 diaphaneity:'rgba(255,255,255,.2)',      //透明度
			   	 maskLayer:true,                          //遮罩层
			   	 fonSize:'14',                            //提示字体大小
			   	 fontColor:'#666',                        //提示字体颜色
			   	 icon:true,                               //是否需要icon 
			     iconsrc:require('./img/tips (14).png'),  //地址可自己配置
			     showType:'box-scale',                    //出现形式        box-scale ---缩放      box-translateT---上下   
			     callback:function(index){                //按钮回调    index--对应btnText
			        
			     }
			})


##  问题说明 (Problem specification)

使用css3属性不兼容低版本浏览器
Using css3 properties is not compatible with lower version browsers

只在谷歌浏览器编辑完成其他浏览器还没有测试使用过
It is only edited in Google and no other browsers have been tested yet


For detailed explanation on how things work, consult the [docs for vue-loader](https://github.com/zhusd/vueAlert.git).
