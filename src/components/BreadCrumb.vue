<template>
    <ul class="h-breadcrumb">
        <li>
          <router-link to="/"
            ><font-awesome-icon class="b-icon" icon="fa-solid fa-home" />Home
          </router-link>
        </li>
          <slot></slot>
    </ul>
</template>

<script>
export default {
  name: 'BreadCrumb'
}
</script>

<style lang="scss">
  ul.h-breadcrumb {
    text-align: left;
    list-style: none;
    li {
        display: inline;
    }
    li a {
      color: $primary !important;
      text-decoration: none;
      font-weight: 600;
      .b-icon {
        padding-right: 5px;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    li+li:before {
        text-align: center;
        padding: 8px;
        color: $primary;
        content: "/\00a0";
    }
  }
</style>
