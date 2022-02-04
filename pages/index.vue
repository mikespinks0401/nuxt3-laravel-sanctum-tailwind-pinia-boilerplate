<script setup>
import { useUser } from '~/store/user';

const user = useUser()
function getUser() {
    //get User from laravel sample
    console.log(user.user)
}
function changeUser() {
    //get User from laravel sample
    user.getUser()
    console.log('changed')
}
</script>

<template>
    <div class="flex flex-col w-full min-h-screen justify-center items-center">
        <h1 class="bg-black text-white text-5xl">Hello</h1>
        <button @click="getUser">Get User</button>
        <button @click="changeUser">Change User</button>
    </div>
</template>