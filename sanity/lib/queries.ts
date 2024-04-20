import { groq } from "next-sanity";

export const homepageQuery = groq`
    *[_type == "homepage" && _id == "homepage"] {
        ...,
        pageBuilder[]{
            _type == "subjectGallery" => {
            ...,
            subjectList[]->{
                title,
                desc,
                icon
            }
            },
            _type != "subjectGallery" => {
            ...
            }
        }
    }
`