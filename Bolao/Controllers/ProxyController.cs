using System.Net.Http;
using System.Web.Mvc;
using Newtonsoft.Json;

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

        private ActionResult GetContent(string url) {
            var content = "";
            using (var client = new HttpClient()) {
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
