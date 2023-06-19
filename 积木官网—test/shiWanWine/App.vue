<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	/*每个页面公共css */
	*{
		margin:0;
		padding:0;
		box-sizing: border-box;
	}
	view{
		box-sizing: border-box;
	}
	image{
		vertical-align: middle;
	}
</style>
