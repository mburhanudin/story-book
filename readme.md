#  UI-COMPONENT
## FOLDER STRUCTURE IN THIS PROJECT

```

└── src
    ├── Tag
    │   └── index.tsx
    ├── index.css
    ├── index.ts
└── stories
    ├── Tag.stories.tsx
```

### Language: Typescript
### Framework: storybook
### TailwindCSS as project's CSS framework
### Vite as project's bundler

## Project setup

1. ``` using node v14.20.0 / LTS ```

2. ``` npm install ```

3. ``` npm run build ```

4. ``` npm run storybook ```

## Code Contribution

1. Take a task from jira board
2. Start a new feature in your local repository.

   ```
   git checkout -b feat/no-ticket or git checkout -b hotfix/no-ticket (for bug fixing)
   ```

3. Start coding and follow the code convention
4. Commit Convention
    ```
    git commit -m "add feature login"
    ```
5. Push the feature

   ```
   git push origin your-branch
   ```

## Pull Request

Before you create Pull Request, you **SHOULD ALWAYS** review it first:

- Make sure you have tested the app and make sure **IT IS RUNNING AS EXPECTED** in your local.
- Make sure you have tested the app, not only for the best case scenario, but also on every possible user flow.
- Review the content for technical accuracy (logic error, ESlint error, console error, typo, convention , etc).
- Make sure that your branch is up to date with the base branch.

## Color Pallete
- Make sure using color from tailwind config
