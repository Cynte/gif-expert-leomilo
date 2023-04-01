export const sentenceCaser = (str) => {
    const newStr = str.charAt(0).toUpperCase() + str.substring(1)
    return newStr
}