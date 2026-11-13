export type Level = 'Beginner' | 'Intermediate' | 'Advanced'

export type Download = {
  label: string
  /** Path under /public, e.g. "/decks/getting-started.pdf" */
  href: string
  format: 'PDF' | 'PPTX' | 'KEY' | 'ZIP'
  size?: string
}

export type TutorialStep = {
  title: string
  body: string
  /** Optional snippet shown in a code block (prompt, command, config). */
  snippet?: string
}

export type Workshop = {
  slug: string
  title: string
  summary: string
  level: Level
  duration: string
  topics: string[]
  /** Leave empty to show "Deck coming soon". */
  downloads: Download[]
  steps: TutorialStep[]
}

export const workshops: Workshop[] = [
  {
    slug: 'getting-started',
    title: 'Getting started with Devin',
    summary:
      'Connect a repo, set up your environment, and ship your first pull request with Devin in under an hour.',
    level: 'Beginner',
    duration: '45 min',
    topics: ['Setup', 'First session'],
    downloads: [
      {
        label: 'Slide deck',
        href: '/decks/getting-started-with-devin.pdf',
        format: 'PDF',
      },
    ],
    steps: [
      {
        title: 'Connect your Git provider',
        body: 'In Settings, connect GitHub (or GitLab, Bitbucket, Azure DevOps) and pick the repositories Devin is allowed to work in.',
      },
      {
        title: 'Set up the environment',
        body: 'Give Devin the commands to install dependencies, run the app and run the tests. Devin saves this setup so every new session starts ready to work.',
      },
      {
        title: 'Start your first session',
        body: 'Describe a small, well-scoped task. Name the repo, the files or feature involved, and how you will know it is done.',
        snippet:
          'In acme/web, add a "Copy link" button to the share dialog.\nUse the existing <Button> component. Add a unit test.\nOpen a PR when the tests pass.',
      },
      {
        title: 'Review the pull request',
        body: 'Read the diff, leave comments on the PR, and Devin will push follow-up commits. Merge when you are happy.',
      },
    ],
  },
  {
    slug: 'prompting-devin',
    title: 'Writing prompts Devin can finish',
    summary:
      'The anatomy of a great task: context, constraints, and a clear definition of done. With before/after examples.',
    level: 'Beginner',
    duration: '30 min',
    topics: ['Prompting'],
    downloads: [],
    steps: [
      {
        title: 'Say what "done" looks like',
        body: 'Tests passing, a PR opened, a screenshot attached. A concrete finish line keeps a session focused.',
      },
      {
        title: 'Point at the code',
        body: 'Mention the repo, directories, files or similar features Devin should copy patterns from.',
      },
      {
        title: 'Scope it like a ticket',
        body: 'One feature or bug per session. Split large projects into tasks you could hand to a teammate.',
        snippet:
          'Bad:  "Improve the dashboard"\nGood: "On /dashboard, show a skeleton while orders load.\n       Match the skeleton used on /settings. Add a test."',
      },
    ],
  },
  {
    slug: 'knowledge-and-playbooks',
    title: 'Knowledge, playbooks and repeatable work',
    summary:
      'Teach Devin your team conventions once, then turn recurring tasks into playbooks anyone can run.',
    level: 'Intermediate',
    duration: '50 min',
    topics: ['Knowledge', 'Playbooks'],
    downloads: [],
    steps: [
      {
        title: 'Capture conventions as Knowledge',
        body: 'Add short notes about how your codebase works: test commands, naming rules, where things live. Devin recalls them when they are relevant.',
      },
      {
        title: 'Write a playbook',
        body: 'A playbook is a reusable prompt with steps, guidelines and a definition of done, for work you repeat (dependency upgrades, new API endpoints, migrations).',
      },
      {
        title: 'Run it across repos',
        body: 'Start the same playbook in several sessions to roll a change out across many services.',
      },
    ],
  },
  {
    slug: 'team-workflows',
    title: 'Devin in Slack, Linear and Jira',
    summary:
      'Bring Devin into the tools your team already uses: tag it in Slack, assign it tickets, and review its PRs together.',
    level: 'Intermediate',
    duration: '40 min',
    topics: ['Integrations', 'Teams'],
    downloads: [],
    steps: [
      {
        title: 'Install the integrations',
        body: 'Connect Slack and your ticket tracker from Settings so Devin can be started from a message or a ticket.',
      },
      {
        title: 'Start a session from Slack',
        body: 'Mention @Devin in a thread with the task. Devin replies in the thread with progress and the PR link.',
        snippet: '@Devin the signup form accepts emails without a TLD. Fix the\nvalidation in acme/web and add a regression test.',
      },
      {
        title: 'Hand Devin a ticket',
        body: 'Assign or tag Devin on a well-written ticket. The ticket becomes the prompt, so the acceptance criteria matter.',
      },
    ],
  },
  {
    slug: 'review-and-ship',
    title: 'Reviewing and shipping Devin’s work',
    summary:
      'Code review habits, CI, and testing strategies that let you merge AI-written changes with confidence.',
    level: 'Advanced',
    duration: '60 min',
    topics: ['Code review', 'Testing'],
    downloads: [],
    steps: [
      {
        title: 'Make CI the first reviewer',
        body: 'Lint, type checks and tests on every PR give Devin fast feedback; it fixes failing checks on its own.',
      },
      {
        title: 'Review like it is a teammate',
        body: 'Comment on the PR exactly as you would for a colleague. Specific comments produce specific fixes.',
      },
      {
        title: 'Ask for evidence',
        body: 'For UI work, ask Devin to test the change in its browser and attach screenshots or a recording to the PR.',
      },
    ],
  },
]

export const levels: Level[] = ['Beginner', 'Intermediate', 'Advanced']
