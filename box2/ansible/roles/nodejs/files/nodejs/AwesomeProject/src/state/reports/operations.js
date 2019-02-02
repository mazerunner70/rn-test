import moment from 'moment';


function mergeChunkToReports(reports, chunk) {
    console.log('2215');
    //Ensure no duplicates
    reportsClone = new Map(reports);
    chunk.forEach(report => {
        reportsClone.set(report[0], report);
    });
    console.log('2214', reportsClone.size);
    return reportsClone;
}

function summaryByDay(reports) {
    const dailySummary = new Map();
    for ([key, value] of reports) {
        const dateString = moment(value[1]).format('YYYYMMDD');
        const summary = dailySummary.get(dateString) || {kwCount: 0, kwSum: 0, acCount: 0, acSum: 0};
        summary.kwSum += parseFloat(value[3]);
        summary.kwCount += 1;
        jsonStr = JSON.parse(value[2].replace(/'/g, '"'));
        if (dateString == '20181025') {
            console.log('1222',value, '---',value[2].replace(/'/g, '"'))
            console.log('12221', jsonStr);
            console.log('1223',jsonStr.Positive);
            console.log('122345',jsonStr.Negative);
        }
        summary.acSum += parseFloat(jsonStr.Positive)-parseFloat(jsonStr.Negative)
        summary.acCount += 1
        dailySummary.set(dateString, summary);
    }
    console.log('890', dailySummary);
    return dailySummary;
}

export { 
    mergeChunkToReports,
    summaryByDay,
}