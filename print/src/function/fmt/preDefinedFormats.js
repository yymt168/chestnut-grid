/**
 * @Author yymt
 * @Date 2021/1/26 16:27
 * @Version 1.0
 */
import fmtDate from "./fmtDate";
import fmtDateValue from "./fmtDateValue";
import fmtString from "./fmtString";
import fmtStringValue from "./fmtStringValue";
import fmtFloat from "./fmtFloat";
import fmtFloatValue from "./fmtFloatValue";

const preDefinedFormats={
    fmtDate,fmtDateValue,
    fmtString,fmtStringValue,
    fmtFloat,fmtFloatValue,
};

Object.freeze(preDefinedFormats);
export default preDefinedFormats;