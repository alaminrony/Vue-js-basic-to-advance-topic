<template>
  <BookListOne></BookListOne>
  <BookListTwo></BookListTwo>
  <button class="btn btn-primary" @click.prevent="reducePrice">
    Increment
  </button>
</template>

<script>
import BookListOne from "./Components/Header_footer/BooklistOne";
import BookListTwo from "./Components/Header_footer/BooklistTwo";
import { mapActions } from "vuex";
export default {
  components: {
    BookListOne,
    BookListTwo,
  },
  methods: {
    // ...mapActions(["reducePrice"]),

    reducePrice(){
    // this.$store.commit('reducePrice');
    //using Action we need to call dispatch instead of commit
    this.$store.dispatch('reducePrice');
    }
  },
};
</script>