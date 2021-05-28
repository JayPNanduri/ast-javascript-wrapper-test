import {CxAuthCall} from "ast-cli-javascript-wrapper/src/main/CxAuthCall";
import {CxScanConfigCall} from "ast-cli-javascript-wrapper/src/main/CxScanConfigCall";
import {CxParamType} from "ast-cli-javascript-wrapper/src/main/CxParamType";
let cxScanConfig = new CxScanConfigCall();
cxScanConfig.baseUri="https://eu.ast.checkmarx.net";
cxScanConfig.clientId = "ast-github-action";
cxScanConfig.clientSecret = "1985057d-7479-4a01-82c0-06d0edc41228";
cxScanConfig.pathToExecutable = "";
let params: Map<CxParamType,string> = new Map<CxParamType,string>();
params.set(CxParamType.PROJECT_NAME,"JayWrapperTestInt");
params.set(CxParamType.SCAN_TYPES,"sast");
params.set(CxParamType.ADDITIONAL_PARAMETERS,"--nowait");
params.set(CxParamType.SAST_PRESET_NAME,"Checkmarx Default");
params.set(CxParamType.S,".");
const auth = new CxAuthCall(cxScanConfig);
auth.scanList().then( value => { console.log("Resolved value*****: " + value + " **********")});