using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SamuelTrimble.Models;

namespace SamuelTrimble.Controllers {
	public class MainController : Controller {

		#region Views
		[HttpGet]
		[Route("")]
		public ActionResult Index() {
			MainViewModel mVM = new MainViewModel {
				PageClass = "index",
				PageSection = "index"
			};

			return View(mVM);
		}
		#endregion

		#region ErrorViews
		[HttpGet]
		[AllowAnonymous]
		[Route("Error/{code?}")]
		public ActionResult Error(string code) {
			ViewBag.PageClass = "error";
			ViewBag.PageSection = "error";
			ViewBag.ErrorCode = code;

			//if (!string.IsNullOrWhiteSpace(code)) {
			//	Response.StatusCode = int.Parse(code);
			//}

			return View(ViewPath("Error", "Error"));
		}

		[HttpGet]
		[AllowAnonymous]
		[Route("Error")]
		public ActionResult Error(string type, string msg) {
			if (AjaxRequestExtensions.IsAjaxRequest(Request)) {
				//It's no use to try rendering the error page in an ajax request result
				//Just tell the javascript to do a full redirect to this page
				return RedirectJson("/Error?type=" + type + "&msg=" + msg);
			} else {
				ViewBag.PageClass = "error";
				ViewBag.PageSection = "error";
				ViewBag.ErrorCode = type;
				ViewBag.ErrorMessage = msg;

				return View(ViewPath("Error", "Error"));
			}
		}
		#endregion

		#region Helpers
		public string ViewPath(string folder, string viewName) {
			return "~/Views/" + folder + "/" + viewName + ".cshtml";
		}
		#endregion

		#region JsonResults
		public JsonResult SuccessJson() {
			return Json(new {
				success = "true"
			}, JsonRequestBehavior.AllowGet);
		}
		public JsonResult RedirectJson(string newPath) {
			return Json(new {
				error = "redirect",
				redirectUrl = newPath
			}, JsonRequestBehavior.AllowGet);
		}
		public JsonResult ErrorJson(string err, string msg) {
			return Json(new {
				error = err,
				errorMessage = msg
			}, JsonRequestBehavior.AllowGet);
		}
		#endregion
	}
}