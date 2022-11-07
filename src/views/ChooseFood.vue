<template>
    <page-view class="flex flex-col">
        <title-bar> H2204点餐</title-bar>
        <div class="flex-1 overflow-auto">
            <!-- 轮播图 -->
            <Swipe class="h-[200px]" :autoplay="3000">
                <SwipeItem>
                    <img src="../assets/img/01.jpeg" class="w-full h-full object-cover" alt="">
                </SwipeItem>
                <SwipeItem>
                    <img src="../assets/img/02.jpeg" class="w-full h-full object-cover" alt="">
                </SwipeItem>
                <SwipeItem>
                    <img src="../assets/img/03.jpg" class="w-full h-full object-cover" alt="">
                </SwipeItem>
                <SwipeItem>
                    <img src="../assets/img/04.jpeg" class="w-full h-full object-cover" alt="">
                </SwipeItem>
            </Swipe>
            <!-- 菜品列表 -->
            <food-item></food-item>
        </div>
    </page-view>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import FoodItem from "../components/FoodItem.vue";
export default {
    name: 'ChooseFood',
    components: {
        Swipe,
        SwipeItem,
        FoodItem,
    },
}
</script>

<style lang="scss" scoped>

</style>