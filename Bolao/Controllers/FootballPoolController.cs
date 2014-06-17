using System.Net.Http;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace Bolao.Controllers {
    public class FootballPoolController : Controller {
        public ActionResult Index() {
            var content = "";
            using (var client = new HttpClient()) {
                var task = client.GetAsync("http://footballpool.dataaccess.eu/data/info.wso/AllGames/JSON").ContinueWith(t => {
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
