<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p
          class="currency-line"
        >
          <span>
            {{getCurrency() | currency() }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currencies: ['RUB']    
  }),
  computed: {
    base() {
      return this.$store.getters.info.dill
    }
  },
  methods: {
    getCurrency(currency) {
      return this.$store.getters.info.dill
    }
  }
}
</script>
