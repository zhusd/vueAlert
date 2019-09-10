<style scoped lang="less" src="./index.css">

</style>
<template>
	<div class="alert-box" id="alertBoxWin">
		<div class="alert-bg" :style="'background-color:'+diaphaneity" v-show="maskLayer"></div>
		<div :class="'alert-cont '+showType">
			<p class="alert-p" :style="'background-color:'+colorType+';'">提示框<a @click="closeAlertWin"><b>×</b></a></p>
			<div class="alert-tips" :style="'font-size:'+fonSize+'px;color:'+fontColor">
				<img :src="iconsrc" v-show="icon">
                {{tipsText}}
			</div>
			<div class="alert-btn">
				<a :class="btnTpye" v-for="item in btnText">{{item}}</a>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'vue-zsd-alertwin',
		data(){
           return{
           	 btnTpye:'btn1',
           	 btnText:['确定'],
           	 tipsText:'这是提示',
           	 colorType:'#009bff',
           	 fonSize:'14',
           	 fontColor:'#666',
           	 icon:true,
             iconsrc:require('./img/tips (14).png'),
             showType:'box-scale',
             maskLayer:true,
             diaphaneity:'rgba(255,255,255,.2)', 
             callback:function(index){
                console.log("index="+index)
             }
           }
		},
		methods:{
			closeAlertWin(){
                let win = document.getElementById("alertBoxWin")
                let pra = win.parentNode
                pra.removeChild(win);
			}
		}
	}
</script>