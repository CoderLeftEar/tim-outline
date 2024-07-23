<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :max-height="250"
    :scroll-x="1800"
    :render-cell="renderCell"
    virtual-scroll
  />
</template>

<script setup>
import { h } from "vue";
import { NDataTable } from "naive-ui";

const renderCell = (value, rowData, column) => {
  const onMouseover = () => {
    console.log("onmouseover", value, rowData, column);
  }

  const onMouseleave = () => {
    console.log("onmouseleave", value, rowData, column);
  }

  return h(
    "span",
    {
      onMouseover,
      onMouseleave,
      class: "custom-cell"
    },
    value
  )
}

const columns = [
  {
    type: "selection",
    fixed: "left"
  },
  {
    title: "Name",
    key: "name",
    width: 200,
    fixed: "left"
  },
  {
    title: "Age",
    key: "age",
    width: 100,
    fixed: "left"
  },
  {
    title: "Row",
    key: "row",
    render(row, index) {
      return h("span", ["row ", index]);
    }
  },
  {
    title: "Row1",
    key: "row1",
    render(row, index) {
      return h("span", ["row ", index]);
    }
  },
  {
    title: "Row2",
    key: "row2",
    render(row, index) {
      return h("span", ["row ", index]);
    },
    width: 100,
    fixed: "right"
  },
  {
    title: "Address",
    key: "address",
    width: 200,
    fixed: "right"
  }
];

const data = Array.from({ length: 5e3 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}));

const key = 'address'
</script>
