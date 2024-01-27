function handleConvertToGoodDateFormat(date: any) {
  const backendDate: Date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return backendDate.toLocaleString("en-US", options);
}

export default handleConvertToGoodDateFormat;
