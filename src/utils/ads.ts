/* Returns the size with the smallest height. A common use for this
 * is setting minimum heights for ad units.
 */
export function smallestSize(sizes: [number, number][]): [number, number] {
  return sizes.reduce((smallestSize, size) => {
    const smallestHeight = Math.max(smallestSize[1], size[1])

    return size.indexOf(smallestHeight) ? size : smallestSize
  })
}
