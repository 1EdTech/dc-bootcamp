export function toSeconds(dateAsString) {
    return Math.floor((new Date(dateAsString)) / 1000)
}