<template>
    <page-view class="page-box">
        <div class="content-box">
            <router-view></router-view>
        </div>
        <ul class="tab-bar">
            <router-link custom #default="{ navigate, isActive }" :to="{name:'ChooseFood'}">
                <li @click="navigate" :class="{ selected: isActive }">
                    <span class="iconfont icon-buy"></span>点餐
                </li>
            </router-link>
            <router-link custom #default="{ navigate, isActive }" :to="{ name: 'Order' }">
                <li @click="navigate" :class="{ selected: isActive }">
                    <span class="iconfont icon-dingdan"></span>订单
                </li>
            </router-link>
            <router-link custom #default="{ navigate, isActive }" :to="{ name: 'Category' }">
                <li @click="navigate" :class="{ selected: isActive }">
                    <span class="iconfont icon-classify"></span>分类
                </li>
            </router-link>
            <router-link custom #default="{ navigate, isActive }" :to="{ name: 'My' }">
                <li @click="navigate" :class="{ selected: isActive }">
                    <span class="iconfont icon-mine"></span>我的
                </li>
            </router-link>
        </ul>
    </page-view>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style lang="scss">
// @import "https://at.alicdn.com/t/c/font_3545121_ykk3b8ddk3.css";
@import "../assets/scss/comm.scss";

.page-box {
    display: flex;
    flex-direction: column;
}

.content-box {
    flex: 1;
    overflow: auto;
    background-color: lightblue;
}

.tab-bar {
    display: flex;
    height: 55px;
    border-top: 1px solid lightgray;
    justify-content: space-around;

    li {
        width: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &.selected {
            color: $primaryColor;
        }

        .iconfont {
            font-size: 22px;
            // font-weight: bold;
        }
    }
}
</style>