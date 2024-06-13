
import { TicketDataService } from '../ticket-data.service';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform, Component } from '@angular/core';
import { OrderbyPipe } from '../orderby.pipe';



@Component({
  selector: 'app-support-table',
  standalone: true,
  imports: [CommonModule, OrderbyPipe],
  templateUrl: './support-table.component.html',
  styleUrl: './support-table.component.css'
})
export class SupportTableComponent {
  public supportRepData: any;
  ticketData: any;
  constructor(private ticketDataService: TicketDataService) { }
  openTicketsCountByRep: { [key: string]: number } = {};
  ngOnInit(): void {
    this.ticketDataService.getTickets().subscribe(data => {
      this.supportRepData = data.requests;
      this.ticketData = this.ticketDataService.processTickets(data.requests);
      this.mapOpenTicketsByRep()
      // this.supportRepData = [
      //   { field: 'ticketsByRep', value: this.ticketData.ticketsByRep },
      //   { field: 'openTickets', value: this.ticketData.openTickets }
      // ];
    });

  }
  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key,
      this.reverse = !this.reverse
  }
  mapOpenTicketsByRep() {
    this.supportRepData.forEach((ticket: any) => {
      if (ticket.status === 'Open' && ticket.supportRep) {
        if (this.openTicketsCountByRep[ticket.supportRep]) {
          this.openTicketsCountByRep[ticket.supportRep]++;
        } else {
          this.openTicketsCountByRep[ticket.supportRep] = 1;
        }
      }
    });
  }

  getSupportReps(): string[] {
    return Object.keys(this.openTicketsCountByRep);
  }
}
