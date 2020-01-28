<template>
    <div>
        {{ msg }}
        <div>
            <button @click="fn">点我有惊喜</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '我是 App.vue'
        }
    },
    methods: {
        fn() {
            console.log('想不到吧，我就是惊喜')
        }
    }
}
</script>

<style>

</style>
