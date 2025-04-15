package com.company.uniqueProject.Security;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import eu.bitwalker.useragentutils.UserAgent;
import eu.bitwalker.useragentutils.Version;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class HttpRequestInterceptor implements HandlerInterceptor {

	private static final String EXPECTED_HOST = "localhost:9090";

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		String hostHeader = request.getHeader("Host");

		if (hostHeader == null || !hostHeader.equalsIgnoreCase(EXPECTED_HOST)) {
			log.info("invalidHost: {}",hostHeader);
			response.sendError(HttpServletResponse.SC_FORBIDDEN, "Invalid Host Header");
			return false;
		}
//		log.info("validHost: {}",hostHeader);


//		log.info("requestURL: {}", request.getRequestURL());
        
        
		String userAgent = request.getHeader("User-Agent");

		if (userAgent != null) {
			if (userAgent.contains("PostmanRuntime") || userAgent.contains("Postman")) {
				log.info("Request is coming from Postman");
			} else {
				log.info("Request is coming from a browser or another client");
				UserAgent ua = UserAgent.parseUserAgentString(userAgent);
				Version browserVersion = ua.getBrowserVersion();
				String browserName = ua.getBrowser().toString();
				int majVersion = Integer.parseInt(browserVersion.getMajorVersion());
				log.info("browserName: {}, majVersion: {}", browserName, majVersion);
				
				// commented here as this can be done via WebMVCConfig where we add registry ca
				// be excluded the patterns check WebMVCConfig class
//        		// Exclude the static page from the intercepter
//        		if (request.getRequestURI().contains("/unsupported-browser.html")) {
//        			log.info("Skipping interceptor for unsupported-browser.html");
//        			return true; // Allow access to the static page
//        		}

				// check for the unsupported browser and
				if (majVersion < 130) {
					log.error("Unsupported Browser Detected with browser name: {}, and  version: {}", browserName,
							majVersion);
					response.sendRedirect(request.getContextPath() + "/unsupported-browser.html");
					return false;
				}
			}
		}

		return true;

	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
//		log.info(" response body: {} ", response.toString());

	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
			Exception exception) throws Exception {
		log.info("requestUrl: {}, responseCode: {} ", request.getRequestURL(), response.getStatus());

	}
	



}
