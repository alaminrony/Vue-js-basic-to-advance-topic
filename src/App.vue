<template>
    <div id="app">
        <BookListOne></BookListOne>
        <BookListTwo></BookListTwo>
    </div>
</template>

<script>
import BookListOne from "./Components/Header_footer/BooklistOne"
import BookListTwo from "./Components/Header_footer/BooklistTwo"
export default {
    
    components:{
      BookListOne,
      BookListTwo
    }
}
</script>