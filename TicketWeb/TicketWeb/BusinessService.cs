using System;
using System.Collections.Generic;

#nullable disable

namespace TicketWeb
{
    public partial class BusinessService
    {
        public long IdServiceBusiness { get; set; }
        public string ServiceName { get; set; }
        public int? ServiceDuration { get; set; }
        public long? IdBusiness { get; set; }

        public virtual Business IdBusinessNavigation { get; set; }
    }
}
