import axios from 'axios';

export const fetchMonthlyIncome = async () => {
  const res = await axios.get('/api/monthly_income');
  return res.data;
};

export const fetchMonthlyServices = async () => {
  const res = await axios.get('/api/monthly_services');
  return res.data;
};

export const fetchExpensiveServices = async () => {
  const res = await axios.get('/api/expensive_services');
  return res.data;
};
