'use strict';

import context  from './contexts/context.js';
import context301  from './contexts/context-3.0.1.js';
import context302  from './contexts/context-3.0.2.js';
import context303  from './contexts/context-3.0.3.js';
import contextClr  from './contexts/clrv2p0.js';
import contextExtensions  from './contexts/extensions.js';

const contexts = new Map();

contexts.set("https://purl.imsglobal.org/spec/ob/v3p0/context/ob_v3p0.jsonld", context);
contexts.set("https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json", context301);
contexts.set("https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.2.json", context302);
contexts.set("https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json", context303);
contexts.set("https://purl.imsglobal.org/spec/clr/v2p0/context.json", contextClr);
contexts.set("https://purl.imsglobal.org/spec/ob/v3p0/extensions.json", contextExtensions);


export default  {
    contexts
};