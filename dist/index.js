"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CxAuthCall_1 = require("ast-cli-javascript-wrapper/src/main/CxAuthCall");
var CxScanConfigCall_1 = require("ast-cli-javascript-wrapper/src/main/CxScanConfigCall");
var CxParamType_1 = require("ast-cli-javascript-wrapper/src/main/CxParamType");
var cxScanConfig = new CxScanConfigCall_1.CxScanConfigCall();
cxScanConfig.baseUri = "https://eu.ast.checkmarx.net";
cxScanConfig.clientId = "ast-github-action";
cxScanConfig.clientSecret = "1985057d-7479-4a01-82c0-06d0edc41228";
cxScanConfig.pathToExecutable = "";
var params = new Map();
params.set(CxParamType_1.CxParamType.PROJECT_NAME, "JayWrapperTestInt");
params.set(CxParamType_1.CxParamType.SCAN_TYPES, "sast");
params.set(CxParamType_1.CxParamType.ADDITIONAL_PARAMETERS, "--nowait");
params.set(CxParamType_1.CxParamType.SAST_PRESET_NAME, "Checkmarx Default");
params.set(CxParamType_1.CxParamType.S, ".");
var auth = new CxAuthCall_1.CxAuthCall(cxScanConfig);
auth.scanList().then(function (value) { console.log("Resolved value*****: " + value + " **********"); });
//# sourceMappingURL=index.js.map