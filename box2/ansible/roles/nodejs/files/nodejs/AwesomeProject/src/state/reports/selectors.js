


function getReportsCount(state) {
    return state.reports.details.reportMap.size;
}

function getDailyKeyWordSummaries(state) {
    return state.reports.details.dailyKeyWordSummary;
}

function deriveKeyWordSummaryValues(state) {
    summaries = [];
    for (const value of getDailyKeyWordSummaries(state).values()) {
        summaries.push(value.kwSum/value.kwCount);
    }
    return summaries;
}

function deriveComprehendSummaryValues(state) {
    summaries = [];
    for (const value of getDailyKeyWordSummaries(state).values()) {
        summaries.push(value.acSum/value.acCount);
    }
    return summaries;
}

export {
    getReportsCount,
    getDailyKeyWordSummaries,
    deriveKeyWordSummaryValues,
    deriveComprehendSummaryValues,
}