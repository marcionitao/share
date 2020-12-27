<template>
  <b-container class="mt-4 ml-4">
    <h1 class="mb-4">Code Share Plattform</h1>

    <!--Adicionando o 'codemirror' e suas configurações a esta pagina-->
    <codemirror v-model="code" :options='cmOptions' />

    <b-button variant="info" class="mt-2" @click="createCode" :disabled='created'>
      Create Code
    </b-button>

  </b-container>
</template>

<script>
export default {
  data() {
    return {
      created: false,
      code: 'const a = 10',
    };
  },

  mounted() {
    const urlCode = this.$route.query.code;
    if (urlCode) {
      this.code = urlCode;
      this.created = true;
    }
  },

  computed: {
    cmOptions() {
      return {
        tabSize: 2,
        mode: 'text/javascript',
        lineNumbers: true,
        readOnly: this.created ? 'nocursor' : false,
      };
    },
  },
  methods: {
    createCode() {
      this.created = true;
      this.$router.push({ path: '', query: { code: this.code } });
      this.code = '';
      this.created = false;
    },
  },

};
</script>
