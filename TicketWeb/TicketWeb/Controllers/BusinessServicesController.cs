using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TicketWeb;

namespace TicketWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusinessServicesController : ControllerBase
    {
        private readonly bdbContext _context;

        public BusinessServicesController(bdbContext context)
        {
            _context = context;
        }

        // GET: api/BusinessServices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BusinessService>>> GetBusinessServices()
        {
            return await _context.BusinessServices.ToListAsync();
        }

        // GET: api/BusinessServices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BusinessService>> GetBusinessService(long id)
        {
            var businessService = await _context.BusinessServices.FindAsync(id);

            if (businessService == null)
            {
                return NotFound();
            }

            return businessService;
        }

        // PUT: api/BusinessServices/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBusinessService(long id, BusinessService businessService)
        {
            if (id != businessService.IdServiceBusiness)
            {
                return BadRequest();
            }

            _context.Entry(businessService).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BusinessServiceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BusinessServices
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BusinessService>> PostBusinessService(BusinessService businessService)
        {
            _context.BusinessServices.Add(businessService);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBusinessService", new { id = businessService.IdServiceBusiness }, businessService);
        }

        // DELETE: api/BusinessServices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBusinessService(long id)
        {
            var businessService = await _context.BusinessServices.FindAsync(id);
            if (businessService == null)
            {
                return NotFound();
            }

            _context.BusinessServices.Remove(businessService);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BusinessServiceExists(long id)
        {
            return _context.BusinessServices.Any(e => e.IdServiceBusiness == id);
        }
    }
}
