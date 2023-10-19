export function calculateAgeToNow(date) {
  const startDate = new Date(date);
  const endDate = new Date();
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} р. ${months} міс.`;
}
