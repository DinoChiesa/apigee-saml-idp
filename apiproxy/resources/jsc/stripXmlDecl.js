// <Javascript name="JS-stripXmlDecl">
//   <Properties>
//     <Property name='inputvar'>assertion.content</Property>
//   </Properties>
//   <ResourceURL>jsc://stripXmlDecl.js</ResourceURL>
// </Javascript>

var c = context.getVariable(properties.inputvar); 
c = c.replace('<?xml version="1.0" encoding="UTF-8"?>', '');
c = c.replace("<?xml version='1.0' encoding='UTF-8'?>", '');
context.setVariable(properties.inputvar, c);
