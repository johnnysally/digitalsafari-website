export const formatDate = (iso?: string) => {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString();
};
