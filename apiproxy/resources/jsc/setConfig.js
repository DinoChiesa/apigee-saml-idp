// This should come from KVM config - hardcoded here :-)

// Please update for your environment
context.setVariable("sf.issuer", "https://deecee-test.apigee.net");
context.setVariable("sf.subject", "dpchiesa@hotmail.com");

// Salesforce Endpoint : Login URL.
// Find this in SFDC, under Security Controls --> Single Signon Settings
context.setVariable("sf.callback", "https://deecee-apigee-dev-ed.my.salesforce.com?so=00D61000000Yiw7");

// I think this is not used
context.setVariable('original.recipient', 'https://login.salesforce.com?so=00D1a000000HIXB');

context.setVariable("apigee.keystore", "idpKeystore");
context.setVariable("apigee.keyalias", "key1");
