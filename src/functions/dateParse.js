export default function dateParse(code) {
    var date = new Date(code);
    var day = date.getDate().toString();
    var month = (date.getMonth() + 1).toString();
    var year = date.getFullYear().toString();
    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();
    return (day + '/' + month + '/' + year + ',' + hours + ':' + minutes)
}