package com.company.uniqueProject.Service;



import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import lombok.extern.slf4j.Slf4j;

import java.security.cert.X509Certificate;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
@Slf4j
public class IbpsPushAPIClass {
	
//	@Autowired
//	private Console console;
	
	public static void main(String[] args) throws Exception {
		// Comma-separated ARNs
		String arnList = "'8130847'";

		// Clean up and split the ARNs into a list
		List<String> arnNumbers = Arrays.stream(arnList.split(",")).map(arn -> arn.replace("'", "").trim())
				.collect(Collectors.toList());

		String externalApiUrl = "https://skm.accountopening.hsbc.co.in/credit-cards/bankBazaar/ekyc/getOtherAddres"; 
		RestTemplate restTemplate = createInsecureRestTemplate(); // Create RestTemplate instance
		StringBuilder responseLog = new StringBuilder();
         log.info("started");
		// Iterate over each ARN and call the external API
		for (String arn : arnNumbers) {
			try {
				// Prepare request body (if required by the API)
//				String requestBody = "{ \"frnNumber\": \"" + arn + "\" }";
				String requestBody = "{\r\n"
						+ "    \"frnNumber\": \""+arn+"\",\r\n"
						+ "    \"urlParamId\":\"omniflowPushRequired\"\r\n"
						+ "}";

				// Set headers
				HttpHeaders headers = new HttpHeaders();
				headers.set("Content-Type", "application/json"); // Set content type to JSON

				// Wrap request body and headers in HttpEntity
				HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

				// Call the external API
				ResponseEntity<String> response = restTemplate.postForEntity(externalApiUrl, entity, String.class);

				// Log the response
				responseLog.append("ARN: ").append(arn).append(", Response: ").append(response.getBody()).append("\n");
			} catch (Exception e) {
				// Log the error
				responseLog.append("ARN: ").append(arn).append(", Error: ").append(e.getMessage()).append("\n");
			}
			
			 // Add a delay of 2 seconds between each HTTP call
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                log.error("Thread interrupted during sleep: " + e.getMessage());
            }
		}
		
		

		// Print the log
		 log.info(responseLog.toString());
		
	      log.info("finished");

	}
	
	 // Create an insecure RestTemplate that skips SSL verification
    private static RestTemplate createInsecureRestTemplate() throws Exception {
        SSLContext sslContext = SSLContext.getInstance("TLS");
        sslContext.init(null, new TrustManager[]{
                new X509TrustManager() {
                    @Override
                    public void checkClientTrusted(X509Certificate[] x509Certificates, String s) {
                    }

                    @Override
                    public void checkServerTrusted(X509Certificate[] x509Certificates, String s) {
                    }

                    @Override
                    public X509Certificate[] getAcceptedIssuers() {
                        return new X509Certificate[0];
                    }
                }
        }, new java.security.SecureRandom());

        HttpsURLConnection.setDefaultSSLSocketFactory(sslContext.getSocketFactory());
        HttpsURLConnection.setDefaultHostnameVerifier((hostname, session) -> true);

        return new RestTemplate();
    }
}
