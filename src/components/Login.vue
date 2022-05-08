<template>
    <div class="flex flex-col  bg-white p-10 rounded-md shadow-md">
        <h1 class="text-4xl text-center pb-7">Login</h1>
        <label for="uname">username</label>
        <input class="shadow-inner p-1 rounded-sm border-2" type=" text" name="uname" id="uname">
        <label for="pass">password</label>
        <input class="shadow-inner p-1 rounded-sm border-2" type="text" name="pass" id="pass">
        <div class="flex flex-row place-content-center gap-10 pt-6">
            <button class="bg-red-300 py-2 px-5">asd</button>
            <button class="bg-blue-300 py-2 px-5">asd</button>
        </div>

    </div>
</template>
<style>
</style> 
<script setup>
import { inject, nextTick, onMounted } from 'vue';


onMounted(() => {
    let code = inject("code")
    console.log(code)
    console.log(process.env.CODE)
})
</script>