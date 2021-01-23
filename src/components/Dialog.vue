<template>
  <transition name="dialog-fade"  >
    <div class="dos-dialog_wrapper" v-show="visible" >
      <div class="dos-dialog" :style="{'width':width, 'top':top}">
        <div class="dos-dialog_header">
          <slot name="title">
            <span class="dos-dialog_title">
              {{title}}
          </span>
          </slot>
          <button class="dos-dialog_headerbtn" @click="close">
            <i class="dos-icon-close"></i>
          </button>
        </div>
        <div class="dos-dialog_body">
          <slot></slot>
        </div>
        <div class="dos-dialog_footer">
          <slot name="footer" >
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "dos-dialog",
  props:{
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    close(){
      this.$emit('update:visible',false);
    }
  }
}
</script>

<style lang="scss" scoped>
.dos-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 99;
  background-color: rgba(0,0,0,0.5);
  .dos-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 8px 10px;
      background: #171f18;
      line-height: 20px;
      font-size: 18px;
      font-weight: bolder;
      color: #dce1ec;
      .dos-dialog_title{
        line-height: 20px;
        font-size: 18px;
        font-weight: bolder;
        color: #dce1ec;
      }
      .dos-dialog_headerbtn{
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 8px;
        border-top: 0px;
        border-left: 0.5px #444343 solid;
        background: #171f19;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .dos-icon-close{
          color: #f3f4f6
        }
        &:hover{
          background: #31362c;
        }
      }
    }
    &_body{
      padding: 10px 10px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 10px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .dos-button:first-child{
        margin-right: 10px;
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>