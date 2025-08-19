<template>
  <div class="collapse-item">
    <button @click="isExpanded = !isExpanded">
      {{ title }} - {{ isExpanded ? '▲' : '▼' }}
    </button>
    <div v-if="isExpanded" class="content">
      这是 {{ title }} 的详细内容（子组件内部状态：{{ isExpanded }}）
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      isExpanded: false // 子组件自己的状态
    };
  }
};
</script>

<style scoped>
.collapse-item {
  margin: 10px;
  padding: 10px;
  border: 1px solid #eee;
}
button {
  cursor: pointer;
}
.content {
  margin-top: 10px;
  padding: 10px;
  background: #f5f5f5;
}
</style>