<template>
 <compHeader :studentProps="students"></compHeader>
 <compFooter></compFooter>
  
</template>

<script>
import compHeader from './Components/Header_footer/Header.vue';
import compFooter from './Components/Header_footer/Footer.vue';
export default {
    data(){
        return{
            students : ['Rony','Jony','Kamrul']
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