import { Component } from '@angular/core';
import { TicketDataService } from '../ticket-data.service';

@Component({
  selector: 'app-data-cards',
  standalone: true,
  imports: [],
  templateUrl: './data-cards.component.html',
  styleUrl: './data-cards.component.css'
})
export class DataCardsComponent {
  stats: any;

  constructor(private ticketDataService: TicketDataService) {}

  ngOnInit(): void {
    this.ticketDataService.getTickets().subscribe(data => {
      this.stats = this.ticketDataService.processTickets(data.requests);
    });
  }
}
