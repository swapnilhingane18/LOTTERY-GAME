export default function Ticket({ ticket }) {
  // DEBUG (this is OK here)
  console.log("Ticket prop:", ticket);

  // SAFETY CHECK
  if (!Array.isArray(ticket)) {
    return null;
  }

  return (
    <div className="ticket-card">
      <p className="ticket-label">Ticket</p>
      <div className="ticket-number">
        {ticket.join("")}
      </div>
    </div>
  );
}
