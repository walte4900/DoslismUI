<template>
  <div class="home">
    <h1>按钮</h1>
    <h3>样式展示</h3>
    <ul>
      <li>
        原始按钮：
        <dos-button>默认</dos-button>
        <dos-button type="primary">主要</dos-button>
        <dos-button type="info">信息</dos-button>
        <dos-button type="danger">危险</dos-button>
        <dos-button type="warning">警告</dos-button>
        <dos-button type="success">成功</dos-button>
      </li>
      <li>
        浅色按钮：
        <dos-button plain>默认</dos-button>
        <dos-button type="primary" plain>主要</dos-button>
        <dos-button type="info" plain>信息</dos-button>
        <dos-button type="danger" plain>危险</dos-button>
        <dos-button type="warning" plain>警告</dos-button>
        <dos-button type="success" plain>成功</dos-button>
      </li>
      <li>
        圆角按钮：
        <dos-button round>默认</dos-button>
        <dos-button type="primary" round>主要</dos-button>
        <dos-button type="info" round>信息</dos-button>
        <dos-button type="danger" round>危险</dos-button>
        <dos-button type="warning" round>警告</dos-button>
        <dos-button type="success" round>成功</dos-button>
      </li>
      <li>
        圆形按钮：
        <dos-button circle icon="dos-icon-apple"></dos-button>
        <dos-button type="primary" circle icon="dos-icon-apple"></dos-button>
        <dos-button type="info" circle icon="dos-icon-apple"></dos-button>
        <dos-button type="danger" circle icon="dos-icon-apple"></dos-button>
        <dos-button type="warning" circle icon="dos-icon-apple"></dos-button>
        <dos-button type="success" circle icon="dos-icon-apple"></dos-button>
      </li>
    </ul>
    <div id="document">
      <h2>使用说明</h2>
      <h3>原始按钮的样式</h3>
      <p>
        可以通过type属性来更改按钮的颜色，其中primary为蓝色，info为灰色，danger为红色，warning为橙色，success为绿色。
      </p>
      <pre>
        <textarea name="" id="" cols="70" rows="7" disabled>
        <dos-button>默认</dos-button>
        <dos-button type='primary'>主要</dos-button>
        <dos-button type='info'>信息</dos-button>
        <dos-button type='danger'>危险</dos-button>
        <dos-button type='warning'>警告</dos-button>
        <dos-button type='success'>成功</dos-button>
      </textarea>
      </pre>
      <h3>浅色按钮的样式</h3>
      <p>按钮上加上plain属性即可，不需要赋值。</p>
      <pre>
        <textarea name="" id="" cols="70" rows="7" disabled>
        <dos-button plain>默认</dos-button>
        <dos-button type='primary' plain>主要</dos-button>
        <dos-button type='info' plain>信息</dos-button>
        <dos-button type='danger' plain>危险</dos-button>
        <dos-button type='warning' plain>警告</dos-button>
        <dos-button type='success' plain>成功</dos-button>
      </textarea>
      </pre>
      <h3>圆角按钮的样式</h3>
      <p>按钮上加上round属性即可，不需要赋值。</p>
      <pre>
        <textarea name="" id="" cols="70" rows="7" disabled>
        <dos-button round>默认</dos-button>
        <dos-button type='primary' round>主要</dos-button>
        <dos-button type='info' round>信息</dos-button>
        <dos-button type='danger' round>危险</dos-button>
        <dos-button type='warning' round>警告</dos-button>
        <dos-button type='success' round>成功</dos-button>
      </textarea>
      </pre>
      <h3>圆形按钮的样式</h3>
      <p>
        按钮上加上circle属性即可，不需要赋值；icon里面可以选择文字后面加什么图案。
      </p>
      <pre>
        <textarea name="" id="" cols="80" rows="7" disabled >
        <dos-button circle icon="dos-icon-apple"></dos-button>
        <dos-button type='primary' circle icon="dos-icon-apple"></dos-button>
        <dos-button type='info' circle icon="dos-icon-apple"></dos-button>
        <dos-button type='danger' circle icon="dos-icon-apple"></dos-button>
        <dos-button type='warning' circle icon="dos-icon-apple"></dos-button>
        <dos-button type='success' circle icon="dos-icon-apple"></dos-button>
      </textarea>
      </pre>
    </div>
    <hr />
    <div class="dialog">
      <h1>对话框</h1>
      <h3>样式展示</h3>
      <div>
        <dos-button type="primary" @click="visible = true"
          >显示对话框</dos-button
        >
        <dos-dialog :visible.sync="visible" top="50px" width="400px">
          <template v-slot:title>
            <div>
              标题
            </div>
          </template>
          <template>
            <div>
              这个是内容，提示信息。
            </div>
          </template>
          <template v-slot:footer>
            <dos-button type="primary" @click="visible = false"
              >确定</dos-button
            >
            <dos-button type="danger" @click="visible = false">取消</dos-button>
          </template>
        </dos-dialog>
      </div>
      <div id="document">
        <h3>使用说明</h3>
        <p>
          引入插槽组件的时候，需要给该组件设置：visible属性，这个组件是否为true决定组件的v-show属性。<br />
          默认插槽：对话框内容<br />
          v-slot:footer -- 对话框的底部区域，一般放按钮<br />
          v:slot:header -- 对话框的标题<br />
          width, top 传入宽度和距顶部的距离
        </p>
        <pre>
        <textarea name="" id="" cols="90" rows="20" disabled>
        <dos-button type='primary' @click="visible=true">对话框</dos-button>
      <dos-dialog :visible.sync="visible" top="50px" width="400px">
        <template v-slot:title >
          <div>
            标题
          </div>
        </template>
        <!-- 默认插槽是弹窗内容，不需要指定v-slot属性 -->
        <template>
          <div>
            这个是内容，提示信息。
          </div>
        </template>
        <template v-slot:footer>
            <dos-button type='primary' @click="visible=false">确定</dos-button>
            <dos-button type='danger' @click="visible=false">取消</dos-button>
        </template>
      </dos-dialog>
      </textarea>
      </pre>
      </div>
    </div>
    
  </div>

  
</template>

<script>
export default {
  name: "Home",
  components: {},
  data(){
    return {
      visible: false
    }
  }
};
</script>

<style lang="scss" scoped>
#document{
  margin: 15px auto;
}
textarea {
  border: none;
  resize: none;
}
#home {
  width: 600px;
  margin: 0 auto;
}
ul li {
  margin: 10px;
  list-style: none;
}
</style>
