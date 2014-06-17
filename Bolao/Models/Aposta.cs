using System.Collections.Generic;

namespace Bolao.Models {
    public class Aposta {
        public string Nome { get; set; }
        public IEnumerable<int[]> Placares { get; set; }
    }
}