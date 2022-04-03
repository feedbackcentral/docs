/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  guides: [
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides',
        {
          type: 'category',
          label: 'Integrations',
          items: [
            'guides/integrations/twitter'
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
  ],
  reference: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'about',
        'faq'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Ingest',
      items: [
        'reference/ingest/integrations'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Web UI',
      items: [
        'reference/ui/overview'
      ],
      collapsed: false,
    },
  ],
}
