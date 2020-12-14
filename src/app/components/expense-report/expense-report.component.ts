import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../../shared';

import { ExpensesService, ReportService } from '../../services';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.scss'],
})
export class ExpenseReportComponent implements OnInit {
  expenses: Observable<Expense[]>;
  baseCurrency: string = env.exchange.base;
  constructor(
    private expenseService: ExpensesService,
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.expenses = this.expenseService.expenses;
  }

  get totalExpenses(): number {
    return this.expenseService.totalExpenses;
  }

  submitExpenses() {
    this.reportService.submitReport();
  }
}
