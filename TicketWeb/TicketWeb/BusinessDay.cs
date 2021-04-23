using System;
using System.Collections.Generic;

#nullable disable

namespace TicketWeb
{
    public partial class BusinessDay
    {
        public long IdDayBusiness { get; set; }
        public int IdDay { get; set; }
        public bool Availability { get; set; }
        public int? StartTime { get; set; }
        public int? EndTime { get; set; }
        public long IdBusiness { get; set; }

        public virtual Business IdBusinessNavigation { get; set; }
    }
}
