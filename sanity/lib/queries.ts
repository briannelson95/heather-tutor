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
`;

export const aboutQuery = groq`
    *[_type == "page" && title == "About"][0]{
        ...
    }
`;

export const settingsQuery = groq`
    *[_type == "settings" && _id == "settings"][0]{
        ...,
        navigation[]{
            ...,
            link->{
                slug{
                    current
                }
            }
        },
        "favicon": favicon.asset->url
    }
`;

export const thankYouQuery = groq`
    *[_type == "page" && title == "Thank you"][0]{
        title,
        slug,
        body
    }
`;

export const pageQuery = groq`
    *[]
`