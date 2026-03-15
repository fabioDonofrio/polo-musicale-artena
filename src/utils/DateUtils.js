function formatItalianDate(dateString) {
    const [day, month, year] = dateString.split("/");
    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
}

export default formatItalianDate;

