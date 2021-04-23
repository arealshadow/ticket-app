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
    public class BusinessDaysController : ControllerBase
    {
        private readonly bdbContext _context;

        public BusinessDaysController(bdbContext context)
        {
            _context = context;
        }

        // GET: api/BusinessDays
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BusinessDay>>> GetBusinessDays()
        {
            return await _context.BusinessDays.ToListAsync();
        }

        // GET: api/BusinessDays/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BusinessDay>> GetBusinessDay(long id)
        {
            var businessDay = await _context.BusinessDays.FindAsync(id);

            if (businessDay == null)
            {
                return NotFound();
            }

            return businessDay;
        }

        // PUT: api/BusinessDays/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBusinessDay(long id, BusinessDay businessDay)
        {
            if (id != businessDay.IdDayBusiness)
            {
                return BadRequest();
            }

            _context.Entry(businessDay).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BusinessDayExists(id))
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

        // POST: api/BusinessDays
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BusinessDay>> PostBusinessDay(BusinessDay businessDay)
        {
            _context.BusinessDays.Add(businessDay);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBusinessDay", new { id = businessDay.IdDayBusiness }, businessDay);
        }

        // DELETE: api/BusinessDays/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBusinessDay(long id)
        {
            var businessDay = await _context.BusinessDays.FindAsync(id);
            if (businessDay == null)
            {
                return NotFound();
            }

            _context.BusinessDays.Remove(businessDay);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BusinessDayExists(long id)
        {
            return _context.BusinessDays.Any(e => e.IdDayBusiness == id);
        }
    }
}
