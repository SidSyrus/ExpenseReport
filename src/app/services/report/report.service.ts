import { Injectable } from '@angular/core';
import { ExpensesService } from '../expense/expense.service';
import { Expense } from '../../shared';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private expenseService: ExpensesService) {}

  submitReport() {
    this.expenseService.expenses.subscribe((expenses: Expense[]) => {
      console.log(expenses);
    });
  }
}
