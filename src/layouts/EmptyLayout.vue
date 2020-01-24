<template>
    <div class="grey darken-1 empty-layout">
        <router-view />
    </div>
</template>

<script>
import messages from '../coman/messages'

export default {
    computed: {
        error() {
            return this.$store.getters.error
        }
    },
    watch: {
        error(fbError) {
            this.$error(messages[fbError.code] || 'Что то пошло не так')
        }
    }
}
</script>
