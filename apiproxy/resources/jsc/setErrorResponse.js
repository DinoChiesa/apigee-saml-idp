var html = '<html><head></head> <body> There has been an error logging in. </body> </html>';

context.setVariable("response.content", html);
context.setVariable("response.header.Content-Type", "text/html");
