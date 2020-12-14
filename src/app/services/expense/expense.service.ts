import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Expense } from '../../shared';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private _expenses: BehaviorSubject<Expense[]>;
  private totalExpenseInBaseCurreny: number;
  private _totalNumberOfExpenses: number;
  private flagForOver1000Expense: boolean;
  constructor() {
    this._expenses = new BehaviorSubject([]);
    this._totalNumberOfExpenses = 0;
    this.totalExpenseInBaseCurreny = 0;
  }

  get expenseFlag(): boolean {
    return this.flagForOver1000Expense;
  }

  get totalNumberOfExpenses(): number {
    return this._totalNumberOfExpenses;
  }

  get totalExpenses(): number {
    return this.totalExpenseInBaseCurreny;
  }

  get expenses(): Observable<Expense[]> {
    return this._expenses.asObservable();
  }

  addNewExpense(expense: Expense) {
    if (
      this.totalExpenseInBaseCurreny +
        (expense.amountInBaseCurrency
          ? expense.amountInBaseCurrency
          : expense.amount) >
      1000
    ) {
      this.flagForOver1000Expense = true;
    } else {
      let newExpenses = [expense, ...this._expenses.value];
      this.flagForOver1000Expense = false;
      this.totalExpenseInBaseCurreny =
        this.totalExpenseInBaseCurreny +
        (expense.amountInBaseCurrency
          ? expense.amountInBaseCurrency
          : expense.amount);
      this._totalNumberOfExpenses++;
      this._expenses.next(newExpenses);
    }
  }
}
