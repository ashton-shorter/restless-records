export type Data  = {
    total: number;
    history: DataHistory[];
    addData(month: string): void;
    delData(month: string): void;
}

export type MonthlyData = {
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

export type DataHistory = {
    year: number;
    monthlyData: MonthlyData;
}