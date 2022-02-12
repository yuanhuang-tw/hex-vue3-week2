const app = Vue.createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2/api',
      products: '',
      temp: '',
    };
  },

  methods: {
    checkAdmin() {
      const URL = `${this.apiUrl}/user/check`;

      axios
        .post(URL)
        .then(() => this.getData())
        .catch(err => {
          alert(err.data.message);
          window.location = 'index.html';
        })
    },

    getData() {
      const URL = `${this.apiUrl}/yuanhuang/admin/products`;

      axios
        .get(URL)
        .then((res) => this.products = res.data.products)
        .catch(err => alert(err.data.message))
    },
  },

  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    
    axios.defaults.headers.common.Authorization = token;

    this.checkAdmin();
  },
});

app.mount('#app');