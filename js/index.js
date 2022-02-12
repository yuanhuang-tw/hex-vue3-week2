const app = Vue.createApp({
  data() {
    return {
      user: {
        username: '',
        password: '',
      }
    };
  },

  methods: {
    login() {
      const API_URL = 'https://vue3-course-api.hexschool.io/v2/admin/signin';

      axios
        .post(API_URL, this.user)
        .then(res => {
          const { token, expired } = res.data;

          document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
          window.location = 'products.html';
        })
        .catch(err => alert(err.data.message));
    },
  },
});

app.mount('#app');