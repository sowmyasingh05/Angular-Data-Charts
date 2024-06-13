import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SupportTableComponent } from './support-table/support-table.component';
import { TicketsStatusChartComponent } from './tickets-status-chart/tickets-status-chart.component';
import { DataCardsComponent } from './data-cards/data-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SupportTableComponent,TicketsStatusChartComponent,DataCardsComponent,HttpClientModule,NgChartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
