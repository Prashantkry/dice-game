export function isInteger(input:string){
    return input?.match(/^\d+$/) ?? false // (/start/end) -> d for decimal 0-9 -> + means atleast 1 digit in string for regular expression to match 
}