//package com.company.uniqueProject.Security;
//
//import java.io.IOException;
//import java.time.Duration;
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.List;
//import java.util.Map;
//import java.util.Objects;
//import java.util.stream.Collectors;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.Cookie;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.apache.commons.lang3.StringUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cache.Cache;
//import org.springframework.cache.CacheManager;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//
//
//import lombok.NonNull;
//import lombok.extern.slf4j.Slf4j;
//
//@Component
//@Slf4j
//public class CrossOriginFilter extends OncePerRequestFilter {
//
//	private ObjectMapper mapper;
//	private String honeyPotVarName = "robocheck";
//	private CacheManager cacheManager;
//	private Map<String, List<LocalDateTime>> requestStoreMap;
//	private Map<String, LocalDateTime> blackListedMap;
//
//	@Autowired
//	public CrossOriginFilter(@NonNull final ObjectMapper mapper, @NonNull final CacheManager cacheManager,
//			@NonNull final Map<String, List<LocalDateTime>> requestStoreMap,
//			@NonNull final Map<String, LocalDateTime> blackListedMap
//			) {
//		super();
//		this.mapper = mapper;
//		this.cacheManager = cacheManager;
//		this.requestStoreMap = requestStoreMap;
//		this.blackListedMap = blackListedMap;
//	}
//
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//			throws ServletException, IOException {
//		// response.setHeader("Access-Control-Allow-Origin","*");
//		response.setHeader("Access-Control-Allow-Origin",
//				" https://www.perfios.com , https://demo.perfios.com , https://dmsapi-uat.hsbc.co.in, https://epilibpsuat.in.hsbc");
//		// response.setHeader("Access-Control-Allow-Origin","https://demo.perfios.com");
//		response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTIONS");
//		response.setHeader("Access-Control-Max-Age", "3600");
//		response.setHeader("Access-Control-Allow-Headers",
//				"X-PINGOTHER,Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization, Content-Security-Policy");
//		// we can add multiple values to a particular header using the addHeader
//		// method, whereas an initial value would be overwritten if you use the
//		// setHeader method
//		response.addHeader("Access-Control-Expose-Headers", "xsrf-token");
//		response.setHeader("X-XSS-Protection", "1; mode=block");
//		// cyber security
////		response.setHeader("Content-Security-Policy", "policy");
//		response.setHeader("Referrer-policy", "no-referrer");
//		//
//
//		response.setHeader("Strict-Transport-Security", "max-age=31622400; includeSubDomains");
//		// response.setHeader("Content-Security-Policy","default-src 'self'
//		// http://fast.hsbcbankglobal.demdex.net/ https://hsbcbankglobal.demdex.net/
//		// http://fast.hsbcin.demdex.net/ https://hsbcin.demdex.net/
//		// https://bid.g.doubleclick.net/; connect-src 'self' http://dpm.demdex.net
//		// http://hsbcbankin.tt.omtrdc.net http://hsbcbankglobal.sc.omtrdc.net/;
//		// script-src 'self' 'unsafe-inline' 'unsafe-eval' http://tags.tiqcdn.com
//		// http://www.googleadservices.com/ https://googleads.g.doubleclick.net/ data: ;
//		// style-src 'self' 'unsafe-inline' 'unsafe-eval' ; font-src 'self' data:;
//		// img-src 'self' http://hsbcbankglobal.sc.omtrdc.net/ https://www.google.com/
//		// https://www.google.com.*/ http://www1.member-hsbc-group.com/
//		// https://secure.adnxs.com/ http://cm.everesttech.net/ http://dpm.demdex.net/
//		// data:; object-src 'self' http://www.hsbc.co.in/; plugin-types
//		// application/pdf");
//
//		response.setHeader("Set-Cookie", "key=value; Secure; HttpOnly; SameSite=strict");
//		// response.setHeader("SET-COOKIE", "JSESSIONID="
//		// +((HttpServletRequest)request).getSession().getId()
//		// +";Path="+request.getContextPath()+";Secure;HttpOnly");
//		// String sessionid = request.getSession().getId();
//		// response.setHeader("SET-COOKIE", "JSESSIONID=" + sessionid +
//		// ";Secure;HttpOnly");
//		/*
//		 * Cookie cookie = getCookie(request, "JSESSIONID"); // Cookie[] requestCookies
//		 * = request.getCookies();
//		 * 
//		 * if (cookie != null) { log.info("Got JSESSION ID cookie");
//		 * 
//		 * response.setHeader("SET-COOKIE", "JSESSIONID=" + cookie.getValue() +
//		 * ";Secure;HttpOnly"); }
//		 */
//		/*
//		 * Cookie cookie2 = getCookie(request, "multiapp"); // Cookie[] requestCookies =
//		 * request.getCookies();
//		 * 
//		 * if (cookie2 != null) { log.info("Got Multiapp cookie");
//		 * response.setHeader("SET-COOKIE", "multiapp=" + generateUniqueId() +
//		 * ";Secure;HttpOnly"); }
//		 */
//
//		
//	    response.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=(), fullscreen=(self), payment=()");
//	    response.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' allowed.com; img-src 'self' allowed.com;  style-src 'self' 'unsafe-inline';");
//		log.info("Honeypot variable name ===" + honeyPotVarName);
//
//		 Collection<String> headerNames = response.getHeaderNames();
//			for (String header : headerNames) {
//				log.info(header + ": " + response.getHeader(header));
//			}
//        
//        
//		if (honeypotFilter(request, response)) {// honeyPotVarName is empty
//			if (throttlingFilter(request, response)) {
//				if (corsFilter(request, response)) {
//					filterChain.doFilter(request, response);
//				}
//			}
//		}
//	}
//
//	
//
//	public Cookie getCookie(HttpServletRequest request, String name) {
//		if (request.getCookies() != null) {
//			for (Cookie cookie : request.getCookies()) {
//				if (cookie.getName().equals(name)) {
//					return cookie;
//				}
//			}
//		}
//
//		return null;
//	}
//
//	private boolean isOriginAllowed(final String origin) {
//
//		List<String> allowedOrigins = new ArrayList();
//		allowedOrigins.add("https://www.inmjoeyuat.p2g.netd2.hsbc.com.hk");
//		allowedOrigins.add("https://www.inmjoeysit.p2g.netd2.hsbc.com.hk");
//		allowedOrigins.add("https://www.accountopening.hsbc.co.in");
//		allowedOrigins.add("https://demo.perfios.com");
//		allowedOrigins.add("https://app.perfios.com");
//		allowedOrigins.add("https://epilibpsuat.in.hsbc");
//		allowedOrigins.add("https://dmsapi-uat.hsbc.co.in");
//
//		log.info("List of allowed origins==" + allowedOrigins.toString());
//
//		if (allowedOrigins.contains("https://demo.perfios.com") || allowedOrigins.contains("https://app.perfios.com")
//				|| allowedOrigins.contains("https://dmsapi-uat.hsbc.co.in")
//				|| allowedOrigins.contains("https://epilibpsuat.in.hsbc")) {
//			log.info("List contains perfios.com");
//			log.info("Origin is =================== ==", origin);
//
//			if (StringUtils.isBlank(origin)) {
//				log.info("Request is from Origin==if" + origin);
//				return true;
//			} else {
//				log.info("Origin of request is from else==", origin);
//				return true;
//			}
//		}
//		log.info("list not contains perfios.com");
//		return false;
//	}
//
//	private boolean corsFilter(HttpServletRequest request, HttpServletResponse response)
//			throws IOException, ServletException {
//
//		log.info("URL: " + request.getRequestURL());
//		log.info("URI: " + request.getRequestURI());
//		log.info("ORIGIN: " + request.getHeader("Origin"));
//		log.info("METHOD TYPE: " + request.getMethod());
//
//		if (request.getRequestURI().contains("perfiosAPI/retrieveReport")
//				|| request.getRequestURI().contains("ekyc/requestOtpBB")
//				|| request.getRequestURI().contains("ekyc/submitEkycBB")) {
//			final String origin = request.getHeader("Origin");
//			final String method = request.getMethod();
//			// Section 6.1.2
//			if (method.equalsIgnoreCase("POST")) {
//				if (!isOriginAllowed(origin)) {
//					log.info(origin + "  origin is not allowed to access the resource on this server");
//					return false;
//				}
//			}
//
//			return true;
//		}
//		return true;
//	}
//
//	private boolean honeypotFilter(HttpServletRequest request, HttpServletResponse response)
//			throws IOException, ServletException {
//
//		if (StringUtils.isNotEmpty(request.getParameter(honeyPotVarName))) {
//
//			return false;
//
//		}
//
//		return true;
//	}
//
//	private boolean throttlingFilter(HttpServletRequest request, HttpServletResponse response)
//			throws IOException, ServletException {
//
//		Cache blackListedcache = cacheManager.getCache("blackListedCache");
//		Cache cache1 = cacheManager.getCache("cache1");
//		// String ipAddress = request.getRemoteAddr();//arun
//		String ipAddress = request.getHeader("X-FORWARDED-FOR");
//		log.info("X-FORWARDED-FOR===IP==throttlingFilter=" + ipAddress);
//		if (null == ipAddress || ipAddress.length() == 0) {
//			ipAddress = request.getRemoteAddr();
//			log.info("getRemoteAddr===IP=throttlingFilter==" + ipAddress);
//		}
//		if (StringUtils.isNotEmpty(ipAddress) && ipAddress.contains(",")) {
//			ipAddress = ipAddress.substring(0, ipAddress.indexOf(","));
//			log.info("client===IP=persistApplicantDetails=XFF-HEADER=" + ipAddress);
//		} else {
//			log.info("client===IP=persistApplicantDetails==" + ipAddress);
//		}
//		String requestURI = request.getRequestURI();
//
//		Boolean flag = findIpInCache(blackListedcache, ipAddress);
//
//		if (flag) {
//			log.info("throttling request found");
//
//			return false;
//		} else {
//			long numberOfRequests = 10000000;
//			if (!requestURI.contains("/resources/")) {
//
//				prepareMap(ipAddress, cache1);
//			}
//			List<LocalDateTime> requestTime = requestStoreMap.get(ipAddress);
//
//			List<LocalDateTime> requestTimeInstants = requestTime.stream().filter(Objects::nonNull)
//					.collect(Collectors.toList());
//			/*
//			 * for (LocalDateTime localDateTime : requestTimeInstants) {
//			 * log.info("print values insideRequestTime after removing null ::>" +
//			 * localDateTime); }
//			 */
//
//			Long countRequestInLast1Second = requestTimeInstants.stream()
//					.filter(a -> (Duration.between(a, LocalDateTime.now()).getSeconds() >= 0)
//							&& (Duration.between(a, LocalDateTime.now()).getSeconds() <= 60))
//					.count();
//
//			if (countRequestInLast1Second > numberOfRequests) {
//				storeBlackListedIp(blackListedcache, ipAddress);
//			}
//
//			return true;
//		}
//
//	}
//
//	private Map<String, List<LocalDateTime>> storeInCache(Cache cache1, String ipAddress) {
//		cache1.put(ipAddress, this.requestStoreMap);
//		return this.requestStoreMap;
//	}
//
//	private void prepareMap(String ipAddress, Cache cache1) {
//
//		if (!requestStoreMap.containsKey(ipAddress)) {
//			List<LocalDateTime> requestTimeInstant = new ArrayList<>();
//			requestTimeInstant.add(LocalDateTime.now());
//
//			requestStoreMap.put(ipAddress, requestTimeInstant);
//		} else {
//			List<LocalDateTime> requestTimeInstant = requestStoreMap.get(ipAddress);
//			requestTimeInstant.add(LocalDateTime.now());
//			requestStoreMap.put(ipAddress, requestTimeInstant);
//		}
//		storeInCache(cache1, ipAddress);
//
//	}
//
//	private void storeBlackListedIp(Cache blackListedCache, String ipAddress) {
//		blackListedMap.put(ipAddress, LocalDateTime.now());
//		blackListedCache.put(ipAddress, blackListedMap);
//
//	}
//
//	private Boolean findIpInCache(Cache blackListedCache, String ipAddress) {
//		return blackListedCache.get(ipAddress) != null ? true : false;
//
//	}
//
//	private String convertObjectToJson(Object object) throws JsonProcessingException {
//		return mapper.writeValueAsString(object);
//	}
//
//}