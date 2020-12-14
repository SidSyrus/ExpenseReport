export interface Expense {
  description: string;
  currency: string;
  amount: number;
  amountInBaseCurrency?: number;
}
