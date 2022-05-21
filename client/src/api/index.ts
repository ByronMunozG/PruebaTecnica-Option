import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACK_URL;
axios.defaults.baseURL = baseUrl;

export const fetchMonthlyIncome = async () => {
  const res = await axios.get('/monthly_income');
  return res.data;
};

export const fetchMonthlyServices = async () => {
  const res = await axios.get('/monthly_services');
  return res.data;
};

export const fetchExpensiveServices = async () => {
  const res = await axios.get('/expensive_services');
  return res.data;
};
