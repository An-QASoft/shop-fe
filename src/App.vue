<template>
  <div>
    <vxe-table :data="tableData">
      <vxe-column type="seq" title="Seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-colgroup title="Group1">
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="address" title="Address"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script setup>
import axiosInstance from "./axiosConfig";
import { ref, watch, onMounted } from "vue";

const data = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get("/products/index");
    data.value = response.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

fetchUsers();

const tableData = ref([
  { id: 10001, name: "Test1", role: "Develop", sex: "Man", address: "Shenzhen"},
  { id: 10002, name: "Test2", role: "Test", sex: "Man", address: "Guangzhou"},
  { id: 10003, name: "Test3", role: "PM", sex: "Man", address: "Shanghai"},
]);
</script>
