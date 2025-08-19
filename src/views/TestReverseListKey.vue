<template>
  <div>
    <h2>问题演示（列表反转时子组件状态错乱）</h2>
    <button @click="reverseItems">反转列表顺序</button>
    <div v-for="item in items">
      <!-- 注意：这里故意没有加 :key -->
      <CollapseItem :title="item.text" />
    </div>
  </div>
</template>

<script>
import CollapseItem from './CollapseItem.vue';

export default {
  components: { CollapseItem },
  data() {
    return {
      items: [
        { id: 1, text: '第1项' },
        { id: 2, text: '第2项' },
        { id: 3, text: '第3项' }
      ]
    };
  },
  methods: {
    reverseItems() {
      this.items.reverse(); // 反转数组
    }
  }
};
</script>