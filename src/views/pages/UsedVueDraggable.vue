<template>
  <div class="used-vue-draggable">
    <div style="font-size:20px;">
      <br />
      <br />
      <p>
        Vue.Draggable：基于 Sortable.js 的 Vue 拖拽组件
      </p>
      <br />
      <br />
      <p>
        访问地址：<a href="https://github.com/SortableJS/Vue.Draggable"
          >Vue.Draggable</a
        >
      </p>
    </div>
    <br />
    <h2>{{ msg }}</h2>
    <br />
    <div class="drag-box">
      <draggable v-model="myArray" @change="handleChange">
        <transition-group tag="div" id="myArray" class="item-ul">
          <div v-for="item in myArray" class="drag-item" :key="item.id">
            {{ item.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
export default {
  components: {
    draggable
  },
  data() {
    return {
      myArray: [
        {
          name: '张三',
          id: 'zhangsan'
        },
        {
          name: '李四',
          id: 'lisi'
        },
        {
          name: '王五',
          id: 'wangwu'
        }
      ],
      msg: ''
    };
  },
  methods: {
    handleChange(event) {
      console.log('event:', event);
      this.msg = `从 ${event.moved.oldIndex} 移动到 ${event.moved.newIndex} `;
      console.log(`从 ${event.moved.oldIndex} 移动到 ${event.moved.newIndex} `);
    }
  }
};
</script>
<style>
.drag-box {
  background-color: #eff1f5;
  margin-right: 16px;
  border-radius: 6px;
  width: 400px;
  border: 1px #e1e4e8 solid;
}
.item-ul {
  padding: 0 8px 8px;
  height: 300px;
  overflow-y: scroll;
}
.item-ul::-webkit-scrollbar {
  width: 0;
}
.drag-item {
  border: 1px #e1e4e8 solid;
  padding: 10px;
  margin: 5px 0 10px;
  list-style: none;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  -webkit-transition: border 0.3s ease-in;
  transition: border 0.3s ease-in;
}
</style>
