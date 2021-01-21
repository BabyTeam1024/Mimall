<template>
  <div>
      home1
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
    home2
  </div>
</template>
<script>
  import NavHeade from './../components/NavHeader'
  import NavFooter from './../components/NavFooter'

  export default{
    name:'nav-home',
    components:{
        NavHeader:NavHeade,
        NavFooter
    }
    
  }
</script>