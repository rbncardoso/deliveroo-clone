import sanityClient, { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = sanityClient({
    projectId : "8ch9srqr",
    dataset: "production",
    useCdn: "ture",
    apiVersion: "2022-10-24",

});