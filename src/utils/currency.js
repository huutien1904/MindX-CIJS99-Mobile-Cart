export const formatCurrencyFromNumberToVND = (num) => {
  return Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(+num);
};
