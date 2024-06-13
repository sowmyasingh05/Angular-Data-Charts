
import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { TicketDataService } from '../ticket-data.service';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';




@Component({
  selector: 'app-tickets-status-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './tickets-status-chart.component.html',
  styleUrl: './tickets-status-chart.component.css'
})
export class TicketsStatusChartComponent {
  pieChartData: any;
  ticketData: any;
  public color = 'pink'
  constructor(private ticketDataService: TicketDataService) { }

  public pieChartLabels: string[] = ['Open Tickets', 'Closed Tickets', 'Pending Tickets'];

  ngOnInit(): void {
    this.ticketDataService.getTickets().subscribe(data => {
      this.ticketData = this.ticketDataService.processTickets(data.requests);
      this.pieChartData = [
        this.ticketData.openTickets,
        this.ticketData.openChangeRequests,
        this.ticketData.unassignedTickets
      ];
      this.renderchart(this.pieChartLabels, this.pieChartData, this.color);
    });



  }
  renderchart(pieChartLabels: any, pieChartData: any[], color: any) {
    const mychar = new Chart('piechart', {
      type: 'pie',
      data: {
        labels: pieChartLabels,
        datasets: [
          {
            data: pieChartData,
            backgroundColor: color
          }
        ]
      },
      options: {

      }

    })
  }


} 