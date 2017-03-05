package controllers;

import play.mvc.Controller;
import play.mvc.Result;

import views.html.home.home;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by jlivingston on 3/4/17.
 */
@org.springframework.stereotype.Controller
public class Home extends Controller {
    private static final Logger log = LoggerFactory.getLogger(Home.class);

    public Result get() {
        log.info("Went Home.");
        return ok(home.render());
    }
}
