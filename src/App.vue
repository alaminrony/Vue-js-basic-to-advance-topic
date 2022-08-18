<template>
 <compHeader></compHeader>
 <compFooter></compFooter>
  
</template>

<script>
import compHeader from './Components/Header_footer/Header.vue';
import compFooter from './Components/Header_footer/Footer.vue';
export default {
    data(){
        return{
            name : "Rony",
            age : 21
        }
    },
    components :{
        compHeader,
        compFooter,
    },
}
</script>

<style scoped>

</style>