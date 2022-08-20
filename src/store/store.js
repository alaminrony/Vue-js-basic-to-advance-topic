import { createStore } from "vuex";


export const store = createStore({
  state: {
    books: [
      { name: "Harry Potter", price: 100 },
      { name: "Lord of The Rings", price: 150 },
      { name: "Night Circus", price: 90 },
      { name: "Lost World", price: 200 },
    ],
  },
  getters: {
    saleBooks(state) {
      let saleBooks = state.books.map((book) => {
        return {
          name: `** ${book.name}**`,
          price: book.price,
        };
      });
      return saleBooks;
    },
  },

  mutations:{
    reducePrice(state){
        state.books.forEach((book)=>{
            book.price = book.price - 1;
        });
    }
  },
  actions:{
    // reducePrice({commit }){
    //     commit('reducePrice');
    // },
    reducePrice ({ commit }) {
      setTimeout(() => {
        commit('reducePrice')
      }, 1000)
    }
  }
});
