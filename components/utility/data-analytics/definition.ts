export type dataInfo  = {
    total: number;
    history: dataHistory[];
}

export type data = {
    info: dataInfo;
    addData(month: string): void;
    delData(month: string): void;
}

export type monthlyData = {
    jan: number;
    feb: number;
    mar: number;
    apr: number;
    may: number;
    jun: number;
    jul: number;
    aug: number;
    sep: number;
    oct: number;
    nov: number;
    dec: number;
}

export type dataHistory = {
    year: number;
    monthlyData: monthlyData;
}