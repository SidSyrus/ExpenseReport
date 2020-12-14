import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ExchangeService } from '../../services';

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
  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.currencies = this.exchangeService.getCurrencies();
  }
}
