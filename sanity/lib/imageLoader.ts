const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const projectDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export default function sanityLoader({ src, width, quality }: any) {
    const prj = projectId
    const dataset = projectDataset
    const url = new URL(`${src}`)
    url.searchParams.set('auto', 'format')
    url.searchParams.set('fit', 'max')
    url.searchParams.set('w', width.toString())
    if (quality) {
        url.searchParams.set('q', quality.toString())
    }
    return url.href
  }