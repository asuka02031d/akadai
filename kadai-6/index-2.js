const str1 =  "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'


try{
    console.log(JASON.parse(str1))
} catch (error) {
    console.log(error)
    //abcという文字列は正しいJASONではないから。
    //正しくは "abc"
}