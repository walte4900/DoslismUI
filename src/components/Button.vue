<template>
  <button :class="[`dos-button-${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled

  }]" :disabled="disabled" class="dos-button" @click="handleClick">
    <!-- 没有插槽的时候 -->
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>

  </button>
</template>

<script>
export default {
  name: "dos-button",
  props: {
    type: {
      type: String,
      default: 'defalut',
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 点击事件，调用父组件中的点击事件
    handleClick(event) {
      this.$emit('click', event)
    }
  }
};
</script>
<style lang="scss" scoped>
.dos-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fafaf6;
  border: 0.5px solid #a8a8a8;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: ease 0.3s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 6px 10px;
  font-size: 14px;

  &:hover,
  &:focus {
    background: rgb(248, 248, 255);
    transition: ease 0.3s;
  }
}

.dos-button-primary {
  color: #fff;
  background-color: #022a58;

  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}

.dos-button-success {
  color: #fff;
  background-color: #59a137;

  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}

.dos-button-info {
  color: #fff;
  background-color: #595c5c;

  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}

.dos-button-warning {
  color: #fff;
  background-color: #e87d2b;

  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}

.dos-button-danger {
  color: #fff;
  background-color: #ad0808;

  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}

.dos-button.is-plain {
  &:hover,
  &:focus {
    background: #bababe2f;
    color: #03132b;
  }
}

.dos-button-primary.is-plain {
  color: #0d62ba;
  background: #ecf5ff;

  &:hover,
  &:focus {
    background: #042545;
    color: #fff;
  }
}

.dos-button-success.is-plain {
  color: #2a6110;
  background: #c2e7b0;

  &:hover,
  &:focus {
    background: #5db431;
    color: #fff;
  }
}

.dos-button-info.is-plain {
  color: #020710;
  background: #d3d4d6;

  &:hover,
  &:focus {
    background: #636262;
    color: #fff;
  }
}

.dos-button-warning.is-plain {
  color: #ea6733;
  background: #f5dab1;

  &:hover,
  &:focus {
    background: #e6a23c;
    color: #fff;
  }
}

.dos-button-danger.is-plain {
  color: #920a0a;
  background: #fbc4c4;

  &:hover,
  &:focus {
    background: #ac1010;
    color: #fff;
  }
}

// round属性
.dos-button.is-round {
  border-radius: 20px;
  padding: 10px 18px;
}

// circle属性
.dos-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// 图标和文字共存加间隙
.dos-button [class*=one-icon-] + span {
  margin-left: 5px;
}

// disabled属性
.dos-button.is-disabled {
  cursor: no-drop;
}

</style>