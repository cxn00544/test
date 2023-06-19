<template>
	<view class="index">
		<view class="my-content">
			<view class="head">
				<view class="user">
					<image src="../../static/logo.png" mode=""></image>
					<text>刘浩</text>
				</view>
				<view class="news">
					<view class="">
						<image src="../../static/icons/gold_coin.png" mode=""></image>
						<text>会员签到</text>
					</view>
					<view class="">
						<image src="../../static/icons/news.png" mode=""></image>
						<text>22</text>
					</view>
				</view>
			</view>
			<view class="member">
				<view class="card" style="background:url('https://gymoo-project-cdn.oss-cn-shenzhen.aliyuncs.com/yunce_project/shiwanWine-img/blackCard.png') no-repeat;background-size: 100%;">
					<view class="">
						黑卡会员
					</view>
					<view class="">
						<view>20/1000 升级还需980经验</view>
						<u-line-progress inactiveColor='#7E7E7E' activeColor='#F3C880' :percentage="percentage" :showText="false"/>
					</view>
					<view class="">
						可用积分
						<image src="../../static/icons/right_icon.png" mode=""></image>
					</view>
					<view class="">
						1289
					</view>
				</view>
				<view class="list">
					<view class="">
						<image src="../../static/icons/jieri.png" mode=""></image>
						<text>节日礼遇</text>
					</view>
					<view class="">
						<image src="../../static/icons/hudong.png" mode=""></image>
						<text>互动体验</text>
					</view>
					<view class="">
						<image src="../../static/icons/zhuanshu.png" mode=""></image>
						<text>专属好礼</text>
					</view>
					<view class="">
						<image src="../../static/icons/chaozhi.png" mode=""></image>
						<text>超值优惠</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				percentage:30,
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	.index{
		.my-content{
			padding:0 30rpx;
			background: linear-gradient(180deg, #3B7779 0%, #275B5D 100%);
			height: 1068rpx;
			.head{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 30rpx 0;
				.user{
					image{
						margin-right:20rpx;
						width: 80rpx;
						height: 80rpx;
						border: 1rpx solid #FFFFFF;
						border-radius: 50%;
					}
					text{
						font-size: 32rpx;
						font-family: PingFangSC-Bold, PingFang SC;
						font-weight: bold;
						color: #FFFFFF;
					}
				}
				.news{
					display: flex;
					margin-right: 50rpx;
					view{
						&:first-of-type{
							margin-right:30rpx;
							display: flex;
							justify-content: center;
							align-items: center;
							width: 169rpx;
							height: 49rpx;
							background: #275B5D;
							border-radius: 27rpx;
							image{
								margin-right:10rpx;
								width:24rpx;
								height:24rpx;
							}
							text{
								font-size: 24rpx;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #F3C880;
							}
						}
						&:last-of-type{
							position: relative;
							image{
								width:40rpx;
								height:45rpx;
							}
							text{
								position: absolute;
								top: -7px;
								right: -20px;
								text-align: center;
								display: block;
								width: 45rpx;
								height: 25rpx;
								line-height: 25rpx;
								background: #FF4444;
								border-radius: 15rpx 15rpx 15rpx 0rpx;
								font-size: 22rpx;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #FFFFFF;
							}
						}
					}
				}
			}
			.member{
				.card{
					padding:40rpx;
					height:327rpx;
					>view{
						
						&:first-child{
							font-size: 44rpx;
							font-family: YouSheBiaoTiHei;
							color: #FFFFFF;
						}
						&:nth-child(2){
							margin-top:30rpx;
							font-size: 22rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #8E8E8E;
							.u-line-progress{
								width:60%;
								margin-top:15rpx;
							}
						}
						&:nth-child(3){
							margin-top:30rpx;
							font-size: 22rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #8E8E8E;
							image{
								margin-left: 15rpx;
								width:10rpx;
								height:16rpx;
							}
						}
						&:nth-child(4){
							// margin-top:10rpx;
							font-size: 48rpx;
							font-family: DINPro-Bold, DINPro;
							font-weight: bold;
							color: #FFFFFF;
						}
					}
				}
				.list{
					padding:30rpx 15rpx;
					display: flex;
					justify-content: space-around;
					background: url('https://gymoo-project-cdn.oss-cn-shenzhen.aliyuncs.com/yunce_project/shiwanWine-img/xzjh.png') no-repeat;
					view{
						text-align: center;
						image{
							margin-bottom:15rpx;
							width:70rpx;
							height:70rpx;
						}
						text{
							display: block;
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #FFFFFF;
						}
					}
				}
			}
		}
	}
</style>
