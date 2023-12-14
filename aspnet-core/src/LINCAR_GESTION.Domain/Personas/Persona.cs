/* using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace LINCAR_GESTION.Personas
{
    public abstract class Persona : AuditedAggregateRoot<Guid> // creo que deberíamos eliminar esta clase porque empleado y cliente tienen comportamientos distintos
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string NumeroTelefono { get; set; }
        public int DNI { get; set; }
        public DateTime FechaHoraAlta { get; set; }
        public DateTime FechaHoraModificado { get; set; }
    }
}*/
