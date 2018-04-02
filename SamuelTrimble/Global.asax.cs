using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace SamuelTrimble {
	public class MvcApplication : HttpApplication {
		protected void Application_Start() {
			//General
			AreaRegistration.RegisterAllAreas();

			//MVC
			MVCConfig.RegisterGlobalFilters(GlobalFilters.Filters);
			MVCConfig.RegisterRoutes(RouteTable.Routes);
			MVCConfig.RegisterBundles(BundleTable.Bundles);
		}
	}
}
