import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ExchangeService, ExpensesService } from '../../services';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
})
export class ExpenseFormComponent implements OnInit {
  currencies: Observable<string[]>;
  expenseDescription: string;
  expenseCurrency: string = 'CAD';
  expenseAmount: number;
  constructor(
    private exchangeService: ExchangeService,
    private expenseService: ExpensesService
  ) {}

  get flagForOverExpense(): boolean {
    return this.expenseService.expenseFlag;
  }

  get isAllowedToAddExpense(): boolean {
    return (
      this.expenseService.totalNumberOfExpenses < 5 &&
      this.expenseService.totalExpenses < 1000
    );
  }

  ngOnInit(): void {
    this.currencies = this.exchangeService.getCurrencies();
  }

  addExpense() {
    if (this.expenseCurrency !== env.exchange.base) {
      this.exchangeService
        .getExchangeValue(this.expenseAmount, this.expenseCurrency)
        .subscribe((expenseInBaseCurrencyValue) => {
          this.expenseService.addNewExpense({
            description: this.expenseDescription,
            amount: this.expenseAmount,
            currency: this.expenseCurrency,
            amountInBaseCurrency: expenseInBaseCurrencyValue,
          });
        });
    } else {
      this.expenseService.addNewExpense({
        description: this.expenseDescription,
        amount: this.expenseAmount,
        currency: this.expenseCurrency,
      });
    }
  }
}
