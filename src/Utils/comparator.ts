export const compare = (a: any, b: any, order: string): number => {
    return order === 'Asc' ? (a > b ? 1 : b > a ? -1 : 0) : (a > b ? -1 : b > a ? 1 : 0)
}