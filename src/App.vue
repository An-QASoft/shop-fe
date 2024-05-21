<template>
  <div>
    <vxe-table />
  </div>
</template>

<script>
import axiosInstance from './axiosConfig';
import VXETable from 'vxe-table'

export default {
  components: {
    VXETable
  },
}

const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get('/products/index');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

fetchUsers();
</script>
