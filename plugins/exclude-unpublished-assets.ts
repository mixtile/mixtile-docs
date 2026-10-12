import fs from 'node:fs';
import path from 'node:path';
import type {Plugin} from '@docusaurus/types';

/**
 * Assets that only the unpublished Chinese translation references still reach
 * the build: the static-directory passthrough copies everything under
 * `static/`, whether or not a published page links to it. Drop them after the
 * build so the deployed English site does not carry megabytes nothing points
 * at. The sources stay in `static/` for the day the Chinese pages ship.
 */
const UNPUBLISHED_ASSETS = [
  'img/docs/using-a-hailo-ai-accelerator-on-mixtile-blade-3/b68f5cae2c87.webp',
  'img/docs/using-a-hailo-ai-accelerator-on-mixtile-blade-3/c8360e546b1d.webp',
  'img/docs/using-a-hailo-ai-accelerator-on-mixtile-blade-3/738745634d44.webp',
];

export default function excludeUnpublishedAssets(): Plugin {
  return {
    name: 'exclude-unpublished-assets',
    async postBuild({outDir}) {
      let removed = 0;
      let bytes = 0;
      for (const asset of UNPUBLISHED_ASSETS) {
        const file = path.join(outDir, asset);
        if (!fs.existsSync(file)) {
          continue;
        }
        bytes += fs.statSync(file).size;
        fs.rmSync(file);
        removed += 1;
      }
      console.log(
        `[exclude-unpublished-assets] removed ${removed} unreferenced asset(s), ` +
          `${(bytes / 1e6).toFixed(1)} MB`,
      );
    },
  };
}
