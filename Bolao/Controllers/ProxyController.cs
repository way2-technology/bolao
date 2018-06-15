using System.Net.Http;
using System.Web.Mvc;

namespace Bolao.Controllers {
    public class ProxyController : Controller {
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "None")]
        public ActionResult FootballPool() {
            return GetContent("http://footballpool.dataaccess.eu/data/info.wso/AllGames/JSON");
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "None")]
        public ActionResult WorldCupSfgIo() {
            return GetContent("http://worldcup.sfg.io/matches");
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "None")]
        public ActionResult FootballData() {
            return GetContent("http://api.football-data.org/v1/competitions/467/fixtures");
        }

        private ActionResult GetContent(string url) {
            var content = string.Empty;
            using (var client = new HttpClient()) {
                client.DefaultRequestHeaders.Add("X-Auth-Token", "de7417d29cd743edab13131a80a55938");
                var task = client.GetAsync(url).ContinueWith(t => {
                    var s = t.Result.Content.ReadAsStringAsync().ContinueWith(r => {
                        content = r.Result;
                    });
                    s.Wait();
                });
                task.Wait();
            }
            return new ContentResult {
                Content = content,
                ContentType = "application/json"
            };
        }
    }
}
