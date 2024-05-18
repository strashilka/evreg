const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function formatDate(date: Date) {
  function getMonthName(date: Date) {
    return months[date.getMonth()];
  }

  return date.getDate() + ' ' + getMonthName(date) + ' ' + date.getFullYear();
}
