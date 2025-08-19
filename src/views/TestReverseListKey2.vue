<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <input :placeholder="item.text"> <!-- 临时 DOM 状态（输入值） -->
    </div>
    <button @click="reverseItems">反转列表</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'A' },
        { id: 2, text: 'B' }
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