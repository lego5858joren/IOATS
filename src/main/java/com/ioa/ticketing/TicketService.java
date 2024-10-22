package com.ioa.ticketing;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    public Ticket purchaseTicket(Ticket ticket) {
        // Save the ticket to the database using TicketRepository
        return ticketRepository.save(ticket);
    }

    public Ticket getTicketById(Long id) {
        // Retrieve a ticket by ID
        return ticketRepository.findById(id).orElseThrow(() -> new TicketNotFoundException("Ticket not found"));
    }

    public List<Ticket> getAllTickets() {
        // Get all tickets
        return ticketRepository.findAll();
    }

    public void deleteTicket(Long id) {
        // Delete a ticket by ID
        ticketRepository.deleteById(id);
    }
}

class TicketNotFoundException extends RuntimeException {
    public TicketNotFoundException(String message) {
        super(message);
    }
}
