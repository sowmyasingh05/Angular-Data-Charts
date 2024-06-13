import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketDataService {
  private dataUrl = 'assets/data.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  getTickets(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  // Method to process data and calculate stats
  processTickets(tickets: any[]): any {
    const stats = {
      openTickets: 0,
      unassignedTickets: 0,
      highPriorityOpenTickets: 0,
      openChangeRequests: 0,
      ticketsByRep: {},
      ticketsByTeam: {}
    };

    tickets.forEach(ticket => {
      if (ticket.status === 'Open') {
        stats.openTickets++;

        if (ticket.supportRep === null) {
          stats.unassignedTickets++;
        }

        if (ticket.priority === 'High') {
          stats.highPriorityOpenTickets++;
        }

        if (ticket.type === 'Change Request') {
          stats.openChangeRequests++;
        }
      }

    });

    return stats;
  }


}
