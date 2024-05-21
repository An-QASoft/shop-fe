<template></template>

<script>
import axiosInstance from './axiosConfig';

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
