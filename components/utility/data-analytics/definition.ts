export type data  = {
    total: number;
    history: dataHistory[];
}

export type monthlyData = {
    january: number;
    february: number;
    march: number;
    april: number;
    may: number;
    june: number;
    july: number;
    august: number;
    september: number;
    october: number;
    november: number;
    december: number;
}

export type dataHistory = {
    year: number;
    monthlyData: monthlyData;
}