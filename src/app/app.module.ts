import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { ReportComponent } from './components/report/report.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseReportComponent } from './components/expense-report/expense-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    ExpenseFormComponent,
    ExpenseReportComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
