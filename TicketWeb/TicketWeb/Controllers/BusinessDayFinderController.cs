using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TicketWeb.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BusinessDayFinderController : ControllerBase
    {
        private readonly bdbContext _context;

        public BusinessDayFinderController(bdbContext context)
        {
            _context = context;
        }
        [HttpGet("{IdBusiness}")]
        public BusinessDay [] GetDayForBusiness(long IdBusiness)
        {
            return _context.BusinessDays.Where(it => it.IdBusiness == IdBusiness).ToArray();
        }
        
    }
}
