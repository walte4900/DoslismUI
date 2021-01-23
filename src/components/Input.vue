<template>
  <div class="dos-input" :class="{ ' dos-input__suffix': showSuffix }">
    <input
      class="dos-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="dos-input_suffix" v-show="showSuffix">
      <i
        class="dos-input__icon dos-icon-circle-close"
        v-show="clearable && value"
        @click="clear"
      ></i>
      <i
        class="dos-input__icon dos-icon-view"
        v-show="showPassword"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "dos-input",
  data() {
    return {
      passwordVisible: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
  methods: {
    handleInput(e) {
      // 父组件的v-model中已经包含了@input事件，因此
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.dos-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .dos-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 2px solid #a5a5a5;
    box-sizing: border-box;
    color: #3c3c3d;
    display: inline-block;
    font-size: inherit;
    height: 30px;
    line-height: 30px;
    outline: none;
    padding: 0 10px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #696c6c;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.dos-input__suffix {
  .dos-input_inner {
    padding-right: 30px;
  }

  .dos-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 35px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;

    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
