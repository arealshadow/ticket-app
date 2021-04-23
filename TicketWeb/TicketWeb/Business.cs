using System;
using System.Collections.Generic;

#nullable disable

namespace TicketWeb
{
    public partial class Business
    {
        public Business()
        {
            BusinessDays = new HashSet<BusinessDay>();
            BusinessServices = new HashSet<BusinessService>();
        }

        public long Idb { get; set; }
        public string NameBusiness { get; set; }
        public string Timezone { get; set; }

        public virtual ICollection<BusinessDay> BusinessDays { get; set; }
        public virtual ICollection<BusinessService> BusinessServices { get; set; }
    }
}
