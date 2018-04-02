using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace SamuelTrimble {
	public class MVCConfig {
		public static void RegisterGlobalFilters(GlobalFilterCollection filters) {
			filters.Add(new HandleErrorAttribute());
			filters.Add(new RequireHttpsAttribute());
		}

		public static void RegisterRoutes(RouteCollection routes) {
			routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

			routes.MapMvcAttributeRoutes();
		}

		public const string bundledScripts = "~/scriptBundle";
		public const string bundledStyles = "~/styleBundle";

		public static void RegisterBundles(BundleCollection bundles) {
			bundles.Add(new ScriptBundle(bundledScripts).Include(
				"~/Scripts/st.main.js"
			));
			bundles.Add(new StyleBundle(bundledStyles).Include(
				"~/Styles/Compiled/st.main.css",
				"~/Styles/Compiled/st.index.css"
			));

			//Force bundling except for debug builds
#if DEBUG
			BundleTable.EnableOptimizations = false;
#else
			BundleTable.EnableOptimizations = true;
#endif
		}
	}
}
