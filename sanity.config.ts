import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema';
import { iconPicker } from 'sanity-plugin-icon-picker';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { structure } from './sanity/lib/structure';

const singletonAction = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = new Set(["homepage"])

export default defineConfig({
  basePath: '/admin',
  title: "Heather's Tutoring",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    iconPicker(),
    unsplashImageAsset()
  ],
})
