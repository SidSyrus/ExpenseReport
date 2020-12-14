export interface Expense {
  label: string;
  currency: string;
  value: number;
  valueInBaseCurrency?: number;
}
