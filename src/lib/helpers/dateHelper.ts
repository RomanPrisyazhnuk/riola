export const getFormatedDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "июн",
    "июл",
    "авг",
    "сент",
    "окт",
    "нояб",
    "дек",
  ];
  const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} г.`;
  return formattedDate;
};
