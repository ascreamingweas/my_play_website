package controllers;

import play.Routes;
import play.mvc.Result;

import org.springframework.stereotype.Controller;

/**
 * Created by jlivingston on 3/4/17.
 */
@Controller
public class JSRoutes extends play.mvc.Controller {
    // Javascript routing
    public Result javascriptRoutes() {
        response().setContentType("text/javascript");
        return ok(Routes.javascriptRouter("jsRoutes"));
    }
}
