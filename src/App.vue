<template>
    <a-locale-provider :locale="locale">
        <div id="app">
            <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
    </a-locale-provider>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";

export default {
    name: "app",
    components: {
        HelloWorld
    },
    data() {
        return {
            locale: zhCN
        };
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
}
</style>
