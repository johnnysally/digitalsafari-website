export const formatCurrency = (amount: number, currency = 'KES') => {
    return new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency,
    }).format(amount);
};