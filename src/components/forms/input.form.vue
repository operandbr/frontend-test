<template>
  <div class="form-group mb-4">
    <label :for="this.$attrs.id">{{this.$attrs.label}}</label>
    <input
      class="form-control"
      :class="{'is-invalid': isInvalid}"
      v-bind="this.$attrs"
      @input="$emit('input', $event.target.value)"
    />
    <div
      v-for="(rule, index) in this.$attrs.rules"
      :key="index"
      v-show="!rule.valid"
      class="invalid-feedback">{{rule.message}}</div>
  </div>
</template>

<script>
export default {
  name: 'op-input',
  created() { },
  computed: {
    isInvalid: {
      get() {
        return this.$attrs.rules.find(i => i.valid === false);
      },
    },
  },
};
</script>
