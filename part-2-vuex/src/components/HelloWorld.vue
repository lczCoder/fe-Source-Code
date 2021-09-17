<template>
  <div>
    <div @click="$store.commit('add')">同步执行：{{$store.state.cout}}</div>
    <div @click="$store.dispatch('add')">异步执行：{{$store.state.asyncCout}}</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>