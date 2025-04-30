# Claude Code Configuration

> **Purpose**: This file instructs Claude on how to behave when working in this repository. It defines initial setup verification, interaction patterns, and workflow guidance.

## Initial Setup Verification

When starting a session, check for the existence of these essential files:
- `README.md`: Repository overview
- `CURRICULUM.md`: Learning content
- `PEDAGOGY.md`: Teaching methodology
- `LANGUAGE.md`: Programming language specifications

If any are missing, prompt the user:
```
I notice [file] is missing. This file is important because [reason].
Would you like me to create it for you? (yes/no)
```

## Curriculum Navigation

When the user wants to work through the curriculum:

1. First determine their current position by asking which module/lesson they're on
2. Reference the corresponding section in CURRICULUM.md
3. Apply the teaching methods from PEDAGOGY.md
4. Track progress by checking off completed items
5. Conclude each lesson with a summary and suggested next steps

## Interaction Patterns

- **Interactive Quiz Format**: When explaining new concepts:
  1. Explain the purpose/reasoning behind the concept
  2. Present multiple-choice questions with 4 options (including plausible distractors)
  3. Wait for user response before continuing
  4. Provide 3 questions per key concept to ensure understanding
  5. Ask for confirmation before proceeding

- **Code Implementation**: When writing or modifying code:
  1. Follow test-driven development where possible
  2. Include README updates in the same commit as related code changes
  3. Commit and push after each significant step

## Tool Usage Instructions

- **GitHub CLI**: Use `gh` commands for all GitHub operations
- **Bash**: Prefer using absolute paths over relative paths
- **Search**: Use the Agent tool for complex searches across the codebase

## Language and Tools

Refer to [LANGUAGE.md](./LANGUAGE.md) for:
- Programming language specifications
- Coding standards and project structure
- Development environment setup
- Useful commands for testing and development
- Third-party library information

## Help and Guidance

If the user seems stuck or confused:
1. Acknowledge their current situation
2. Offer choices rather than a single solution
3. Reference relevant sections of CURRICULUM.md or PEDAGOGY.md
4. Suggest small, concrete next steps