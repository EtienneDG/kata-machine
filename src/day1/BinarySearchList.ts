export default function bs_list(haystack: number[], needle: number): boolean {
    let min = 0
    let max = haystack.length
    console.log(haystack)
    while (min < max) {
        const i = Math.floor(min + (max - min) / 2)

        if (needle == haystack[i]) {
            return true
        }
        else if (haystack[i] > needle) {
            max = i
        }   
        else {
            min = i + 1 
        }
    }
    return false;
}
